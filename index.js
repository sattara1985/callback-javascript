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
    //callback ("un nombre "+numero);
    callback(`${nombre} - ${numero}`);
};

elAdministrador(despedirse, 5, "Helado");
elAdministrador(saludar, 25, "perro");

//saludar("mali");


// function miCallback (error, response, body) {
//     console.error('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     //console.log('body:', body); // Print the HTML for the Google homepage.
//   };


// const request = require('request');
// request('http://www.google.com',miCallback) 

// miCallback();

const request = require('request');
request.get('https://pokeapi.co/api/v2/pokemon/ditto',function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
    
    if(response.statusCode===200){ //revisar en el inspector en la ruta el estatus que arroja en la red
        const objJS=JSON.parse(body);// cunado llega un elemneto request se debe parsear convertir al objeto de javascriopt 
        //Object.keys(objJS) se utiliza para 
        //console.log('body:', Object.keys(objJS), objJS.abilities); // Print the HTML for the Google homepage.
        console.log('body:',objJS.abilities[0].ability.url);
        request.get(objJS.abilities[0].ability.url, saludar);
        //saludar(error, response, body)
    }
});

// /*  Crear una función que reciba como 
//     argumentos, dos números y un callback. 
//     Según el callback
//     que se pase a la función, 
//     se devuelve 
//     la suma de los dos números, 
//     la resta de los dos números, 
//     la multiplicación de los dos números 
//     la división. */

const miFuncionMágica = (a, b, callback) => {
    // lineas de código donde se procesa a y b
    console.log("EL primer argumento: ", a); // 1
    console.log("EL primer argumento: ", b); // 2
    setTimeout(/*3*/function (){
        //a = 3;//5
        //b = 5;//6
        callback(a, b); //7
    },4000);
    return a; //4
};

const suma = (a, b) => console.log("la suma es: "+(a + b));
const resta = (a, b) => console.log("la resta es: "+(a - b));
const multiplicar = (a, b) => console.log("la multiplicacion es: "+(a * b));
const dividir = (a, b) => console.log("la division es: "+(a / b));

console.log(miFuncionMágica("x","y", multiplicar));
console.log(miFuncionMágica("x","y", resta));
console.log(miFuncionMágica("x","y", suma));
console.log(miFuncionMágica(10,2, dividir));