const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  // getting number of points
  const n = Number(document.getElementById('n-input').value)

  if (!n) return alert('Por favor, insira um valor de n')

  // getting checkboxes
  const a = document.getElementById('check-a').checked
  const b = document.getElementById('check-b').checked
  const c = document.getElementById('check-c').checked

  clearResults()

  if (a || b || c) renderClearButton()
  else return alert('Por favor, selecione uma ou mais opções')

  if (a) renderEstimate(n)
  if (b) renderAHundredPi(n)
  if (c) renderAverages(n)
})

// A - get pi estimate
function getPiEstimate(n) {
  const points = []

  // create n points
  for (let _ in Array.from(Array(n).keys())) {
    const x = Math.random() * 2 - 1
    const y = Math.random() * 2 - 1

    const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))

    points.push({
      x,
      y,
      distance,
      isInCircle: distance <= 1,
    })
  }

  // filter which are in the circle of radius 1
  const inCircle = points.filter(({ isInCircle }) => isInCircle)

  // fraction
  const f = inCircle.length / points.length

  // pi estimate
  const pi = f * 4

  return {
    pi,
    f,
    points,
    inCircle,
  }
}

// B - 100 pi
function getAHundredPi(n) {
  const pis = []

  // getting 100 values
  for (let _ in Array.from(Array(100).keys())) {
    const { pi } = getPiEstimate(n)

    const error = pi - Math.PI

    pis.push({
      pi,
      error,
    })
  }

  // standard derivation
  const std = stdDev(pis.map((pi) => pi.pi))

  // filter which has error between SD +- 1
  const betweenSD = pis.filter((pi) => {
    const isBetweenStd = Math.abs(pi.error) < std
    pi.isBetweenStd = isBetweenStd
    return isBetweenStd
  })

  // fraction
  const f = betweenSD.length / 100

  return {
    pis,
    betweenSD,
    f,
    std,
    average: getAverage(pis.map((pi) => pi.pi)),
  }
}

// C - 101 averages
function getAHunderdAverages(n) {
  const averages = []

  // getting 101 averages
  for (let _ in Array.from(Array(101).keys())) {
    const pis = []

    // getting 4 values
    for (let _ in Array.from(Array(4).keys())) {
      pis.push(getPiEstimate(n).pi)
    }

    averages.push({
      average: getAverage(pis),
      error: getAverage(pis) - Math.PI,
      values: pis,
    })
  }

  // standard derivation
  const std = stdDev(averages.map((average) => average.average))

  // filter which has error between SD +- 1
  const betweenSD = averages.filter((average) => {
    const isBetweenStd = Math.abs(average.error) < std
    average.isBetweenStd = isBetweenStd
    return isBetweenStd
  })

  // fraction
  const f = betweenSD.length / 100

  return {
    averages,
    betweenSD,
    f,
    std,
    average: getAverage(averages.map(average => average.average)),
  }
}
