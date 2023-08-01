let billAmount = document.querySelectorAll("#bill");
let tipExamples = document.querySelectorAll(".tip-example");
let tipCustom = document.querySelectorAll("#custom");
let peopleAmount = document.querySelectorAll("#people-amount");
let amountPerPerson = document.querySelectorAll("#amount-persona");
let totalTip = document.querySelectorAll("#total-tip");
let resetButton = document.querySelectorAll(".reset");

const numberPattern = /^\d+(\.\d+)?$/;

tipCustom.addEventListener("input", () => {
  const inputValue = tipCustom.value;
  if (numberPattern.test(inputValue)) {
    console.log("Valid custom tip:", inputValue);
  } else {
    console.log("Invalid custom tip:", inputValue);
  }
});

tipExamples.forEach((button) => {
  button.addEventListener("click", () => {
    tipExamples.forEach((btn) => btn.classList.remove("active"));
    // This line removes the "active" class from all buttons before adding it to the clicked button.
    button.classList.add("active");

    if (button.id === "custom") {
    } else {
      const selectedTipPercentage = parseInt(button.textContent);
    }
  });
});
