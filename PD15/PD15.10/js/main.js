let masyvas = [1, 2, 3, 2, 4, 5, 6, 5, 7, 8, 9, 1];

for (let i = 0; i < masyvas.length; i++) {
  for (let j = i + 1; j < masyvas.length; j++) {
    if (masyvas[i] === masyvas[j]) {
      masyvas.splice(j, 1);
      j--;
    }
  }
}

console.log(masyvas);
