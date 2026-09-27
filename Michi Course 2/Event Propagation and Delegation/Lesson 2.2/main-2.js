// ===== YOUR TASK =====
// Selecting a photo card and toggling its details, using event bubbling.
// Full details are in the problem description.
//
// TODO: select #card and #detailsBtn; clicking the card adds 'selected';
//       clicking the Details button toggles 'show-details' and stops the
//       click from also selecting the card (unless the Shift key is held).

const card = document.querySelector("#card");
const detailsBtn = document.querySelector("#detailsBtn");

card.addEventListener("click", function () {
    card.classList.add("selected");
   
});

 detailsBtn.addEventListener("click", (event) => {
    card.classList.remove("selected");
        card.classList.toggle("show-details");
        if (!event.shiftKey) {
            event.stopPropagation();
        }
    });