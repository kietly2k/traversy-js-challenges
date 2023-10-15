function reverseString(str) {
  // Base case
  if (str === "") {
    return "";
  }

  // Get first char each time it repeat
  let firstChar = str.substring(0, 1);

  // Remove the first char and call func with the rest of text
  return reverseString(str.slice(1)) + firstChar;
}

module.exports = reverseString;
