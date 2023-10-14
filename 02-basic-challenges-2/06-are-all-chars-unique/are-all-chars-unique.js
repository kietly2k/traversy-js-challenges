function areAllCharactersUnique(str) {
  let arrUniqueChars = [];
  for (let i = 0; i < str.length; i++) {
    if (arrUniqueChars.includes(str[i])) {
      return false;
    }
    arrUniqueChars.push(str[i]);
  }
  return true;
}

module.exports = areAllCharactersUnique;
