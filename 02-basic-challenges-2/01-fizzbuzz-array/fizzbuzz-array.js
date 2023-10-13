function fizzBuzzArray(num) {
    let arrFizzBuzz = [];
    for (let i = 1; i <= num; i++) {
        let fizzBuzz = "";
        if (i % 3 == 0) {
            fizzBuzz += "Fizz";
        }
        if (i % 5 == 0) {
            fizzBuzz += "Buzz";
        }

        arrFizzBuzz.push(fizzBuzz !== "" ? fizzBuzz : i);
    }
    return arrFizzBuzz;
}

module.exports = fizzBuzzArray;
