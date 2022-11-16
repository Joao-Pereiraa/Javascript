//Calculadora

const Calculadora = {
    soma: function(a,b){
        return a + b;
    },
    subtrair: function(a,b){
        return a - b;
    },
    multiplicar: function(a,b){
        return a * b;
    },
    dividir: function(a,b){
        return a / b;
    }
}

console.log(Calculadora.soma(2,2));
console.log(Calculadora.subtrair(10,5));
console.log(Calculadora.multiplicar(100,10));
console.log(Calculadora.dividir(2,2));

