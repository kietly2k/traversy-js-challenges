function fibonacci(num) {
  if (num < 2) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

// fibonacci(7) => return fibonacci(6) + fibonacci(5)
// fibonacci(5) => fibonacci(4) + fibonacci(3)
// fibonacci(4) => fibonacci(3) + fibonacci(2)
// fibonacci(3) => fibonacci(2) + fibonacci(1) => Reach base case => fibonacci(2) return 2, fibonacci(1)  return 1

// Start unwinding
// fibonacci(3) => 2 + 1 = 3
// fibonacci(4) => 3 + 2 = 5
// fibonacci(5) => 5 + 3 = 8
// fibonacci(6) => 8 + 5 = 13
 
console.log(fibonacci(7));

module.exports = fibonacci;
