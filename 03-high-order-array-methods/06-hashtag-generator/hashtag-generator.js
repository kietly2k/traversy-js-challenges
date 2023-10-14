function generateHashtag(str) {
  if (str === undefined || str === "" || str.length > 140) {
    return false;
  }
  const arr = str.split(" ");
  const arrFormated = arr.map((text) => {
    if (text === "") {
      return "";
    }
    // Still work becase when replace same character. This will replace the first one as expected even have duplicate
    text = text.replace(text[0], text[0].toUpperCase());
    return text;
  });

  return "#" + arrFormated.join("");
}

module.exports = generateHashtag;
