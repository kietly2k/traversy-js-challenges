function formatPhoneNumber(numbers) {
  let num1 = "";
  let num2 = "";
  let num3 = "";

  for (let i = 0; i < 3; i++) {
    num1 += numbers[i];
  }
  phone = `(${num1})`;

  for (let i = 3; i < 6; i++) {
    num2 += numbers[i];
  }
  phone += ` ${num2}`;

  for (let i = 6; i < numbers.length; i++) {
    num3 += numbers[i];
  }

  phone += `-${num3}`;
  return phone;
}

module.exports = formatPhoneNumber;
