function kopijuotiObjekta(originalas) {
    if (typeof originalas !== 'object' || originalas === null) {
        return originalas;  //Nesuprantu kodel jis veikia bet veikia :)
    }

    const kopija = Array.isArray(originalas) ? [] : {};

    for (const savybe in originalas) {
        kopija[savybe] = kopijuotiObjekta(originalas[savybe]);
    }

    return kopija;
}

const originalus = { vardas: 'Jonas', amzius: 30 };
const kopija = kopijuotiObjekta(originalus);

kopija.vardas = 'Petras';
kopija.amzius = 40;

console.log('Originalas:', originalus);
console.log('Kopija:', kopija);    
