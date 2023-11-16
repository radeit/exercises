const a = 10;
const b = 15;
const c = 8;

let didziausiSuma = 0;

for (let i = 0; i < 2; i++) {
    let didziausias = Math.max(a, b, c); 
    didziausiSuma += didziausias; 

    if (didziausias === a) {
        a = -Infinity;
    } else if (didziausias === b) {
        b = -Infinity;
    } else if (didziausias === c) {
        c = -Infinity;
    }
}

console.log('Dviejų didžiausių skaičių suma:', didziausiSuma);

