const nameinput = document.getElementById("name");
const surnameinput = document.getElementById("surname");
const distanceinput = document.getElementById("distance");
const ageinput = document.getElementById("age");
const generateButton = document.getElementById("generate-button");
const undoButton = document.getElementById("undo-button");
const fullName = document.getElementById("fullname");
const pricePerKm = 0.21;

generateButton.addEventListener("click", () => {
  let ticketPrice = parseInt(distanceinput.value) * pricePerKm;
  if (parseInt(ageinput.value) < 18) {
    ticketPrice = ticketPrice - ticketPrice * 0.2;
  } else if (parseInt(ageinput.value) >= 65) {
    ticketPrice = ticketPrice - ticketPrice * 0.4;
  }
  document.getElementById(
    "price-display"
  ).innerHTML += `€ ${ticketPrice.toFixed(2)}`;
  fullName.innerHTML = nameinput.value + " " + surnameinput.value;
});
