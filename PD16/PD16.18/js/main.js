function pirmasNepasikartojantisSimbolis(eilute) {
  let simboliuDaiktas = {};

  for (let i = 0; i < eilute.length; i++) {
    let simbolis = eilute[i];

    if (!simboliuDaiktas[simbolis]) {
      simboliuDaiktas[simbolis] = 1;
    } else {
      simboliuDaiktas[simbolis]++;
    }
  }

  for (let j = 0; j < eilute.length; j++) {
    if (simboliuDaiktas[eilute[j]] === 1) {
      return eilute[j];
    }
  }

  return null;
}

let eilute = "programavimas";
let nepasikartojantis = pirmasNepasikartojantisSimbolis(eilute);

if (nepasikartojantis !== null) {
  console.log("Pirmasis nepasikartojantis simbolis:", nepasikartojantis);
} else {
  console.log("Eiluteje nera nepasikartojanciu simboliu.");
}
