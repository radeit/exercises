//Parašykite JavaScript programą, kuri randa unikalius elementus masyve.
var masyvas = [1, 1, 2, 2, 2, 2, 4, 5, 5, 9, 9, 7];

masyvas = [... new Set(masyvas)]

console.log(masyvas);