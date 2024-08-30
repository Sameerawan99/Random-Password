
let input = document.getElementById('input')
let button = document.querySelector('button')
let limitElemnt = document.getElementById('limit')


let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcgetrisxkbhtft3748960472625#$%^^&hdjbwgdud'

function randomPass() {
    let limit = limitElemnt.value
    let password = ''
    for (let i = 0; i < limit; i++) { 
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    input.value = password 
}

button.addEventListener('click', randomPass)