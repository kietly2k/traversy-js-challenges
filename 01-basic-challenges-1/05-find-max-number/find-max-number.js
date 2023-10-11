function findMaxNumber(arr) {
    let max = 0;
    arr.forEach((num) => {
        if (num > max) max = num;
    });
    return max;
}

// function findMaxNumber(arr) {
//     return Math.max(...arr);
// }

module.exports = findMaxNumber;
