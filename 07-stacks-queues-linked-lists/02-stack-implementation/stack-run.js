const Stack = require('./stack');

const st = new Stack();

st.push(1);
st.push(2);
st.push(3);

console.log(st.pop());
console.log(st.peek());

console.log(st);
