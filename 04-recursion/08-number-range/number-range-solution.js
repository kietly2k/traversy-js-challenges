// Define the function named rangeOfNumbers that takes two parameters: startNum and endNum
function rangeOfNumbers(startNum, endNum) {
  // Check if the startNum is equal to endNum (base case)
  if (startNum === endNum) {
    // If they are equal, return an array containing just the startNum
    return [startNum];
  } 
  
  // If they are not equal, create a variable named 'numbers'
  // Call the rangeOfNumbers function recursively on a smaller range
  // This creates an array of numbers from startNum to endNum - 1
  const numbers = rangeOfNumbers(startNum, endNum - 1);

  // Push the current value of endNum to the 'numbers' array
  numbers.push(endNum);

  // Return the 'numbers' array containing all the numbers from startNum to endNum
  return numbers;
}

// rangeOfNumbers(1, 5) => rangeOfNumbers(1, 4).push(5)
// rangeOfNumbers(1, 4) => rangeOfNumbers(1, 3).push(4)
// rangeOfNumbers(1, 3) => rangeOfNumbers(1, 2).push(3)
// rangeOfNumbers(1, 2) => rangeOfNumbers(1, 1).push(2)
// rangeOfNumbers(1, 1) => Hit Base Case return [1]

// Start unwinding
// rangeOfNumbers(1, 1) => [1]
// rangeOfNumbers(1, 2) => [1] push [2] => [1,2]
// rangeOfNumbers(1, 3) => [1, 2] push [3] => [1,2,3]
// rangeOfNumbers(1, 4) => [1, 2, 3] push [4] => [1,2,3,4]
// rangeOfNumbers(1, 5) => [1,2,3,4,5]

console.log(rangeOfNumbers(1, 5));