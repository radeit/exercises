//Parašykite JavaScript programą, kuri randa skirtumą tarp dviejų masyvų.
let masyvas1 = [1, 2 ,5 ,6 ,8]
let masyvas2 = [1, 3 ,5 ,6 ,7 ,8]


BendrasMasyvas = masyvas2.filter(number => number);
BendrasMasyvas = masyvas2.filter(number => !masyvas1.includes(number));

console.log(BendrasMasyvas);
