const m = 10; 

let didziausiasPlotas = 0;

for (let plotis = 1; plotis <= m; plotis++) {
    const ilgis = m - plotis; 
    const plotas = plotis * ilgis; 

    if (plotas > didziausiasPlotas) {
        didziausiasPlotas = plotas; 
    }
}

console.log('Didžiausias pažymėtas plotas:', didziausiasPlotas);

