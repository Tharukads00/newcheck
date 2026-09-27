// ===== YOUR TASK =====
// Make #info-card respond to hover by changing its class and text.
// Full details are in the problem description.
//
// TODO: select #info-card, write functions for mouseover (add 'highlight',
//       show hovering text) and mouseout (remove 'highlight', restore
//       text), and attach them as event listeners.

const infoCard  = document.querySelector('#info-card');

function highlightCard(){
    infoCard.classList.add('highlight');
    infoCard.textContent = "You are hovering!";


}

function removeHighlight(){
    infoCard.classList.remove('highlight');
    infoCard.textContent = "Hover over me!";
}

infoCard.addEventListener("mouseover", highlightCard);
infoCard.addEventListener("mouseout", removeHighlight);
