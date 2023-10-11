function removeDuplicates(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.includes(arr[i]) === false) {
      result.push(arr[i]);
    }
  }
  return result;
}

module.exports = removeDuplicates;
