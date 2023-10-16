function sumUpTo(n) {
  // Base case - when n is 1, we return 1
  if (n === 1) {
    return 1;
  }

  if (n === 0) {
    return 0;
  }

  // Recursive case - when n is greater than 1, we return the sum of n and sumUpTo(n - 1)
  return n + sumUpTo(n - 1);
}

// 5 + sumUpTo(4)
// 4 + sumUpTo(3)
// 3 + sumUpTo(2)
// 2 + sumUpto(1) => Base case => Break and start from begin (unwinding)
// 2 + 1 = 3
// 3 + 3 = 6
// 4 + 6 = 10
// 10 + 5 = 15
//console.log(sumUpTo(5))

module.exports = sumUpTo;
