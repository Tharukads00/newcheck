// ===== YOUR TASK =====
// Build the click counter described in the problem description.
//
// TODO: track a click count, select #counter-button and #click-display,
//       and on each button click increment the count and show it in
//       #click-display.

let clickCount =0;

const btn = document.querySelector('#counter-button');
const span = document.querySelector('span#click-display');

btn.addEventListener('click',()=>{
    clickCount++;
    span.textContent = clickCount;
})