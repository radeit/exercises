const darbuotojai = [
    { vardas: 'Jonas', pavardė: 'Jonaitis', atlyginimas: 2500 },
    { vardas: 'Petras', pavardė: 'Petraitis', atlyginimas: 3000 },
    { vardas: 'Marija', pavardė: 'Pavardiene', atlyginimas: 2000 },
    { vardas: 'Kajus', pavardė: 'Kajauskas', atlyginimas: 3500 }
];

function didelisAtlyginimas(maziauNei) {
    const darbuotojaiDideliuAtlyginimu = [];

    for (let i = 0; i < darbuotojai.length; i++) {
        if (darbuotojai[i].atlyginimas > maziauNei) {
            darbuotojaiDideliuAtlyginimu.push(darbuotojai[i]);
        }
    }

    return darbuotojaiDideliuAtlyginimu;
}

const darbuotojaiDidesniNei2500 = didelisAtlyginimas(2500);
console.log(darbuotojaiDidesniNei2500);