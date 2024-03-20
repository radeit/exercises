function arVienodi(objektas1, objektas2) {
    if (typeof objektas1 !== 'object' || typeof objektas2 !== 'object' || objektas1 === null || objektas2 === null) {
        return false; 
    }

    const savybiuSkaicius1 = Object.keys(objektas1).length;
    const savybiuSkaicius2 = Object.keys(objektas2).length;

    if (savybiuSkaicius1 !== savybiuSkaicius2) {
        return false;
    }

    for (const savybe in objektas1) {
        if (!objektas2.hasOwnProperty(savybe)) {
            return false;
        }

        if (typeof objektas1[savybe] === 'object' && typeof objektas2[savybe] === 'object') {
            if (!arVienodi(objektas1[savybe], objektas2[savybe])) {
                return false; 
            }
        } else if (objektas1[savybe] !== objektas2[savybe]) {
            return false; 
        }
    }

    return true;
}

const objektas1 = { vardas: 'Jonas', amzius: 30 };
const objektas2 = { vardas: 'Jonas', amzius: 30 };
const objektas3 = { vardas: 'Jonas', amzius: 25 };

console.log(arVienodi(objektas1, objektas2)); 
console.log(arVienodi(objektas1, objektas3)); 
