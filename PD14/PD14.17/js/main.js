let skaicius = 1;
let rasti = 0;

while (rasti < 10) {
    const kvadratas = skaicius * skaicius;
    const skaiciusTekstas = kvadratas.toString();
    if (yraPalindromas(skaiciusTekstas)) {
        console.log(skaicius, kvadratas);
        rasti++;
    }
    skaicius++;
}

function yraPalindromas(tekstas) {
    const atvirksciai = tekstas.split('').reverse().join('');
    return tekstas === atvirksciai;
}