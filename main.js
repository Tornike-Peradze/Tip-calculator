let billAmount = document.querySelectorAll("#bill");
let tipExamples = document.querySelectorAll(".tip-example");
let tipCustom = document.querySelectorAll("#custom");
let peopleAmount = document.querySelectorAll("#people-amount");
let amountPerPerson = document.querySelectorAll("#amount-persona");
let totalTip = document.querySelectorAll("#total-tip");
let resetButton = document.querySelectorAll(".reset");

tipExamples.forEach((button) => {
  button.addEventListener("click", () => {
    tipExamples.forEach((btn) => btn.classList.remove("selected"));
    // This line removes the "active" class from all buttons before adding it to the clicked button.
    button.classList.add("selected");
  });
});

const numberPattern = /^\d+(\.\d+)?$/;

tipCustom.addEventListener("input", () => {
  const inputValue = tipCustom.value;
  if (numberPattern.test(inputValue)) {
    customTipValue = parseFloat(inputValue);
    tipExamples.forEach((btn) => btn.classList.remove("selected"));
  } else {
    customTipValue = null;
  }
});

let selectedTipPercentage = 0;

let customTipValue = null;

function calculateTip() {
  // Get the bill amount and number of people
}
