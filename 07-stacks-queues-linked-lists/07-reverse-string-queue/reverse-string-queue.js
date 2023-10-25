const Queue = require('./queue');

const reverseStringWithQueue = (str) => {
    const chars = str.split('');
    const queue = new Queue();

    for(const char of chars) {
        queue.enqueue(char);
    }

    const queueLength = queue.getLength();
    let result = "";
    for (let i = 0; i < queueLength; i++) {
        result = queue.dequeue() + result;
    }
    return result;
};

module.exports = reverseStringWithQueue;
