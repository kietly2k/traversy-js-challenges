function analyzeCarMileage(cars) {
  const totalMileage = cars.reduce((sum, c) => sum + c.mileage, 0);
  const averageMileage = totalMileage / cars.length;

  // order By Mileage meaning the highest one is last, lowest one is first
  //   const arrSorted = sortByMileage(cars);
  //   return {
  //     averageMileage: averageMileage,
  //     highestMileageCar: arrSorted[arrSorted.length - 1],
  //     lowestMileageCar: arrSorted[0],
  //     totalMileage: totalMileage,
  //   };

  const highest = cars.reduce((highest, car) => {
    if (car.mileage > highest) {
      highest = car.mileage;
    }
    return highest;
  }, cars[0].mileage);

  const lowest = cars.reduce((lowest, car) => {
    if (car.mileage < lowest) {
      lowest = car.mileage;
    }
    return lowest;
  }, cars[0].mileage);

  return {
    averageMileage: averageMileage,
    highestMileageCar: highest,
    lowestMileageCar: lowest,
    totalMileage: totalMileage,
  };
}

function sortByMileage(arr) {
  // Sorting using a single loop
  for (let j = 0; j < arr.length - 1; j++) {
    // Checking the condition for two
    // simultaneous elements of the array
    if (arr[j].mileage > arr[j + 1].mileage) {
      // Swapping the elements.
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;

      // updating the value of j = -1
      // so after getting updated for j++
      // in the loop it becomes 0 and
      // the loop begins from the start.
      j = -1;
    }
  }

  return arr;
}

module.exports = analyzeCarMileage;
