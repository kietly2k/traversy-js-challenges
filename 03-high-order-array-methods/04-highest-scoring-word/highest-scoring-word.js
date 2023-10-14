function highestScoringWord(str) {
  const arrStr = str.split(" "); // '123', '123123'
  let highestScoreWord = "";
  let highestScore = 0;
  arrStr.forEach((text) => {
    
    let sumOfOneWord = 0;
    for (let i = 0; i < text.length; i++) {
        sumOfOneWord += text[i].charCodeAt(0) - 96;
    }

    if (highestScore < sumOfOneWord) {
      highestScore = sumOfOneWord;
      highestScoreWord = text;
    }
  });

  return highestScoreWord;
}

module.exports = highestScoringWord;
