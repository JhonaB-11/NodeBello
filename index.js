//Manejo Simple
var name = "Ana";

    //Manejo Dinamico
    name = 12;

    name = true;

    console.log(name);

//Manejo de datos compuestos
//Array

let list = ["one","two","three"];

console.log(list[1]);

//Objeto curso
let curso= {
    tema:"Node.js",
    leccion: "datos compuestos"

}
console.log(curso.tema,curso.leccion);


//Funcion Simple
function saludo(){
    return "Hola Muchachos";
}

console.log( saludo());

//Funcion anonima (metodo). Un metodo es una funcion que se encuentra dentro de una clase
//Objeto calculo, descrito de la forma SeudiClase, inyectando funciones anonimas
let calculo = {
    duplicar: function(num1){
        return num1 * 2;
    },
    dividir: function(num1){
        return num1 / 2;
    }
}

console.log(calculo.duplicar(30) , calculo.dividir(40));
