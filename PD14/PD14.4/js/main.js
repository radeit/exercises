const sausis = [-11.5, -10.3, -12, -6.5, -5, -15.5];
const vasaris = [-16, -14.5, -11, -10.3, -3.5, 0];
const kovas = [-3, -2.5, 0, 5, 9.5, 11.2];

function vidutineTemperatura(menesioTemperaturos) {
    let suma = 0;
    for (let i = 0; i < menesioTemperaturos.length; i++) {
        suma += menesioTemperaturos[i];
    }
    return suma / menesioTemperaturos.length;
}

const vidutineSausioTemperatura = vidutineTemperatura(sausis);
const vidutineVasarioTemperatura = vidutineTemperatura(vasaris);
const vidutineKovoTemperatura = vidutineTemperatura(kovas);

const bendrasVidurkis = (vidutineSausioTemperatura + vidutineVasarioTemperatura + vidutineKovoTemperatura) / 3;

console.log(`Vidutinė sausio temperatūra: ${vidutineSausioTemperatura.toFixed(2)}.`);
console.log(`Vidutinė vasario temperatūra: ${vidutineVasarioTemperatura.toFixed(2)}.`);
console.log(`Vidutinė kovo temperatūra: ${vidutineKovoTemperatura.toFixed(2)}.`);
console.log(`Bendras atliktų matavimų vidurkis: ${bendrasVidurkis.toFixed(2)}.`);
