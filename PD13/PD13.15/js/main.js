const p = 20;
const a = 50;
const t = 200; 

let tn = t; 


do {
    tn = tn * (1 - p / 100);
} while (tn > a);

console.log('Išmanusis telefonas su nuolaida kainuos:', tn.toFixed(2), 'eurų.');

if (tn <= a) {
    console.log('Austėjos sutaupytų pinigų užtenka įsigyti telefonui.');
} else {
    console.log('Austėjos sutaupytų pinigų neužtenka įsigyti telefono.');
}

