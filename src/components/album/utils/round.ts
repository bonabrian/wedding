const round = (value: number, decimals: number = 0) => {
  return Number(Math.round(Number(`${value}e${decimals}`)) + `e-${decimals}`)
}

export default round
