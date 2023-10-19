function phoneNumberDirectory(phoneNumbers) {
    const directory = new Map();

    for (const num of phoneNumbers) {
        const arrNum = num.split(":");
        directory.set(arrNum[0], arrNum[1]);
    }

    return directory;
}

module.exports = phoneNumberDirectory;
