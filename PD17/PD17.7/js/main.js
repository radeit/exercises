const myForm = document.getElementById('form');

myForm.addEventListener('submit', function(event) {

    const laukelis = document.getElementById('textInput');

    const ivestasTekstas = laukelis.value;
    
    const pranesimoDiv = document.getElementById('pranesimas');

    pranesimoDiv.textContent = ivestasTekstas;

    alert(ivestasTekstas);
});
