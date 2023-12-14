//Parašykite JavaScript programą, kuri sujungia du masyvus ir pašalina visus pasikartojančius elementus.
let masyvas1 = [1, 2, 3, 4, 5];
let masyvas2 = [3, 4, 5, 6, 7];

let bendrasMasyvas = masyvas1.concat(masyvas2);
let sutvarkytasMasyvas = [...new Set(bendrasMasyvas)];

console.log(sutvarkytasMasyvas);