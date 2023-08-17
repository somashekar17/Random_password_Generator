const passwordBox = document.getElementById("Password");
const length = 16;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numBer = "1234567890";
const symbol = '!@#$%^&*()_+{}|:"<>?=-';

const allChars = upperCase + lowerCase + numBer + symbol;

function createPassword() {
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numBer[Math.floor(Math.random() * numBer.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();

    navigator.clipboard.writeText(passwordBox.value)
        .then(() => {
            console.log('Password copied to clipboard');
        })
        .catch((error) => {
            console.error('Error copying password:', error);
        });
}
