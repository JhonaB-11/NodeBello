
// module.exports = {
//     //Esto es un modulo que va a exportar funciones
//     sumar : function(a, b){
//         return a + b;
//     },
//     restar : function(a, b){
//         return a - b;
//     },
//     multiplicar : function(a, b){
//         return a * b;
//     },
//     dividir : function(a, b){
//         return a / b;
//     }
// }

//Otra forma
const sumar = (a, b) => a + b;

const restar = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => a / b;

module.exports ={
    sumar,
    restar,
    multiplicar,
    dividir
    
}