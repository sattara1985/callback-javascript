const saludar = nombre => {
    alert("Hola "+ nombre);
};
const despedirse = nombre => {
    alert("Adiós "+ nombre);
};

const elAdministrador =  (funcionQueQueremosUsar, numero) => {
    console.log(funcionQueQueremosUsar, numero);
    const nombre=prompt("Ingresa un nombre");
    //callback ("un nombre "+numero);
    funcionQueQueremosUsar(`${nombre} - ${numero}`);
};

//elAdministrador(despedirse, 5, "Helado");
elAdministrador(despedirse, 25);

//saludar("mali");


// tenemos 2 funciones que devuelven un valor las funciones se deben crear antes del callback 
function soyCien(){return 100;}
function soyDoscientos(){return 200;}
///esta funcion revibe como parametro 2 funciones u las ejecuta
function sumaDosFunciones(funcionUna, funcionDos){
    const suma = funcionUna()+funcionDos();
    return suma; //retornando un nuevo valor, en este casu su suma
}

// invocamos a sumadosfunciones y le pasamos 2 funciones como parametros
alert (sumaDosFunciones(soyCien, soyDoscientos));
console.log (sumaDosFunciones(soyCien, soyDoscientos));
//resultado 300




// /*  Crear una función que reciba como 
//     argumentos, dos números y un callback. 
//     Según el callback
//     que se pase a la función, 
//     se devuelve 
//     la suma de los dos números, 
//     la resta de los dos números, 
//     la multiplicación de los dos números 
//     la división. */

// const miFuncionMágica = (a, b, callback) => {
//     // lineas de código donde se procesa a y b
//     console.log("EL primer argumento: ", a); // 1
//     console.log("EL primer argumento: ", b); // 2
//     setTimeout(/*3*/function (){
//         a = 3;//5
//         b = 5;//6
//         callback(a, b); //7
//     },4000);
//     return a; //4
// };

// const suma = (a, b) => console.log(a + b);
// const resta = (a, b) => console.log(a - b);
// const multiplicar = (a, b) => console.log(a * b);
// const dividir = (a, b) => console.log(a / b);

// console.log(miFuncionMágica("x","y", multiplicar));