// ===== YOUR TASK =====
// Build the word-guessing game described in the problem description.
//
// TODO: store the secret word; select the input, button, and feedback
//       elements; and on button click compare the (lowercased) guess to
//       the secret word -- show success and disable the controls on a
//       match, otherwise show "Try again!" and clear the input.

const secretWord = "javascript";
const input = document.querySelector("input#guessInput");
const button = document.querySelector("#guessButton");
const feedback = document.querySelector("#feedback");
const body = document.body;

function guessClick(){
    if(input.value.toLowerCase() === secretWord){
        feedback.textContent = "Correct! You guessed it!";
        body.classList.add("correct");
        input.setAttribute("disabled", "true");
        button.setAttribute("disabled", "true");
        
    }else{
        feedback.textContent = "Try again!";
        input.value = '';
        input.focus();

    }

}


button.addEventListener("click", guessClick);