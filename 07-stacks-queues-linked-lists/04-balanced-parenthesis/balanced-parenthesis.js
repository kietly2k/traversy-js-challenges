const Stack = require("./stack");

function balancedParenthesis(str) {
  const chars = str.split('');
  const balancedParenthesis = new Stack();

  for (const char of chars) {
    // Push when meet '('
    if (char === "(") {
      balancedParenthesis.push(char);
    }
    // Pop when meet '(' mean 1 balanced Parenthesis
    else if (char === ")") {
      // If meet ')' before any '(' mean un balanced
      if (balancedParenthesis.isEmpty()) {
        return false;
      }
      balancedParenthesis.pop();
    }
  }
 
  return balancedParenthesis.isEmpty();
}

module.exports = balancedParenthesis;
