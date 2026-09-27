// ===== YOUR TASK =====
// Convert the entered USD amount into the chosen currency as the user types.
// Full details are in the problem description.
//
// TODO: select #usd-input, #converted-amount, and #currency-selector; on
//       input, read the amount and the selected currency's rate, then call
//       a calculateConversion(amount, rate) function and show the result.
const usdInput =  document.querySelector('#usd-input');
const convertedDisplay =  document.querySelector('span#converted-amount');
const currencySelector =  document.querySelector('#currency-selector');

usdInput.addEventListener('input', function(){
    let amount = parseFloat(usdInput.value) || 0;
    let rate;
    if(currencySelector.value === "EUR"){
        rate  = 0.92;
    }else if(currencySelector.value === "GBP"){
        rate = 0.79;
    }
    
     convertedDisplay.textContent = calculateConversion(amount, rate);
})

function calculateConversion(amount, rate){
    let value  = amount*rate
    return (value.toFixed(2));

}
