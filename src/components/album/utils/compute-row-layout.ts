import type { GalleryImage } from '@/data/gallery'

import { findShortestPath, type TGraphFunc, type TNode } from './dijkstra'
import round from './round'

// return two decimal places rounded number
const ratio = ({ width, height }: GalleryImage) => round(width / height, 2)

// get the height for a set of photos in a potential row
const getCommonHeight = (
  images: GalleryImage[],
  containerWidth: number,
  margin: number,
) => {
  const rowWidth = containerWidth - images.length * (margin * 2)
  const totalAspectRatio = images.reduce((acc, image) => acc + ratio(image), 0)

  return rowWidth / totalAspectRatio
}

// calculate the cost of breaking at this node (edge weight)
const cost = (
  images: GalleryImage[],
  i: number,
  j: number,
  width: number,
  targetHeight: number,
  margin: number,
) => {
  const row = images.slice(i, j)
  const commonHeight = getCommonHeight(row, width, margin)
  return Math.pow(Math.abs(commonHeight - targetHeight), 2)
}

// return function that gets the neighboring nodes of node and returns costs
const getNeighbors =
  (
    targetHeight: number,
    containerWidth: number,
    images: GalleryImage[],
    limitNodeSearch: number,
    margin: number,
  ): TGraphFunc =>
  (start) => {
    const results: TNode = {}
    start = +start
    results[+start] = 0
    for (let i = start + 1; i < images.length + 1; ++i) {
      if (i - start > limitNodeSearch) break
      results[i] = cost(images, start, i, containerWidth, targetHeight, margin)
    }
    return results
  }

interface ComputeRowLayoutProps {
  containerWidth: number
  limitNodeSearch: number
  targetRowHeight: number
  margin: number
  images: GalleryImage[]
}

const computeRowLayout = ({
  containerWidth,
  limitNodeSearch,
  targetRowHeight,
  margin,
  images,
}: ComputeRowLayoutProps) => {
  const neighbors = getNeighbors(
    targetRowHeight,
    containerWidth,
    images,
    limitNodeSearch,
    margin,
  )
  let path = findShortestPath(neighbors, 0, images.length)
  path = path.map((node) => +node)
  for (let i = 1; i < path.length; ++i) {
    const row = images.slice(path[i - 1], path[i])
    const height = getCommonHeight(row, containerWidth, margin)
    for (let j = path[i - 1]; j < path[i]; ++j) {
      images[j].width = round(height * ratio(images[j]), 1)
      images[j].height = height
    }
  }
  return images
}

export default computeRowLayout
