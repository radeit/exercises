let tunelis = 264 // metrai
let greitis = 60*1000/3600 // km/h


console.log('Automobilis tunelį pravažiuos per ' + (Math.round(tunelis/greitis * 100) / 100).toFixed(2) , 's');