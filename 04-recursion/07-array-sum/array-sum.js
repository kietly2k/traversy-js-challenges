function arraySum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const firstItem = arr.shift();

  // Add first item of each array and keep call sum with the rest of the array
  return firstItem + arraySum(arr);
}

module.exports = arraySum;
