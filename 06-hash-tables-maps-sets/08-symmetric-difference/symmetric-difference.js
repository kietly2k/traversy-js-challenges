function symmetricDifference(arr1, arr2) {
  const set = new Set();

  for (let i = 0; i < arr1.length; i++) {
    set.add(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    if (set.has(arr2[i])) {
      set.delete(arr2[i]);
    } else {
      set.add(arr2[i]);
    }
  }

  return set;
}

module.exports = symmetricDifference;
