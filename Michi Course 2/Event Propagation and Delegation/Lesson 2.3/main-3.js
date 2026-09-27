// ===== YOUR TASK =====
// Validate the signup form on submit: block empty usernames and show a
// message. Full details are in the problem description.
//
// TODO: select #signupForm, #username, and #formMessage; on submit, if the
//       username is empty preventDefault and show an error message/classes,
//       otherwise show a success message/classes.

const form = document.querySelector("#signupForm");
const username = document.querySelector("#username");
const msg = document.querySelector("#formMessage");

form.addEventListener("submit",(ev)=>{
 ev.preventDefault();
 if (username.value === ''){
    msg.textContent = "Username cannot be empty";
    msg.classList.remove('empty');
    msg.classList.remove('success');
    msg.classList.add('error');
 }else{
    msg.textContent = "Form submitted successfully";
    msg.classList.remove('empty');
    msg.classList.remove('error');
    msg.classList.add('success')
 }
});