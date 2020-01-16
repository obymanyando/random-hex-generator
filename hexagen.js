//A SIMPLE HEXA COLOR RANDOMIZER

const flexContainer = document.querySelector('.flex-container')
const headContainer = document.querySelector('.container')
const generateBtn = document.getElementById('generateBtn')
const stopBtn = document.getElementById('stopBtn')
const userInput = document.getElementById('userData')

//Generate colors
const generateHexaCode = () => {

    let string = '0123456789abcdef'
    let hexaColor = '#'
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * string.length)
        hexaColor += string[index]
    }
    return hexaColor
}

generateBtn.addEventListener('click', () => {
    validator()
})

validator = () => {
    if (userData.value <= 0) {
        alert('Please enter number greater than 0.')
    }
    //  else if (userData.value != userData.type) {
    //     alert('That is not a number.')} 
    else {
        clearWindow()
    }
}

clearWindow = () => {
    if (flexContainer.textContent != '') {
        flexContainer.textContent = ''
        generator()
    } else {
        generator()
    }
}

generator = () => {

    const getInput = document.querySelector('#userData').value

    for (let i = 1; i <= getInput; i++) {
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
        codeDiv.appendChild(code)
        codeDiv.appendChild(copyBtn)
        flexContainer.append(codeDiv)

    }
}

function clearInput() {
    document.querySelector('#userData').value = ''
}