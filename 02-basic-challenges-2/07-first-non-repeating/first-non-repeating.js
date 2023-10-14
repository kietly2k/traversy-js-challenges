function findFirstNonRepeatingCharacter(str) {
  for (let i = 1; i < str.length; i += 2) {
    if (str[i] !== str[i - 1]) {
      return str[i - 1];
    }
  }

  return null;
}

module.exports = findFirstNonRepeatingCharacter;
