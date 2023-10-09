import round from './round'

interface FindIdealNodeSearchProps {
  targetRowHeight: number
  containerWidth: number
}

const findIdealNodeSearch = ({
  targetRowHeight,
  containerWidth,
}: FindIdealNodeSearchProps) => {
  const rowAspectRatio = containerWidth / targetRowHeight
  return round(rowAspectRatio / 1.5) + 8
}

export default findIdealNodeSearch
