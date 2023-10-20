const n = 1997;
const m = 2018;

function arKeliamiejiMetai(metai) {
    return (metai % 4 === 0 && metai % 100 !== 0) || metai % 400 === 0;
}

for (let metai = n; metai <= m; metai++) {
    if (arKeliamiejiMetai(metai)) {
        console.log(metai);
    }
}