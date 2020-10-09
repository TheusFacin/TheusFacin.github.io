function renderEstimate(n) {
  const { pi, f, points, inCircle } = getPiEstimate(n)
  const resultContainer = document.getElementById('result')

  // creating container
  const container = document.createElement('div')
  container.classList.add('container')
  container.classList.add('pi-estimate')

  // creating header
  const header = document.createElement('h2')
  const headerText = document.createTextNode('A -  Estimativa de pi')
  header.appendChild(headerText)
  container.appendChild(header)

  // creating values wrapper
  const wrapper = document.createElement('div')
  wrapper.classList.add('wrapper')

  // creating values elements
  const quantityElement = createElement(
    'div',
    'quantity',
    'Quantidade',
    points.length
  )
  const inCircleElement = createElement(
    'div',
    'in-circle',
    'No círculo',
    inCircle.length
  )
  const piElement = createElement('div', 'pi', 'Pi', pi.toFixed(4))
  const fElement = createElement('div', 'f', 'F', f.toFixed(4))

  // appending values
  wrapper.appendChild(piElement)
  wrapper.appendChild(quantityElement)
  wrapper.appendChild(inCircleElement)
  wrapper.appendChild(fElement)

  // creating points container
  const pointsContainer = document.createElement('div')
  pointsContainer.setAttribute('id', 'points-container')

  // adding every point to container
  points.forEach((point) => {
    const pointElement = createElement(
      'span',
      'point',
      '',
      `(${point.x.toFixed(4)}, ${point.y.toFixed(4)})`
    )

    pointElement.setAttribute(
      'title',
      `${point.isInCircle ? 'Está no círculo' : 'Não está no círculo'}`
    )
    pointsContainer.appendChild(pointElement)
  })

  // creating hide button
  const hideButton = document.createElement('button')
  hideButton.classList.add('hide-button')

  // adding functionality
  hideButton.addEventListener('click', (e) => {
    const points = document.getElementById('points-container')

    if (points.style.display !== 'grid') {
      points.style.display = 'grid'
    } else {
      points.style.display = 'none'
    }
  })

  // adding text to button
  const buttonText = document.createTextNode('Mostrar / ocultar pontos')
  hideButton.appendChild(buttonText)

  // adding wrapper, button and points to container
  container.appendChild(wrapper)
  container.appendChild(hideButton)
  container.appendChild(pointsContainer)

  // showing container
  resultContainer.appendChild(container)
}

function renderAHundredPi(n) {
  const { pis, betweenSD, f, average, std } = getAHundredPi(n)
  const resultContainer = document.getElementById('result')

  const container = document.createElement('div')
  container.classList.add('container')

  // creating header
  const header = document.createElement('h2')
  const headerText = document.createTextNode('B - 100 estimativas de pi')
  header.appendChild(headerText)
  container.appendChild(header)

  // creating values wrapper
  const wrapper = document.createElement('div')
  wrapper.classList.add('wrapper')

  // creating values elements
  const qtdElement = createElement(
    'div',
    'qtd',
    'Quantidade no desvio',
    betweenSD.length
  )
  const stdElement = createElement('div', 'std', 'σ (DP)', std.toFixed(4))
  const fElement = createElement('div', 'f', 'Fração entre o DP', f)
  const averageElement = createElement('div', 'average', 'Média', average.toFixed(4))

  // appending values
  wrapper.appendChild(stdElement)
  wrapper.appendChild(averageElement)
  wrapper.appendChild(qtdElement)
  wrapper.appendChild(fElement)

  // creating pis container
  const pisContainer = document.createElement('div')
  pisContainer.setAttribute('id', 'pis-container')

  // adding every pi to container
  pis.forEach((pi) => {
    const piElement = createElement('span', 'pi', '', pi.pi.toFixed(4))

    piElement.setAttribute(
      'title',
      `${pi.isBetweenStd ? 'Está no desvio' : 'Não está no desvio'}`
    )
    pisContainer.appendChild(piElement)
  })

  // creating hide button
  const hideButton = document.createElement('button')
  hideButton.classList.add('hide-button')

  // adding functionality
  hideButton.addEventListener('click', (e) => {
    const pis = document.getElementById('pis-container')

    if (pis.style.display !== 'grid') {
      pis.style.display = 'grid'
    } else {
      pis.style.display = 'none'
    }
  })

  // adding text to button
  const buttonText = document.createTextNode('Mostrar / Ocultar valores')
  hideButton.appendChild(buttonText)

  // adding wrapper, button and points to container
  container.appendChild(wrapper)
  container.appendChild(hideButton)
  container.appendChild(pisContainer)

  // showing container
  resultContainer.appendChild(container)
}

function renderAverages(n) {
  const { averages, betweenSD, f, average, std } = getAHunderdAverages(n)
  const resultContainer = document.getElementById('result')

  const container = document.createElement('div')
  container.classList.add('container')

  // creating header
  const header = document.createElement('h2')
  const headerText = document.createTextNode('C -  101 médias pi')
  header.appendChild(headerText)
  container.appendChild(header)

  // creating values wrapper
  const wrapper = document.createElement('div')
  wrapper.classList.add('wrapper')

  // creating values elements
  const qtdElement = createElement(
    'div',
    'qtd',
    'Quantidade no desvio',
    betweenSD.length
  )
  const stdElement = createElement('div', 'std', 'σ (DP)', std.toFixed(4))
  const fElement = createElement('div', 'f', 'Fração entre o DP', f)
  const averageElement = createElement('div', 'average', 'Média', average.toFixed(4))

  // appending values
  wrapper.appendChild(stdElement)
  wrapper.appendChild(averageElement)
  wrapper.appendChild(qtdElement)
  wrapper.appendChild(fElement)

  // creating points container
  const averagesContainer = document.createElement('div')
  averagesContainer.setAttribute('id', 'averages-container')

  // adding every average to container
  averages.forEach((average) => {
    const averageElement = createElement(
      'span',
      'average',
      '',
      average.average.toFixed(4)
    )

    averageElement.setAttribute(
      'title',
      `${
        average.isBetweenStd ? 'Está no desvio' : 'Não está no desvio'
      },\nvalores: ${average.values[0].toFixed(
        2
      )} - ${average.values[1].toFixed(2)} - ${average.values[2].toFixed(
        2
      )} - ${average.values[3].toFixed(2)}`
    )
    averagesContainer.appendChild(averageElement)
  })

  // creating hide button
  const hideButton = document.createElement('button')
  hideButton.classList.add('hide-button')

  // adding functionality
  hideButton.addEventListener('click', (e) => {
    const averages = document.getElementById('averages-container')

    if (averages.style.display !== 'grid') {
      averages.style.display = 'grid'
    } else {
      averages.style.display = 'none'
    }
  })

  // adding text to button
  const buttonText = document.createTextNode('Mostrar / ocultar valores')
  hideButton.appendChild(buttonText)

  // adding wrapper, button and points to container
  container.appendChild(wrapper)
  container.appendChild(hideButton)
  container.appendChild(averagesContainer)

  // showing container
  resultContainer.appendChild(container)
}

function renderClearButton() {
  const resultContainer = document.getElementById('result')

  const clearButton = document.createElement('button')
  clearButton.classList.add('clear-button')
  clearButton.addEventListener('click', clearResults)

  const buttonText = document.createTextNode('Limpar Resultados')
  clearButton.appendChild(buttonText)

  resultContainer.appendChild(clearButton)
}

function createElement(element, className, label, value) {
  const container = document.createElement(element)

  if (className) container.classList.add(className)

  const text = document.createTextNode(`${label ? label + ': ' : ''}${value}`)
  container.appendChild(text)

  return container
}

function clearResults() {
  const resultContaier = document.getElementById('result')
  resultContaier.innerHTML = ''
}
