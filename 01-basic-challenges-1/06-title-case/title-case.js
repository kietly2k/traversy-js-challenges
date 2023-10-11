function titleCase(str) {
    let lowerCaseText = str.toLowerCase();
    let arrStr = lowerCaseText.split(" ");
    let result = "";

    arrStr.forEach((text) => {
        text = text.replace(text[0], text[0].toUpperCase());
        result += text + " ";
    });

    return result.trimEnd();
}

module.exports = titleCase;
