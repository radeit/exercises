let i = 0;
while (i <= 10) {
    let j = 0;
    let eilute = '';
    while (j <= 10) {
        eilute += `${i * j}\t`;
        j++;
    }
    console.log(eilute);
    i++;
}
