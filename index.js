
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';


function generateNewPassword() {
    const length = parseInt(document.getElementById('length').value); 
    console.log(`Password length ${length}`);
    const useUppercase = document.getElementById('uppercase').checked;
    const useLowercase = document.getElementById('lowercase').checked;
    const useNumber = document.getElementById('numbers').checked;
    const useSymbols = document.getElementById('symbols').checked;

    let allChars = '';
    if (useUppercase) allChars += uppercaseChars;
    if (useLowercase) allChars += lowercaseChars;
    if (useNumber) allChars += numberChars;
    if (useSymbols) allChars += symbolChars;

    if (allChars === '') {
        alert('Please select at least one character type for the password!');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIdx = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIdx];
    }

    document.getElementById('generated-password').value = password;
}

function copyPassword() {
    const passwordField = document.getElementById('generated-password');
    if(passwordField.value===''){
        alert('First generate password!');
        return ;
    }
    navigator.clipboard.writeText(passwordField.value);
    alert('Password copied to clipboard!');
    passwordField.value='';
}

