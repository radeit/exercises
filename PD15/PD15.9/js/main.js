let skaiciai = [2, 4, 6, 8, 10];
let suma = 0;
let sandauga = 1;

for (let i = 0; i < skaiciai.length; i++) {
  suma += skaiciai[i];
  sandauga *= skaiciai[i];
}

console.log("Suma:", suma);
console.log("Sandauga:", sandauga);
