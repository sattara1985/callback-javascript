const saludar = nombre => {
    console.log("Hola "+ nombre);
};
const despedirse = nombre => {
    console.log("Adiós "+ nombre);
};
function nombreFunction(){
    console.log("Soy una función");
}

const elAdministrador =  (callback, numero, nombre) => {
    console.log(callback, numero);
    callback(`${nombre} - ${numero}`);
};

elAdministrador(despedirse, 5, "Helado");

saludar("mali");



/*  Crear una función que reciba como 
    argumentos, dos números y un callback. 
    Según el callback
    que se pase a la función, 
    se devuelve 
    la suma de los dos números, 
    la resta de los dos números, 
    la multiplicación de los dos números 
    la división. */

const miFuncionMágica = (a, b, callback) => {
    // lineas de código donde se procesa a y b
    console.log("EL primer argumento: ", a); // 1
    console.log("EL primer argumento: ", b); // 2
    setTimeout(/*3*/function (){
        a = 3;//5
        b = 5;//6
        callback(a, b); //7
    },4000);
    return a; //4
};

const suma = (a, b) => console.log(a + b);
const resta = (a, b) => console.log(a - b);
const multiplicar = (a, b) => console.log(a * b);
const dividir = (a, b) => console.log(a / b);

console.log(miFuncionMágica("x","y", multiplicar));