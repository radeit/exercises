const Skaiciuotuvas = {
    add: function(a, b) {
      return a + b;
    },
    subtract: function(a, b) {
      return a - b;
    },
    multiply: function(a, b) {
      return a * b;
    },
    divide: function(a, b) {
      if (b === 0) {
        return "Error";
      }
      return a / b;
    },
    sqrt: function(a) {
      return Math.sqrt(a);
    },
  };

  console.log(Skaiciuotuvas.add(5, 3));
  console.log(Skaiciuotuvas.subtract(10, 4)); 
  console.log(Skaiciuotuvas.multiply(2, 6));
  console.log(Skaiciuotuvas.divide(8, 2));
  console.log(Skaiciuotuvas.sqrt(25)); 
  