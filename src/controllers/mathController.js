const mathService = require('../services/mathService');

async function handleError(res, error) {
  console.error(error);
  res.status(400).json({ error: 'Bad Request' });
}

const mathController = {
  async addition(req, res) {
    try {
      const { num1, num2 } = req.body;
      if (isNaN(num1) || isNaN(num2)) {
        throw new Error('Invalid input. Both num1 and num2 must be valid numbers.');
      }

      const result = await mathService.addition(parseFloat(num1), parseFloat(num2));
      res.json({ result });
    } catch (error) {
      handleError(res, error);
    }
  },

  async fibonacci(req, res) {
    try {
      const { n } = req.params;
      if (isNaN(n) || !Number.isInteger(parseFloat(n)) || parseInt(n) < 0) {
        throw new Error('Invalid input. n must be a non-negative integer.');
      }

      const result = await mathService.fibonacci(parseInt(n));
      res.json({ result });
    } catch (error) {
      handleError(res, error);
    }
  },

  async factorial(req, res) {
    try {
      const { num } = req.params;
      if (isNaN(num) || !Number.isInteger(parseFloat(num)) || parseInt(num) < 0) {
        throw new Error('Invalid input. num must be a non-negative integer.');
      }

      const result = await mathService.factorial(parseInt(num));
      res.json({ result });
    } catch (error) {
      handleError(res, error);
    }
  },
};

module.exports = mathController;
