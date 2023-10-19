function flattenArray(arr) {
  
  
  // Base case is every item in array is number
  // Rememer base case always is the one that return value first
  if (arr.every((x) => typeof x === "number")) {
    return [];
  }

  let firstItem = arr[0];
  //   if (typeof firstItem === "object") {
  //     return flattenArray(arr.slice(1)).concat(firstItem);
  //   }
  return flattenArray(arr.slice(1)).concat(firstItem);
}

const result = flattenArray([1, 2, 3, [4, 5, [6, 7, 8], 9], 10]);
console.log(result);

module.exports = flattenArray;
