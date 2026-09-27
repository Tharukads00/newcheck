// ===== YOUR TASK =====
// Give live feedback on whether the typed email contains an "@".
// Full details are in the problem description.
//
// TODO: select #email-input and #feedback-message; on each 'input' event,
//       check whether the value includes '@' and update the feedback
//       message text and its 'valid'/'invalid' classes accordingly.

const emlInp = document.querySelector("#email-input");
const msg = document.querySelector("#feedback-message");

emlInp.addEventListener('input',()=>
{
    const inpVal = emlInp.value;
    if (inpVal.includes('@')){
        msg.textContent = "Valid email format";
        msg.classList.add('valid');
        msg.classList.remove('invalid');
    }else{
        msg.textContent = "Please include @ in your email";
        msg.classList.add('invalid');
        msg.classList.remove('valid');
    }
})
