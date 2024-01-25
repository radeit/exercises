function temperaturosKonvertavimas(celsijus) {
  let farenheitas = (celsijus * 9/5) + 32;
  return farenheitas;
}

let celsijusTemperatura = 25;
let farenheituTemperatura = temperaturosKonvertavimas(celsijusTemperatura);
console.log("Dabar yra: " + farenheituTemperatura );
