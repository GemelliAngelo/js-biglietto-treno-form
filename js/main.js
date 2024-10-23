const nameinput = document.getElementById("name");
const surnameinput = document.getElementById("surname");
const distanceinput = document.getElementById("distance");
const distance = parseInt(distanceinput.value);
const ageinput = document.getElementById("age");
const age = parseInt(ageinput.value);

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

  if (distance < 1 || isNaN(distance)) {
    distanceinput.classList.add("is-invalid");
    return;
  }

  if (isNaN(age)) {
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
  document.getElementById("train-info").innerHTML += Math.floor(
    Math.random() * 15 + 1
  );
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
