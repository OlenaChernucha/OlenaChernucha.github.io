'use strict';

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(a, b) {
    return this.#calculate(a, b, (x, y) => x + y);
  }

  subtract(a, b) {
    return this.#calculate(a, b, (x, y) => x - y);
  }

  multiply(a, b) {
    return this.#calculate(a, b, (x, y) => x * y);
  }

  divide(a, b) {
    return this.#calculate(a, b, (x, y) => x / y);
  }

  displayResult() {
    console.log(this.result);
  }

  #calculate(a, b, operation) {
    if (b === undefined) {
      b = a;
      a = this.result;
    }
    this.result = operation(a, b);
    return this.result;
  }
}


const calc = new Calculator();

calc.add(5, 3);
calc.displayResult();       

calc.multiply(4);           
calc.displayResult();       

calc.subtract(2);           
calc.displayResult();       

calc.divide(10, 4);          
calc.displayResult();       

console.log(calc.divide(5)); 