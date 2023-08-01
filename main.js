let billAmount = document.querySelector("#bill");
let tipExamples = document.querySelectorAll(".tip-example");
let tipCustom = document.querySelector("#custom");
let peopleAmount = document.querySelector("#people-amount");
let amountPerPerson = document.querySelector("#amount-persona");
let totalTip = document.querySelector("#total-tip");
let resetButton = document.getElementById("#reset");
console.log(resetButton);

let selectedTipPercentage = 0;

let customTipValue = null;

function calculateTip() {
  // Get the bill amount and number of people
  const bill = parseFloat(billAmount.value);
  const numOfPeople = parseFloat(peopleAmount.value);
  console.log(numOfPeople);
  // Calculate tip amout based on the selected percentage or custom value
  const tipAmount =
    customTipValue !== null
      ? customTipValue
      : (bill * selectedTipPercentage) / 100;

  // Calculate total per person (including tip)
  const totalPerPerson = (bill + tipAmount) / numOfPeople;

  amountPerPerson.textContent = `$${totalPerPerson.toFixed(2)}`;
  totalTip.textContent = `$${tipAmount.toFixed(2)}`;
}

// Add event listeners to tip percentage buttons
tipExamples.forEach((button) => {
  button.addEventListener("click", () => {
    selectedTipPercentage = parseFloat(button.textContent);
    // Remove the "selected" class from all buttons
    tipExamples.forEach((btn) => btn.classList.remove("selected"));
    // Add the "selected" class to the clicked button
    button.classList.add("selected");
    // Calculate tip amount and total per person
    calculateTip();
  });
});

// Add event listener to reset button
resetButton.addEventListener("click", () => {
  // Reset input values and displayed values
  billAmount.value = "";
  tipExamples.forEach((btn) => btn.classList.remove("selected"));
  tipCustom.value = "Custom";
  peopleAmount.value = "";
  amountPerPerson.textContent = "$0.00";
  totalTip.textContent = "$0.00";
  // Reset custom tip value
  customTipValue = null;
});
