const n = 3; // 
const s = 1000; 
const k = 200; 
const t = 500; 
const m = 400; 

let galimaPaskola = true;

for (let i = 0; i < n; i++) {
    if ((i === 0 && t < s) || (i === 1 && m < s) || (i >= 2 && s < 0)) {
        galimaPaskola = false;
        break; 
    }
}

if (galimaPaskola && k >= 0) {
    console.log('Bankas suteiks paskolą.');
} else {
    console.log('Bankas paskolos nesuteiks.');
}
