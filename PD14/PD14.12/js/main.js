let a = 69;

let pirminis = true;

if (a <= 1) {
    pirminis = false;
} else {
    for (let daliklis = 2; daliklis < a; daliklis++) {
        if (a % daliklis === 0) {
            pirminis = false;
            break;
        }
    }
}

if (pirminis) {
    console.log(`${a} yra pirminis skaičius.`);
} else {
    console.log(`${a} nėra pirminis skaičius.`);
}
