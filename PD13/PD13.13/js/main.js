const p1 = 10; 
const p2 = 15; 
const p = 20; 
const s = 30; 

let kiekis1 = 0;
let kiekis2 = 0;
let suma = 0;


do {
    kiekis1++;
    kiekis2++;
    suma = kiekis1 * p1 + kiekis2 * p2;
} while (suma <= s);

console.log('Pirkėjui užteks pinigų įsigyti abi prekes.');
console.log('Iš viso prekių:', kiekis1 + kiekis2);
console.log('Iš viso kainuos:', suma, 'eurų.');

