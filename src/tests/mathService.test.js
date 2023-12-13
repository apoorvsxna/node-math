const mathService = require('../services/mathService');

test('adds 1 + 2 to equal 3', async () => {
  const result = await mathService.addition(1, 2);
  expect(result).toBe(3);
});

test('calculates fibonacci for n=5', async () => {
  const result = await mathService.fibonacci(5);
  expect(result).toBe(5);
});

test('calculates factorial for num=4', async () => {
  const result = await mathService.factorial(4);
  expect(result).toBe(24);
});