let x = 2;
let y = -2;
let z = 4;

let maziausias, vidurinis, didziausias;

if (x <= y && x <= z) {
  maziausias = x;
  if (y <= z) {
    vidurinis = y;
    didziausias = z;
  } else {
    vidurinis = z;
    didziausias = y;
  }
} else if (y <= x && y <= z) {
  maziausias = y;
  if (x <= z) {
    vidurinis = x;
    didziausias = z;
  } else {
    vidurinis = z;
    didziausias = x;
  }
} else {
  maziausias = z;
  if (x <= y) {
    vidurinis = x;
    didziausias = y;
  } else {
    vidurinis = y;
    didziausias = x;
  }
}

console.log("Surūšiuoti skaičiai: " + maziausias + ", " + vidurinis + ", " + didziausias);
