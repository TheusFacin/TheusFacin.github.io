// average
function getAverage(arr = []) {
  return arr.reduce((prev, curr) => prev + curr, 0) / arr.length
}

// standard derivation
function stdDev(arr = []) {
  const average = getAverage(arr)
  const variance = arr.reduce((prev, curr) => {
    const v = Math.pow(curr - average, 2) / (arr.length - 1)
    return prev + v
  }, 0)
  return Math.sqrt(variance)
}
