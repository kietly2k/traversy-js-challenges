const isValidIPv4 = (input) => {
  const arrInput = input.split(".");

  if (arrInput.length !== 4) {
    return false;
  }

  if (arrInput.some((c) => c.charAt(0) === "0")) {
    return false;
  }

  return arrInput.every((c) => 0 <= c && c <= 255) ? true : false;
};

module.exports = isValidIPv4;
