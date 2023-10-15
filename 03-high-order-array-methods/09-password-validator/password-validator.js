function validatePassword(password) {
  if (password.length < 8) {
    return false;
  }

    let isValid = false;
    const arrPassword = Array.from(password);
    // Check at least have one upper case text
    isValid = arrPassword.some(
      (p) => p === p.toUpperCase() && isNumeric(p) === false
    );

    // Check at least have one lower case text
    isValid =
      isValid === true
        ? arrPassword.some((p) => p === p.toLowerCase() && isNumeric(p) === false)
        : isValid;

    // Check at least have one digit. Use == to compare ignore type
    isValid =
      isValid === true ? arrPassword.some((p) => p == isNumeric(p)) : isValid;

  return isValid;
}

function isNumeric(str) {
  if (typeof str != "string") return false; // we only process strings!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
}

module.exports = validatePassword;
