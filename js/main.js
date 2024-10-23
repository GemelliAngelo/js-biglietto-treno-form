const nameinput = document.getElementById("name");
const surnameinput = document.getElementById("surname");
const distanceinput = parseInt(document.getElementById("distance"));
const ageinput = parseInt(document.getElementById("age"));
const generateButton = document.getElementById("generate-button");
const undoButton = document.getElementById("undo-button");
const fullName = document.getElementById("fullname");
const pricePerKm = 0.21;

generateButton.addEventListener("click", () => {
  if (nameinput.value.length < 3 || surnameinput.value.length < 3) return;

  if (distanceinput.value < 1 || ageinput.value < 1) return;

  if (isNaN(distanceinput.value) || isNaN(ageinput.value)) return;

  let ticketPrice = parseInt(distanceinput.value) * pricePerKm;
  if (parseInt(ageinput.value) < 18) {
    ticketPrice = ticketPrice - ticketPrice * 0.2;
  } else if (parseInt(ageinput.value) >= 65) {
    ticketPrice = ticketPrice - ticketPrice * 0.4;
  }
  document.getElementById(
    "price-display"
  ).innerHTML += `€ ${ticketPrice.toFixed(2)}`;
  document.getElementById("train-info").innerHTML += Math.floor(
    Math.random() * 15 + 1
  );
  fullName.innerHTML = nameinput.value + " " + surnameinput.value;

  nameinput.value = "";
  surnameinput.value = "";
  distanceinput.value = "";
  ageinput.value = "";
  generateButton.value = "";
  undoButton.value = "";
  fullName.value = "";
  pricePerKm.value = "";
});

undoButton.addEventListener("click", () => {
  nameinput.value = "";
  surnameinput.value = "";
  distanceinput.value = "";
  ageinput.value = "";
  generateButton.value = "";
  undoButton.value = "";
  fullName.value = "";
  pricePerKm.value = "";
});
