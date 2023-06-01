// elementos HTML
const textArea = document.querySelector('#textarea')
const resultArea = document.querySelector('.result')
const TextAreaResult = document.getElementById('TextAreaResult')
const btnCript = document.querySelector('.criptografar')
const btnDescript = document.querySelector('.descriptografar')
const btnCopy = document.querySelector('.copy')
const btnClean = document.querySelector('.clean')
const nothingFound = document.querySelector('#nothingFound')
const exclamation = document.querySelector('.exclamation')
const exclamationSpan = document.querySelector('.exclamation span')
const pResult = document.querySelector('.pResult')
const showBtnsAfterTheresult = document.querySelector('.showAfterTheresult')
const containerRight = document.querySelector('.container-right')

const checkbox = document.querySelector('#checkbox')
const labelDiv = document.querySelector('#labelDiv')
const label = document.querySelector('#label')

const body = document.querySelector('body')
const SectionRight = document.querySelector('#right')

const typeOfCript = document.querySelector('#typeOfCript')

const pFooter = document.querySelector('.pFooter')
const aFooter = document.querySelector('.aFooter')

//  verificar se existem letras com acentos
function checkAccent() {
  let textAreaValue = textArea.value
  for (let letter of textAreaValue) {
    let letterInLowerCase = letter.toLowerCase()
    if (
      letterInLowerCase == 'á' ||
      letterInLowerCase == 'à' ||
      letterInLowerCase == 'â' ||
      letterInLowerCase == 'ã' ||
      letterInLowerCase == 'é' ||
      letterInLowerCase == 'è' ||
      letterInLowerCase == 'í' ||
      letterInLowerCase == 'ó' ||
      letterInLowerCase == 'õ' ||
      letterInLowerCase == 'ô' ||
      letterInLowerCase == 'ú'
    ) {
      textArea.classList.add('alert')
      exclamation.classList.add('alert2')
      nothingFound.classList.remove('nothingFound')
      resultArea.classList.add('hide')
      containerRight.classList.remove('hide')
      TextAreaResult.classList.add('hide')
      showBtnsAfterTheresult.classList.add('hide')
      return true
    } else {
      return false
    }
  }
}

//criptografar e descriptografar com a criptografia de cesar
function criptografarCesar() {
  let textAreaValue = textArea.value.toLowerCase()
  const alphabt = 'abcdefghijklmnopqrstuvwxyz'
  let message = ''

  for (const char of textAreaValue) {
    let criptedLetter

    if (char == ' ') {
      criptedLetter = ' '
    } else {
      let index = alphabt.indexOf(char)
      index = index == 23 ? -3 : index
      index = index == 24 ? -2 : index
      index = index == 25 ? -1 : index
      criptedLetter = alphabt.charAt(index + 3)
    }
    message += criptedLetter
  }

  btnCopy.innerText = 'Copiar'
  btnCopy.classList.remove('copied')
  nothingFound.classList.add('nothingFound')
  resultArea.classList.remove('hide')
  containerRight.classList.add('hide')
  pResult.innerText = 'Essa é sua mensagem griptografada:'
  TextAreaResult.classList.remove('hide')
  TextAreaResult.value = message
  showBtnsAfterTheresult.classList.remove('hide')
}

function descriptografarCesar() {
  let textAreaValue = textArea.value.toLowerCase()
  const alphabt = 'abcdefghijklmnopqrstuvwxyz'
  let message = ''

  for (const char of textAreaValue) {
    let criptedLetter

    if (char == ' ') {
      criptedLetter = ' '
    } else {
      let index = alphabt.indexOf(char)
      index = index == 0 ? 26 : index
      index = index == 1 ? 27 : index
      index = index == 2 ? 28 : index
      criptedLetter = alphabt.charAt(index - 3)
    }

    message += criptedLetter
  }

  btnCopy.innerText = 'Copiar'
  btnCopy.classList.remove('copied')
  nothingFound.classList.add('nothingFound')
  resultArea.classList.remove('hide')
  pResult.innerText = 'Essa é sua mensagem desgriptografada:'
  TextAreaResult.classList.remove('hide')
  TextAreaResult.value = message
  showBtnsAfterTheresult.classList.remove('hide')
}

// botão clean e copy

btnCopy.addEventListener('click', () => {
  let copy = TextAreaResult.value
  navigator.clipboard.writeText(copy)

  btnCopy.innerText = 'Copiado!'
  btnCopy.classList.add('copied')
})

btnClean.addEventListener('click', () => {
  nothingFound.classList.remove('nothingFound')
  TextAreaResult.classList.add('hide')
  resultArea.classList.add('hide')
  containerRight.classList.remove('hide')
  showBtnsAfterTheresult.classList.add('hide')
  textArea.value = ''
  textArea.focus()
})

// dark mode

checkbox.addEventListener('change', () => {
  body.classList.toggle('bodyDark')
  SectionRight.classList.toggle('rightDark')
  btnClean.classList.toggle('buttonDark')
  btnCopy.classList.toggle('buttonDark')
  btnCript.classList.toggle('buttonDark')
  btnDescript.classList.toggle('buttonDark')
  TextAreaResult.classList.toggle('areaDark')
})

checkbox.addEventListener('change', () => {
  TextAreaResult.style.backgroundColor = checkbox.checked
    ? '#000637'
    : '#FFFFFF'
  TextAreaResult.style.color = checkbox.checked ? '#c3cefc' : '#052051'
  textArea.style.color = checkbox.checked ? '#c3cefc' : '#052051'
  exclamation.style.color = checkbox.checked ? '#c3cefc' : 'black'
})

checkbox.addEventListener('change', () => {
  labelDiv.style.animation = checkbox.checked
    ? 'toggleOn 500ms ease forwards'
    : 'toggleOff 500ms ease forwards'
  label.style.border = checkbox.checked
    ? '3px solid #008fcc'
    : '3px solid #004ede'

  pFooter.style.backgroundImage = checkbox.checked
    ? 'linear-gradient(to left, rgb(0, 249, 241), rgb(255, 0, 230))'
    : 'linear-gradient(to right, rgb(76, 0, 101), rgb(0, 41, 249))'
})

// criptografia padrão

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

const matriz = [
  ['a', 'ai'],
  ['e', 'enter'],
  ['i', 'imes'],
  ['o', 'ober'],
  ['u', 'ufat']
]

function criptografarDefault() {
  let textAreaValue = textArea.value.toLowerCase()
  let message
  for (let i of matriz) {
    if (textAreaValue.includes(i[0])) {
      message = textAreaValue.replaceAll(i[0], i[1])
    }
  }

  btnCopy.innerText = 'Copiar'
  btnCopy.classList.remove('copied')
  nothingFound.classList.add('nothingFound')
  resultArea.classList.remove('hide')
  containerRight.classList.add('hide')
  pResult.innerText = 'Essa é sua mensagem griptografada:'
  TextAreaResult.value = message
  TextAreaResult.classList.remove('hide')
  showBtnsAfterTheresult.classList.remove('hide')
}

function descriptografarDefault() {
  let textAreaValue = textArea.value.toLowerCase()
  let message
  for (let i of matriz) {
    if (textAreaValue.includes(i[1])) {
      message = textAreaValue.replaceAll(i[1], i[0])
    }
  }
  btnCopy.innerText = 'Copiar'
  btnCopy.classList.remove('copied')
  nothingFound.classList.add('nothingFound')
  resultArea.classList.remove('hide')
  containerRight.classList.add('hide')
  pResult.innerText = 'Essa é sua mensagem griptografada:'
  TextAreaResult.classList.remove('hide')
  TextAreaResult.value = message
  showBtnsAfterTheresult.classList.remove('hide')
}

// Botão para criptografar
btnCript.addEventListener('click', () => {
  let validation = checkAccent()

  if (validation) {
    return
  } else if (textArea.value == '') {
    textArea.classList.add('alert')
    exclamation.classList.add('alert2')
    exclamationSpan.innerText = 'Insira algum texto'
    nothingFound.classList.remove('nothingFound')
    resultArea.classList.add('hide')
    showBtnsAfterTheresult.classList.add('hide')
  } else {
    textArea.classList.remove('alert')
    exclamation.classList.remove('alert2')
    exclamationSpan.innerText = 'Não utilizar acento.'
    if (typeOfCript.value == 'cesar') {
      criptografarCesar()
    } else if (typeOfCript.value == 'default') {
      criptografarDefault()
    }
  }
  console.log(textArea.value)
})

// Botão para descriptografar
btnDescript.addEventListener('click', () => {
  let validation = checkAccent()

  if (validation) {
    return
  } else if (textArea.value == '') {
    textArea.classList.add('alert')
    exclamation.classList.add('alert2')
    exclamationSpan.innerText = 'Insira algum texto'
    nothingFound.classList.remove('nothingFound')
    resultArea.classList.add('hide')
    showBtnsAfterTheresult.classList.add('hide')
  } else {
    textArea.classList.remove('alert')
    exclamation.classList.remove('alert2')
    exclamationSpan.innerText = 'Não utilizar acento.'
    if (typeOfCript.value === 'cesar') {
      descriptografarCesar()
    } else if (typeOfCript.value === 'default') {
      descriptografarDefault()
    }
  }
  console.log(textArea.value)
})
