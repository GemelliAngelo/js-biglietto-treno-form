const nameinput = document.getElementById("name");
const surnameinput = document.getElementById("surname");
const distanceinput = document.getElementById("distance");
const ageinput = document.getElementById("age");
const generateButton = document.getElementById("generate-button");
const pricePerKm = 0.21;

generateButton.addEventListener("click", () => {
  const ticketPrice = parseInt(distanceinput.value) * pricePerKm;
});
