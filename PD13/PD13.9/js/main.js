const a = 10; 
const b = 15; 
const c = 80;
const d = 110; 

let telpa = false;

for (let i = 0; i <= 1; i++) {
    for (let j = 0; j <= 1; j++) {
        const vidinisPlotis = a - i * 2;
        const vidinisIlgis = b - j * 2;

        if (vidinisPlotis >= c && vidinisIlgis >= d) {
            telpa = true;
            break;
        }
    }
    if (telpa) {
        break;
    }
}

if (telpa) {
    console.log('Atvirukas tilps į voką su 1 mm tarpais kiekvienoje pusėje.');
} else {
    console.log('Atvirukas netilps į voką su 1 mm tarpais kiekvienoje pusėje.');
}

