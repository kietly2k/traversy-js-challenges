function factorial(num) {
  if (num < 1) return 1;

  return num * factorial(num - 1);
}

// append to stack 5 * 4 * 3 * 2 * factorial(3)
// call 1 * 2 * 3 * 4 * 5

module.exports = factorial;
