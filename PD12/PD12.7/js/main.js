let begikuSkaicius = 4
let begikas1 = 22 // sec
let begikas2 = 20// sec
let begikas3 = 25// sec
let begikas4 = 25// sec
let vidurkis = (begikas1+begikas2+begikas3+begikas4)/begikuSkaicius

console.log('Greičiausio bėgiko laikas: ' +Math.min(begikas1, begikas2, begikas3, begikas4) + 'sek.. Jis buvo: ' + (vidurkis-Math.min(begikas1, begikas2, begikas3, begikas4)) + ' sek geresnis už vidurkį.');