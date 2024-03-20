const zmogus = {
    vardas: 'Petras',
    pavarde: 'Petraitis',
    amzius: 25,
    profesija: 'Programuotojas'
};

function Savybes(objektas) {
    for (const savybe in objektas) {
        console.log(savybe + ':', objektas[savybe]);
    }
}

Savybes(zmogus);
