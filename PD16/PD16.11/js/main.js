function ilgiausiasZodisBeSkyrybos(eilute) {
  let zodziai = eilute.split(/\s+/);
  let ilgiausias = '';

  for (let i = 0; i < zodziai.length; i++) {
    let zodis = zodziai[i];
    if (zodis.length > ilgiausias.length) {
      ilgiausias = zodis;
    }
  }

  return ilgiausias;
}

let pradinisTekstas = "Consider the needs of others before your own.";
let ilgiausias = ilgiausiasZodisBeSkyrybos(pradinisTekstas);
console.log("Ilgiausias zodis: ", ilgiausias);
