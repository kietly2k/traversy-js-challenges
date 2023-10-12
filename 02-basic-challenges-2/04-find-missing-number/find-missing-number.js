function findMissingNumber(arr) {
  if (arr === undefined) {
    return undefined;
  }

  if (arr.length === 0) {
    return 1;
  }

  let orderedArr = sortArrays(arr);
  let missingNumber = -1;

  for (let i = 1; i < orderedArr.length; i++) {
    // Missing 1 number before current number
    if (orderedArr[i] - orderedArr[i - 1] == 2) {
        missingNumber = orderedArr[i] - 1;
    }
  }
  return missingNumber;
}

function sortArrays(arr) {
  // Finding the length of array 'arr'
  let length = arr.length;

  // Sorting using a single loop
  for (let j = 0; j < length - 1; j++) {
    // Checking the condition for two
    // simultaneous elements of the array
    if (arr[j] > arr[j + 1]) {
      // Swapping the elements.
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;

      // updating the value of j = -1
      // so after getting updated for j++
      // in the loop it becomes 0 and
      // the loop begins from the start.
      j = -1;
    }
  }

  return arr;
}

module.exports = findMissingNumber;
