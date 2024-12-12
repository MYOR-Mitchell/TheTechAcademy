// Creates an object to keep track of values.
const Calculator = {
    // This will display 0 on the calculator screen.
    Display_Value: '0',
    // This will hold the first operand for any expressions, initially set to null.
    First_Operand: null,
    // This checks whether or not the second operand has been input by the user.
    Wait_Second_Operand: false,
    // This will hold the operator, initially set to null.
    operator: null,
  };
  
  // This modifies values each time a button is clicked.
  function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
  
    // If `Wait_Second_Operand` is true, set `Display_Value` to the clicked digit.
    if (Wait_Second_Operand === true) {
      Calculator.Display_Value = digit;
      Calculator.Wait_Second_Operand = false;
    } else {
      // Overwrite `Display_Value` if the current value is '0'.
      Calculator.Display_Value =
        Display_Value === '0' ? digit : Display_Value + digit;
    }
  }
  
  // This section handles decimal points.
  function Input_Decimal(dot) {
    // Prevent adding multiple decimals if waiting for a second operand.
    if (Calculator.Wait_Second_Operand === true) return;
  
    // Append a decimal point only if it is not already present.
    if (!Calculator.Display_Value.includes(dot)) {
      Calculator.Display_Value += dot;
    }
  }
  
  // This section handles operators.
  function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator;
    const Value_of_Input = parseFloat(Display_Value);
  
    // When an operator key is pressed, update operator if `Wait_Second_Operand` is true.
    if (operator && Calculator.Wait_Second_Operand) {
      Calculator.operator = Next_Operator;
      return;
    }
  
    // If there is no first operand, set it to the input value.
    if (First_Operand == null) {
      Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
      // Perform calculation if operator exists.
      const Value_Now = First_Operand || 0;
      let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
  
      // Format result to avoid floating-point errors.
      result = Number(result).toFixed(9);
      result = (result * 1).toString();
  
      Calculator.Display_Value = parseFloat(result);
      Calculator.First_Operand = parseFloat(result);
    }
  
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
  }
  
  // Perform basic arithmetic operations.
  const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand,
  };
  
  // Reset the calculator to its initial state.
  function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
  }
  
  // Update the calculator screen with the current value.
  function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
  }
  
  // Initialize the display.
  Update_Display();
  
  // Monitor button clicks.
  const keys = document.querySelector('.calculator-keys');
  keys.addEventListener('click', (event) => {
    const { target } = event;
  
    // Exit if the clicked element is not a button.
    if (!target.matches('button')) {
      return;
    }
  
    if (target.classList.contains('operator')) {
      Handle_Operator(target.value);
      Update_Display();
      return;
    }
  
    if (target.classList.contains('decimal')) {
      Input_Decimal(target.value);
      Update_Display();
      return;
    }
  
    if (target.classList.contains('all-clear')) {
      Calculator_Reset();
      Update_Display();
      return;
    }
  
    Input_Digit(target.value);
    Update_Display();
  });
  