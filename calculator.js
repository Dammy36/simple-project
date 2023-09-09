let calculator = localStorage.getItem("calculator") || "";
displayCalculation();

function updateCalculation(value) {
  calculator += value;

  displayCalculation();
  localStorage.setItem("calculator", calculator);
}

function displayCalculation() {
  document.querySelector(".js-calculator").innerHTML = calculator;
}
