const passwordElem = document.querySelector('#pw');
const copyBtn = document.querySelector('#copy-btn');
const lengthPass = document.querySelector('#length');
const lowerCase = document.querySelector('#lower-case');
const upperCase = document.querySelector('#upper-case');
const number = document.querySelector('#number');
const symbol = document.querySelector('#symbol');
const generatorBtn = document.querySelector('#generator');

const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%&_+=';

function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUpperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getRandomNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function getRandomPassword() {
    if (!lowerCase.checked && !upperCase.checked && !number.checked && !symbol.checked) {
        alert("Select any options before generating the password");
    } else if (lengthPass.value < 8) {
        alert("Password must be at least 8 characters.")
        return
    }
    const len = lengthPass.value;
    let password = '';
    for (let i = 0; i < len; i++) {
        const x = generatePassword();
        password += x;
    }
    passwordElem.innerText = password;
}

function generatePassword() {
    const passChar = [];
    if (lowerCase.checked) {
        passChar.push(getLowerCase());
    }
    if (upperCase.checked) {
        passChar.push(getUpperCase());
    }
    if (number.checked) {
        passChar.push(getRandomNumber());
    }
    if (symbol.checked) {
        passChar.push(getRandomSymbol());
    }
    if (passChar.length === 0) {
        return " "
    }
    return passChar[Math.floor(Math.random() * passChar.length)];
};

generatorBtn.addEventListener('click', getRandomPassword);
copyBtn.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = passwordElem.innerText;
    if ((password === "Password Here") || password === '') {
        alert("Generate password and then copy it to clipboard.");
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard")
});