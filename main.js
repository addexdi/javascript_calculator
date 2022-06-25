// Javascript program for simple calculator

function calculator(number_1, number_2, operation) {
    function add() {
      return number_1 + number_2;
    }
    function subtract() {
      return number_1 - number_2;
    }
    function multiply() {
      return number_1 * number_2;
    }
    function divide() {
      return number_1 / number_2;
    }
    function remainder() {
      return number_1 % number_2;
    }
    switch (operation) {
      case '+':
        return add();
      case '-':
        return subtract();
      case '*':
        return multiply();
      case '/':
        return divide();
      case '%':
        return remainder();
      default:
        console.log("Invalid operator");
        break;
    }
  }


console.log("Please select operation -\n+ Add\n- Subtract\n* Multiply\n/ Divide\n% remainder\nQ Quit\n");


// Take input from the user

var prompt = require(('prompt'));

prompt.start();

// This is prompt to quit the calculator
prompt.get(['quit'], function(err, result) {
  const Q = result.quit;
 
  if (Q == "Q"){
    console.log("Thanks for using my calculator");
  }
  else{

    // This is prompt to get user input
prompt.get([('number_1'), 'operation', ('number_2')], function (err, result) {
  

    console.log('You first number: ', parseFloat(result.number_1));
    console.log('You select operation: ', result.operation);
    console.log('You second number: ', parseFloat(result.number_2));
    console.log(parseFloat(result.number_1), result.operation, parseFloat(result.number_2), "= ", calculator(parseFloat(result.number_1), parseFloat(result.number_2), result.operation));
    
});
}});
