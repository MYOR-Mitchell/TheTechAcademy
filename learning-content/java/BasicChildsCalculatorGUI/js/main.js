let activeInputField = 'num1';

// Function to set the active operator
function setOperator(operator) {
    const operatorDisplay = document.getElementById('operator');
    if (operatorDisplay.textContent === operator) {
        operatorDisplay.textContent = '_';
    } else {
        operatorDisplay.textContent = operator;
    }
    triggerCalculation();
}

// Function to select a number and add it to the active field
function selectNumber(number) {
    if (activeInputField) {
        const currentInput = document.getElementById(activeInputField);
        if (currentInput.value.length < 2) {
            currentInput.value += number;
        }
        if (currentInput.value.length === 2 && activeInputField === 'num1') {
            // Move focus to num2 when num1 is full
            activeInputField = 'num2';
            document.getElementById('num2').focus();
        }
        triggerCalculation();
    }
}

// Function to validate the input fields to ensure they hold up to 2 digits
function validateInput(inputField) {
    inputField.value = inputField.value.replace(/[^0-9]/g, '').slice(0, 2);
    triggerCalculation();
}

// Function to reset all fields
function resetFields() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('operator').textContent = '_';
    activeInputField = 'num1';
    document.querySelector('.sum').textContent = '0';
    document.getElementById('num1').focus();
}

// Function to clear a specific field
function clearField(field) {
    document.getElementById(field).value = '';
    activeInputField = field;
    triggerCalculation();
}

// Set the active field when clicked
function setActiveField(field) {
    document.getElementById('num1').classList.remove('active-field');
    document.getElementById('num2').classList.remove('active-field');
    document.getElementById(field).classList.add('active-field');
    activeInputField = field;
    document.getElementById(field).focus();
}

// Function to trigger calculation when all inputs are filled
function triggerCalculation() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const operator = document.getElementById('operator').textContent;

    if (num1.length >= 1 && num2.length >= 1 && ['+', '-', '*', '/'].includes(operator)) {
        calculateResult(num1, num2, operator);
    } else {
        document.querySelector('.sum').textContent = '0';
    }
}

// Function to perform the calculation
function calculateResult(num1, num2, operator) {
    let result = 0;
    const number1 = parseInt(num1, 10);
    const number2 = parseInt(num2, 10);

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number2 !== 0 ? number1 / number2 : 'Error';
            break;
        default:
            result = 'Error';
    }

    // Format the result to 4 significant digits if possible
    if (typeof result === 'number' && result !== 'Error') {
        result = parseFloat(result.toPrecision(4));
    }

    document.querySelector('.sum').textContent = result.toString().slice(0, 4);
}

// Handle keyboard input
document.addEventListener('keydown', function(event) {
    if (!isNaN(event.key)) {
        // If the key pressed is a number, select it
        selectNumber(event.key);
    } else if (['+', '-', '*', '/'].includes(event.key)) {
        // If the key pressed is an operator, set it
        setOperator(event.key);
    } else if (event.key === 'Backspace') {
        // If Backspace is pressed, clear the active field
        const currentInput = document.getElementById(activeInputField);
        currentInput.value = currentInput.value.slice(0, -1);
        triggerCalculation();
    }
});

// Initial setup: set num1 as active field
window.onload = function() {
    activeInputField = 'num1';
    document.getElementById('num1').focus();
};