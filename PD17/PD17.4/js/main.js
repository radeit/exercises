const mygtukas = document.getElementById('mygtukas');
mygtukas.addEventListener('click', function(pakeistiSpalva) {
    const paragrafai = document.querySelectorAll('p');

    paragrafai.forEach(function(paragrafas) {
        paragrafas.style.color = 'blue';
    });
});
