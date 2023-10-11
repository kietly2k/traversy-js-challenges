function isPalindrome(str) {
    if (str === "") return true;
    
    str = str.replace(/[^A-z0-9]/g, "");
    let reverse = "";
    for (let i = str.length - 1; i > -1; i--) {
        reverse += str[i];
    }

    return str.toLowerCase() === reverse.toLowerCase();
}

module.exports = isPalindrome;
