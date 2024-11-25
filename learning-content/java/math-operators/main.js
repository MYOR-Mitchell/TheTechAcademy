let currentValue = 0;
let selectedNumber = null;
let num1 = 1; // Default value for Num1
let num2 = 2; // Default value for Num2
let operator = ""; // Operator to be displayed (+, -, *, /)
let activeField = null; // Tracks the active field (Num1, Num2, Operator)

// Updates the display for the sum, numbers, and operator
function updateDisplay() {
    document.getElementById("sum").textContent = currentValue; // Update sum display
    document.getElementById("num1-display").textContent = num1; // Update Num1 display
    document.getElementById("num2-display").textContent = num2; // Update Num2 display
    document.getElementById("operation").textContent = operator; // Update operator display
}

// Handles active field selection (Num1, Num2, Operator)
function setActiveField(field) {
    activeField = field;

    // Highlight the active field
    const fields = document.querySelectorAll(".number-display, .operation-display");
    fields.forEach((fieldElement) => fieldElement.classList.remove("active"));

    document.getElementById(`${field}-display`).classList.add("active");
}

// Resets the active field highlight
function resetActiveField() {
    activeField = null;
    const fields = document.querySelectorAll(".number-display, .operation-display");
    fields.forEach((fieldElement) => fieldElement.classList.remove("active"));
}

// Assigns the selected number or operator to the active field
function assignActiveField(value) {
    if (activeField === "num1") {
        num1 = value;
    } else if (activeField === "num2") {
        num2 = value;
    } else if (activeField === "operation") {
        operator = value; // Set operator as +, -, *, /
    }
    activeField = null; // Clear active field after assigning
    updateDisplay();
}

// Selects a number from the number grid
function selectNumber(value) {
    selectedNumber = value;

    if (activeField) {
        assignActiveField(value);
    }

    // Highlight selected number
    const buttons = document.querySelectorAll(".number-grid button");
    buttons.forEach((button) => button.classList.remove("selected"));

    document.querySelector(`.number-grid button:nth-child(${value + 1})`).classList.add("selected");
}

// Perform addition
function addValue() {
    currentValue = num1 + num2; // Perform calculation
    operator = "+"; // Set operator display
    updateDisplay();
    resetAfterCalculation();
}

// Perform subtraction
function subtractValue() {
    currentValue = num1 - num2; // Perform calculation
    operator = "-"; // Set operator display
    updateDisplay();
    resetAfterCalculation();
}

// Perform multiplication
function multiplyValue() {
    currentValue = num1 * num2; // Perform calculation
    operator = "*"; // Set operator display
    updateDisplay();
    resetAfterCalculation();
}

// Perform division
function divideValue() {
    if (num2 !== 0) {
        currentValue = num1 / num2; // Perform calculation
        operator = "/"; // Set operator display
        updateDisplay();
        resetAfterCalculation();
    } else {
        alert("Cannot divide by zero!");
    }
}

function resetFields() {
    currentValue = 0;
    num1 = 0;
    num2 = 0;
    operator = "";
    updateDisplay(); // Update the UI to show reset state
    resetActiveField(); // Remove any active highlights
}

// Resets all fields after 5 seconds
function resetAfterCalculation() {
    setTimeout(() => {
        currentValue = 0;
        num1 = 0;
        num2 = 0;
        operator = "";
        updateDisplay();
        resetActiveField();
    }, 5000); // Reset after 5 seconds
}