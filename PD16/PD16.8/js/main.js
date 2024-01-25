function generuotiRaidinesDerinius(zodis) {
  var deriniai = [];

  function generuotiDerinius(prefix, likusiZodzioDalis) {
    for (var i = 0; i < likusiZodzioDalis.length; i++) {
      var newPrefix = prefix + likusiZodzioDalis[i];
      deriniai.push(newPrefix);
      generuotiDerinius(newPrefix, likusiZodzioDalis.slice(i + 1));
    }
  }

  generuotiDerinius('', zodis);

  return deriniai;
}

var zodis = "dog";
var deriniai = generuotiRaidinesDerinius(zodis);
console.log("Deriniai", zodis, "yra:", deriniai);
