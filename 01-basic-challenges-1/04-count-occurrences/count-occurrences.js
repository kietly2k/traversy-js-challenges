// function countOccurrences(str, char) {
//   let occurrences = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) == char) occurrences++;
//   }

//   return occurrences;
// }

function countOccurrences(str, char) {
  return str.split(char).length - 1;
}

module.exports = countOccurrences;
