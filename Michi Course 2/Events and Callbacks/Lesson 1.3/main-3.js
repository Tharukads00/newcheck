// ===== YOUR TASK =====
// Show the live character count of the message textarea.
// Full details are in the problem description.
//
// TODO: select #message-input and #char-count, and on each 'input' event
//       set #char-count to the current length of the textarea's value.

const textArea = document.querySelector('#message-input');
const count = document.querySelector('#char-count');

function updateCount(event){
    count.textContent = event.target.value.length;
}

textArea.addEventListener('input',updateCount);