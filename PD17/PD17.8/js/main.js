function pakeistiTurini() {
    const laukelis = document.getElementById('textInput');

    const naujasTurinys = laukelis.value;

    const turinioElementas = document.getElementById('turinioElementas');

    turinioElementas.textContent = naujasTurinys;
}

