class Stack {
  constructor() {
    this.maxSize = 100;
    this.stack = [];
    this.top = -1;
  }

  push(value) {
    this.top++;

    if (this.top > this.maxSize) {
      return false;
    }

    this.stack[this.top] = value;
    return true;
  }

  pop() {
    if (this.top === -1) {
      return null;
    }
    this.top--;
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.top];
  }
}

module.exports = Stack;
