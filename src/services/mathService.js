const mathModel = require('../models/mathModel');

const mathService = {
  async addition(num1, num2) {
    const result = num1 + num2;
    await mathModel.saveResult('addition', result);
    return result;
  },

  async fibonacci(n) {
    if (n < 0) {
      throw new Error('Input must be a non-negative integer for Fibonacci calculation.');
    }

    const result = fibonacci(n);

    await mathModel.saveResult('fibonacci', result);

    return result;
  },

  async factorial(num) {
    if (num < 0) {
      throw new Error('Input must be a non-negative integer for factorial calculation.');
    }

    let result = 1;

    for (let i = 1; i <= num; i++) {
      result *= i;
    }

    await mathModel.saveResult('factorial', result);

    return result;
  },
};

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = mathService;
