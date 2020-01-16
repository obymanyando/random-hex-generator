//A SIMPLE HEXA COLOR RANDOMIZER

//STILL TO ADD: mouseover effect
//Use 'this' to get stuff out of obj
window.addEventListener('load', () => {
    console.log('Window loaded')
})

const flexContainer = document.querySelector('.page__container')
const headContainer = document.querySelector('header__container')
const generateBtn = document.getElementById('generateBtn')
const stopBtn = document.getElementById('stopBtn')
const userInput = document.querySelector('.page__control')

//Generate colors
const generateHexaCode = () => {

    let string = '0123456789abcdef'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * string.length)
        color += string[index]
    }
    return color
}

generateBtn.addEventListener('click', () => {
    validator()
})

validator = () => {
    if (page__control.value <= 0) {
        alert('Please enter number greater than 0.')
    }
    //  else if (page__control.value != page__control.type) {
    //     alert('That is not a number.')} 
    else {
        clearWindow()
    }
    console.log(page__control.value)
}

function clearWindow() {
    if (flexContainer.textContent !== '') {
        flexContainer.textContent = ''
        generator()
    } else {
        generator()
    }
}

const generator = () => {
    const getInput = document.querySelector('.page__control').value
    for (let i = 1; i <= getInput.value; i++) {
        const codeDiv = document.createElement('div')
        const code = document.createElement('h2')
        const copyBtn = document.createElement('button')

        copyBtn.textContent = 'Copy code'
        code.textContent = i
        stopBtn.addEventListener('click', stopTimer)
        copyBtn.addEventListener('click', copyFunc)
        copyBtn.addEventListener('click', clearInput)

        //apply colors to div
        backgroundGen = () => {
            let bgColor = generateHexaCode()
            code.textContent = bgColor
            if (i % 2 == 0) {
                codeDiv.style.background = bgColor
            } else {
                codeDiv.style.background = bgColor
            }
        }

        codeDiv.appendChild(code)
        codeDiv.appendChild(copyBtn)

        //clearInterval
        function stopTimer() {
            clearInterval(timerFunc)
        }

        //Copy text
        function copyFunc() {
            let textArea = document.createElement('textarea')
            document.body.append(textArea)
            textArea.textContent = code.textContent
            textArea.select()
            document.execCommand('copy')
            textArea.remove()
        }
        const timerFunc = setInterval(backgroundGen, 2000)

        flexContainer.append(codeDiv)

    }
}

// const getFormValue = () => {
// // let getInput = document.querySelector('.page__control')
// let num = page__control.value
// return num
// console.log(num)
// }
// console.log(userInput.value)


function clearInput() {
    document.querySelector('userInput').value = ''
}