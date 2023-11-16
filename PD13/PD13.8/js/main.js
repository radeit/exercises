const a = 2;
const b = 5;
const c = 8;

for (let i = 0; i < 1; i++) {
    if ((a < b && b < c) || (b > a && a > c)) {
        console.log('Tenkinama nelygybė a < b < c arba b > a > c.');
    } else {
        console.log('Netenkinama nelygybė a < b < c arba b > a > c.');
    }
}
