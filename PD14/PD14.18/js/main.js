const a = 96;
const z = 103; 

let k = 0; 

for (let numeris = a; numeris <= z; numeris++) {
    const numerioTekstas = numeris.toString();
    k += numerioTekstas.length;
}

console.log(`k = ${k}`);
