for (let skaicius = 1; skaicius <= 300; skaicius++) {
    let dalikliuSkaicius = 0;
    
    for (let daliklis = 1; daliklis <= skaicius; daliklis++) {
        if (skaicius % daliklis === 0) {
            dalikliuSkaicius++;
        }
    }
    
    if (dalikliuSkaicius === 5) {
        console.log(skaicius);
    }
}