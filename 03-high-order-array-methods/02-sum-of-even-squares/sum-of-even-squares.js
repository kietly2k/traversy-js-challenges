function sumOfEvenSquares(numbers) {
  const arrEvenNumbers = numbers.filter((n) => n % 2 === 0);
  const arrSquares = arrEvenNumbers.map((n) => n * n);
  const sum = arrSquares.reduce((total, r) => total + r, 0);
  return sum;
}

module.exports = sumOfEvenSquares;
