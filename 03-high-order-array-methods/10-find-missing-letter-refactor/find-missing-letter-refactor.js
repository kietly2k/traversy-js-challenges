function findMissingLetter(arr) {
  const arrCharCodes = arr.map((c) => c.charCodeAt(0));

  let missingNumber = "";
  arrCharCodes.reduce((char, c) => {
    // Return if the missing number has been found
    if (missingNumber !== "") return char;

    // Meaning missing 1 between 2 numbers
    if (c - char > 1) {
      missingNumber = String.fromCharCode(char + 1);
    }
    return c;
  }, arrCharCodes[0]);

  return missingNumber;
}

module.exports = findMissingLetter;
