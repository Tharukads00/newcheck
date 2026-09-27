// ===== YOUR TASK =====
// Log a tick to the list every second for five seconds when the button is
// clicked. Full details are in the problem description.
//


const button = document.querySelector('#start-log-btn');
const tickList = document.querySelector('#tick-list');

function startLogging(){
    var count = 0;
    button.setAttribute('disabled', true);
    var intervalId = setInterval(()=>{
        count++;
        const newEl = document.createElement("li");
        newEl.textContent = "Tick " + count;
        tickList.append(newEl);

        if (count === 100){
            clearInterval(intervalId);
            button.removeAttribute("disabled");

        }
    }, 1000)

}

button.addEventListener("click", startLogging);

