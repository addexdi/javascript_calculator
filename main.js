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
    }
  }

console.log(calculator(20, 5, '+'));
console.log(calculator(20, 5, '-'));
console.log(calculator(20, 5, '*'));
console.log(calculator(20, 5, '/'));
console.log(calculator(20, 5, '%'));

/*
// User input program code is still in working progress, it will be availaible when finished.

console.log("Please select operation -\n+ Add\n- Subtract\n* Multiply\n/ Divide\n% remainder\n");


// Take input from the user
var prompt = require(('prompt'));

prompt.start();

prompt.get([('number_1'), 'operation', ('number_2')], function (err, result) {
  
    console.log('You first number: ', (result.number_1));
    console.log('You select operation: ', result.operation);
    console.log('You second number: ', (result.number_2));
    console.log((result.number_1), result.operation, (result.number_2), "= ", calculator((result.number_1), (result.number_2), result.operation));
});
*/
