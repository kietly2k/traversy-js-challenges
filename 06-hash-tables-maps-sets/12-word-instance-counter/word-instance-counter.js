const HashTable = require("./HashTable");

function wordInstanceCounter(str, word) {
  const words = str.toLowerCase().split(" ");
  const tblHash = new HashTable();

  for (const w of words) {
    // Check if word exist in HashTable if exist then increase value, otherwise create new with 1
    if (tblHash.has(w)) {
      const num = tblHash.get(w) + 1;
      tblHash.set(w, num);
    } 
    else {
      tblHash.set(w, 1);
    }
  }

  return tblHash.get(word);
}

module.exports = wordInstanceCounter;
