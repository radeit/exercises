let masyvas1 = [1, 2, 3, 4, 5];
let masyvas2 = [3, 4, 5, 6, 7];

let BendrasMasyvas = masyvas1.concat(masyvas2);
let result = BendrasMasyvas.splice(number => !masyvas1.includes(number));

console.log(result);
