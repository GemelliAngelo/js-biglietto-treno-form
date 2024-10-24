const nameinput = document.getElementById("name");
const surnameinput = document.getElementById("surname");
const distanceinput = document.getElementById("distance");
const ageinput = document.getElementById("age");

const generateButton = document.getElementById("generate-button");
const undoButton = document.getElementById("undo-button");
const fullName = document.getElementById("fullname");
const pricePerKm = 0.21;

generateButton.addEventListener("click", () => {
  if (nameinput.value.length < 3) {
    nameinput.classList.add("is-invalid");
    return;
  }

  if (surnameinput.value.length < 3) {
    surnameinput.classList.add("is-invalid");
    return;
  }

  if (
    parseInt(distanceinput.value) < 1 ||
    isNaN(parseInt(distanceinput.value))
  ) {
    distanceinput.classList.add("is-invalid");
    return;
  }

  if (parseInt(ageinput.value) < 1 || isNaN(parseInt(ageinput.value))) {
    ageinput.classList.add("is-invalid");
    return;
  }

  let ticketPrice = parseInt(distanceinput.value) * pricePerKm;

  if (age < 18) {
    ticketPrice = ticketPrice - ticketPrice * 0.2;
  } else if (age >= 65) {
    ticketPrice = ticketPrice - ticketPrice * 0.4;
  }
  document.getElementById(
    "price-display"
  ).innerHTML += `€ ${ticketPrice.toFixed(2)}`;
  document.getElementById("train-info").innerHTML +=
    Math.floor(Math.random() * 15) + 1;
  document.getElementById("ticket-cp").innerHTML +=
    Math.floor(Math.random() * 900001) + 100000;
  fullName.innerHTML = nameinput.value + " " + surnameinput.value;
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
