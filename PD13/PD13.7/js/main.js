const a = 12;
const b = 4;

let yraDaliklis = false;

for (let daliklis = 1; daliklis <= b; daliklis++) {
    if (a % daliklis === 0) {
        yraDaliklis = true;
        break;
    }
}

if (yraDaliklis) {
    console.log(`${a} yra ${b} daliklis.`);
} else {
    console.log(`${a} nėra ${b} daliklis.`);
}
