let x = 5;
let y = 10;
let z = -12;

let zenklas;

if (x === 0 || y === 0 || z === 0) {
  zenklas = "Nulis (0)";
} else {
  let negatives = 0;

  if (x < 0) negatives++;
  if (y < 0) negatives++;
  if (z < 0) negatives++;

  if (negatives % 2 === 0) {
    zenklas = "+";
  } else {
    zenklas = "-";
  }
}

console.log("Sandaugos ženklas: " + zenklas);