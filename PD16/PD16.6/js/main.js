function apverstiSkaiciu(skaicius) {
  var skaiciausTekstas = skaicius.toString(); 
  var apverstasTekstas = skaiciausTekstas.split('').reverse().join(''); 
  var apverstasSkaicius = parseInt(apverstasTekstas, 10); 
  return apverstasSkaicius;
}

var pradinisSkaicius = 12345;
var apverstasSkaicius = apverstiSkaiciu(pradinisSkaicius);
console.log("Apverstas skaicius:", apverstasSkaicius);
