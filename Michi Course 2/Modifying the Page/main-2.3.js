// ===== YOUR TASK =====
// Show how many characters remain as the user types in the username field.
// Full details are in the problem description.
//

const inputField = document.querySelector("input#username-field");
const display = document.querySelector("p#char-count");

const maxChar  = parseInt(inputField.getAttribute('maxlength'));

function updateRemainingCharacters(){
    var remainChar =  maxChar - parseInt(inputField.value.length);
    
    display.textContent = 'Remaining characters: '+ remainChar;
}

inputField.addEventListener('input', updateRemainingCharacters);
