function arTobulasis(skaičius) {
  if (skaičius <= 1) {
    return false; 
  }

  let dalikliaiSuma = 1; 

  for (let daliklis = 2; daliklis <= Math.sqrt(skaičius); daliklis++) {
    if (skaičius % daliklis === 0) {
      dalikliaiSuma += daliklis;
      let kitiDalikliai = skaičius / daliklis;
      if (daliklis !== kitiDalikliai) {
        dalikliaiSuma += kitiDalikliai;
      }
    }
  }

  return dalikliaiSuma === skaičius;
}

let skaicius1 = 28;
let skaicius2 = 12;

console.log(skaicius1 + (arTobulasis(skaicius1) ? " yra tobulasis skaičius." : " nėra tobulasis skaičius."));
console.log(skaicius2 + (arTobulasis(skaicius2) ? " yra tobulasis skaičius." : " nėra tobulasis skaičius."));
