const n = 3; 
const pacientuLaikas = [18, 10, 10];

let bendrasLaikas = 0;
let ilgiVizitai = 0;

for (let i = 0; i < n; i++) {
    const vizitoLaikas = pacientuLaikas[i];
    bendrasLaikas += vizitoLaikas;
    if (vizitoLaikas > 20) {
        ilgiVizitai++;
    }
}

const vidutinisLaikas = bendrasLaikas / n;

console.log(`m = ${vidutinisLaikas.toFixed(1)}, k = ${ilgiVizitai}`);