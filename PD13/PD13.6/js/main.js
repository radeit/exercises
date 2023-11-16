const dvizenklisSkaicius = 57;

const desimtys = Math.floor(dvizenklisSkaicius / 10);
const vienetai = dvizenklisSkaicius % 10;

let didesnisSkaitmuo;

if (desimtys > vienetai) {
    didesnisSkaitmuo = "dešimtys";
} else if (desimtys < vienetai) {
    didesnisSkaitmuo = "vienetai";
} else {
    didesnisSkaitmuo = "skaitmenys yra lygūs";
}

console.log(`Didesnis skaitmuo: ${didesnisSkaitmuo}`);