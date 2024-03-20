const knyga = {
    pavadinimas: 'Grybu musis',
    autorius: 'John Smith',
    puslapiuSkaicius: 170
};

function knygosInfo(knyga) {
    console.log('Knygos pavadinimas:', knyga.pavadinimas);
    console.log('Autorius:', knyga.autorius);
    console.log('Puslapiu skaicius:', knyga.puslapiuSkaicius);
}

knygosInfo(knyga);

