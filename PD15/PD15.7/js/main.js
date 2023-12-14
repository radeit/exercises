let ivestis = "HeLlo WoRld!";
let pakeistaEilute = [];

for (let i = 0; i < ivestis.length; i++) {
  let simbolis = ivestis[i];

  if (simbolis === simbolis.toLowerCase()) {
    pakeistaEilute.push(simbolis.toUpperCase());
  } else {
    pakeistaEilute.push(simbolis.toLowerCase());
  }
}

let rezultatas = pakeistaEilute.join('');
console.log(rezultatas);
