function gautiTipoInformacija (argumentas) {
  return typeof argumentas;
}

let skaicius = 42;
let tekstas = "Hello, World!";
let masyvas = [1, 2, 3];
let objektas = { key: 'value' };

console.log("informacija ", skaicius, "yra:", gautiTipoInformacija (skaicius));
console.log("informacija ", tekstas, "yra:", gautiTipoInformacija (tekstas));
console.log("informacija ", masyvas, "yra:", gautiTipoInformacija (masyvas));
console.log("informacija ", objektas, "yra:", gautiTipoInformacija (objektas));
