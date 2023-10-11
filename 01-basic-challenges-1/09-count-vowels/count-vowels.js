function countVowels(str) {
  const formatedStr = str.toLowerCase();
  const arrVowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < formatedStr.length; i++) {
    if (arrVowels.includes(formatedStr[i])) count++;
  }
  return count;
}

module.exports = countVowels;
