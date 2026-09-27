// ===== YOUR TASK =====
// Build the seat picker: clicking an available seat toggles its selection
// and updates the count and total price. Full details are in the problem
// description.
//
// These element references are provided for you:
const seats = document.querySelectorAll(".seat");
const selectedCount = document.querySelector("#selectedCount");
const totalPrice = document.querySelector("#totalPrice");

// TODO: write updateDisplay() to count .seat.selected and show the count
//       and total ($25/seat); write toggleSeat(seat) to toggle selection
//       (ignoring .unavailable seats) and refresh the display; add a click
//       listener to each seat; then call updateDisplay() once to start.

function updateDisplay() {
  let total = 0;
  let seatCount = document.querySelectorAll(".seat.selected").length;
  total = 25 * seatCount;
  selectedCount.textContent = seatCount;
  totalPrice.textContent = "$" + total;
}

function toggleSeat(seat) {
  if (seat.classList.contains('unavailabe')) {
    
    return;
  } else {
    seat.classList.toggle("selected");
    updateDisplay();
  }
}

for (const item of seats) {
  item.addEventListener("click", () => {
    toggleSeat(item)
  });
}
