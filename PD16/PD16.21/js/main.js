function trikampioPlotas(a, b, c) {

  let s = (a + b + c) / 2;
  
  let plotas = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  
  return plotas;
}


let A = 5;
let B = 6;
let C = 7;

let plotas = trikampioPlotas(A, B, C);
console.log("Plotas: ", plotas);
