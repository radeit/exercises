function findNaNIndexes(arr) {
    const nanIndexes = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (isNaN(arr[i])) {
        nanIndexes.push(i);
      }
    }
  
    return nanIndexes;
  }
  
  const myArray = [1, 2, NaN, NaN, 5, NaN];
  
  const nanIndexes = findNaNIndexes(myArray);
  console.log(nanIndexes);

