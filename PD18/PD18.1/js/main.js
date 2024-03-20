const studentas = {
    vardas: 'Petras',
    pavarde: 'Petraitis',
    amzius: 17,
    pilnasVardas: function() {
        return this.vardas + ' ' + this.pavarde;
    }
};

console.log(studentas.pilnasVardas());
