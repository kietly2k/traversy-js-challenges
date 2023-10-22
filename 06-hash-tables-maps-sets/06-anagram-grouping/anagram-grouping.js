function anagramGrouping(words) {
  const anagrams = new Map();

  for (const word of words) {
    const sortedWord = word.split("").sort().join("");
    if (anagrams.has(sortedWord)) {
      let arrSortedWord = Array.from(anagrams.get(sortedWord));
      anagrams.set(sortedWord, arrSortedWord.push(word));
    } else {
      anagrams.set(sortedWord, [word]);
    }
  }

  return Array.from(anagrams);
}

module.exports = anagramGrouping;
