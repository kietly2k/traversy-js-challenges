function wordFrequencyCounter(str) {
    const map = new Map([]);
    const arr = str
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .split(" ");

    arr.forEach((text) => {
        if (text !== "") {
            // Check if map already have the value then increase the time
            if (map.has(text)) {
                const value = map.get(text);
                map.set(text, value + 1);
            }
            // Ortherwise insert new key value item to map
            else {
                map.set(text, 1);
            }
        }
    });

    return map;
}

module.exports = wordFrequencyCounter;
