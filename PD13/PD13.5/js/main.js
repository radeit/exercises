let a = -6;
let b = 1;
let c = 185;

let diskriminantas = b * b - 4 * a * c;

if (diskriminantas > 0) {
  // D > 0
  let x1 = (-b + Math.sqrt(diskriminantas)) / (2 * a);
  let x2 = (-b - Math.sqrt(diskriminantas)) / (2 * a);
  x1 = x1.toFixed(2);
  x2 = x2.toFixed(2);
  console.log("Lygtis turi du skirtingus sprendinius: x1 = " + x1 + ", x2 = " + x2);
} else if (diskriminantas === 0) {
  // D = 0
  let x = -b / (2 * a);
  x = x.toFixed(2);
  console.log("Lygtis turi du sutampančius sprendinius: x = " + x);
} else {
  // D < 0
  console.log("Lygtis neturi realiųjų skaičių sprendinių aibėje.");
}

