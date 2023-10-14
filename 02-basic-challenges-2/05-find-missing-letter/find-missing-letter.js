function findMissingLetter(arr) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let index = alphabet.indexOf(arr[0].toUpperCase());
  let missingLetter = "";

  for (let i = 1; i < arr.length; i++) {
    let char = arr[i].toUpperCase();
    let charIndex = alphabet.indexOf(char);
    // Meaning miss if more than 1 then mean missing
    if (charIndex - index > 1) {
      // Get next numer which is the missing one
      missingLetter = alphabet[index + 1];
      break;
    }

    index = alphabet.indexOf(char);
  }
  // Meaning pass in upper case. Then will return uppercase text. Ortherwise return lowercase text.
  return containsUppercase(arr)
    ? missingLetter.toUpperCase()
    : missingLetter.toLowerCase();
}

function containsUppercase(str) {
  return /[A-Z]/.test(str);
}

module.exports = findMissingLetter;
