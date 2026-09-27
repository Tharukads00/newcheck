// ===== YOUR TASK =====
// Build the 5-second timer: clicking the button starts a countdown that
// updates the display when it finishes. Full details are in the problem
// description.
//


const button = document.querySelector('#startButton');
const display = document.querySelector('#timerDisplay');
const feedback = document.querySelector('#timerFeedback');

function startTimer(){
    display.textContent = "Timer started! Wait 5 seconds...";
    feedback.textContent = "";
    button.setAttribute('disabled', true);
    setTimeout(onTimerComplete, 5000);

}

function onTimerComplete(){
    display.textContent = "Time's up!";
    feedback.textContent = "The 5-second countdown is complete!";
    button.removeAttribute('disabled');

}

button.addEventListener('click', startTimer);