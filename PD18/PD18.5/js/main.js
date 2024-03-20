const startObject = {
    savybe1: 5,
    savybe2: 15,
    savybe3: 8,
    savybe4: 20
};
function atrinktosSavybes(objektas) {
    const newObject = {};

    for (const savybe in objektas) {
        if (objektas[savybe] > 10) {
            newObject[savybe] = objektas[savybe];
        }
    }

    return newObject;
}


const newObject = atrinktosSavybes(startObject);
console.log(newObject);