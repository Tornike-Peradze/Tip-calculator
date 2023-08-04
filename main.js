let billAmount = document.querySelector("#bill");
let tipExamples = document.querySelectorAll(".tip-example");
let tipCustom = document.querySelector("#custom");
let peopleAmount = document.querySelector("#people-amount");
let amountPerPerson = document.querySelector("#amount-persona");
let totalTip = document.querySelector("#total-tip");
let bill_error = document.getElementById("bill_error");
let people_error = document.getElementById("people_error");
let resetButton = document.querySelector(".reset");

let selectedTipPercentage = 0;

let customTipValue = null;

function calculateTip() {
  const bill = parseFloat(billAmount.value);
  const numOfPeople = parseFloat(peopleAmount.value);
  console.log(numOfPeople);
  const tipAmount =
    customTipValue !== null
      ? customTipValue
      : (bill * selectedTipPercentage) / 100;

  const totalPerPerson = (bill + tipAmount) / numOfPeople;
  console.log(totalPerPerson);
  if (isNaN(tipAmount) || isNaN(totalPerPerson)) {
    amountPerPerson.textContent = "$0.00";
    totalTip.textContent = "$0.00";
  } else {
    amountPerPerson.textContent = `$${totalPerPerson.toFixed(2)}`;
    totalTip.textContent = `$${tipAmount.toFixed(2)}`;
  }
}

tipExamples.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event.target);
    event.target.style.backgroundColor = "red";
    selectedTipPercentage = parseFloat(button.textContent);
    tipExamples.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
    calculateTip();
  });
});

resetButton.addEventListener("click", () => {
  billAmount.value = "";
  tipExamples.forEach((btn) => btn.classList.remove("selected"));
  tipCustom.value = "Custom";
  peopleAmount.value = "";
  amountPerPerson.textContent = "$0.00";
  totalTip.textContent = "$0.00";
  customTipValue = null;
});

billAmount.addEventListener("input", (event) => {
  if (bill_value <= 0) {
    bill_error.style.display = "block";
  } else {
    bill_error.style.display = "none";
  }
  calculateTip();
});

peopleAmount.addEventListener("input", calculateTip);
tipCustom.addEventListener("input", calculateTip);
