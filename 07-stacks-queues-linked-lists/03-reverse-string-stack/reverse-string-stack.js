const Stack = require("./stack");

function reverseStringStack(str) {
  const chars = str.split("");
  const stack = new Stack();

  for (const c of chars) {
    stack.push(c);
  }

  let result = '';

  while(stack.isEmpty() == false){
    result += stack.pop();
  }

  return result;
}

module.exports = reverseStringStack;
