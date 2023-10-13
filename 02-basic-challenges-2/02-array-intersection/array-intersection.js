function arrayIntersection(arr1, arr2) {
    let arrResult = [];
    for (let i = 0; i < arr1.length; i++) {
        let index = arr2.indexOf(arr1[i]);
        if (index > -1) {
            arrResult.push(arr1[i]);
        }
    }
    return arrResult;
}

module.exports = arrayIntersection;
