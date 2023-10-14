function diceGameSimulation(numSimulations) {
  let arrResult = [];
  
  for (let i = 0; i < numSimulations; i++) {
    const dice1 = roll();
    const dice2 = roll();
    const sum = dice1 + dice2;
    let result = "roll again";

    if (sum === 7 || sum === 11) {
      result = "win";
    }

    if (sum === 2 || sum === 3 || sum === 12) {
      result = "lose";
    }
    
    arrResult.push({ dice1: dice1, dice2: dice2, sum: dice1 + dice2, result: result });
  }
  return arrResult;
}

function roll() {
  return Math.floor(Math.random() * 6) + 1;
}

module.exports = diceGameSimulation;
