//ciclos for , while, do-while//
//for cuando se sabe cuantas veces se va a repetir el ciclo//
for (let i=0 ; i<5; i++)
    { console.log(`interacion de numeros:', ${i}`);}


//while cuando no se sabe cuantas veces se va a repetir el ciclo//
let intentos = 0;
const MAX_INTENTOS = 3;
while (intentos < MAX_INTENTOS) {
    console.log('Intento número:', intentos + 1, 'de', MAX_INTENTOS);
    intentos++;
}
//break y continur//
for (let i = 0; i < 10; i++) {
    if (i===4) continue; // Salta la iteración cuando i es igual a 5
    if (i===8) break; // Sale del bucle cuando i es igual a 8
    console.log(i);
}
//funciones
//funciones clasicas
function saludar(nombre) {
    return 'hola  tu nombre es ' + nombre;
}
 console.log(saludar('andres'));

 //funciones anonimas//
 let calcularArea = function(base, altura) {
    return base * altura;
}
console.log(calcularArea(5, 10));
//funciones arrow
let sumar = (valor1, valor2) => valor1 + valor2;
console.log(sumar(5, 10));
//parametros
function crearProducto(nombre, precio, stock =5) {
    return {
        nombre: silla,
        precio: 50.000,
        stock: 5,
    }
    console.log(crearProducto('silla', 50.000))}
    //alcance de una variable//
    const appNombre ="mi aplicacion"; //variable global//
    function pagoAlquiler() {
        let total = 5000; //variable local//
        console.log(`el total a pagar es ${total}`);
    }
    //callback  una funcion que se pasa como argumento a otra funcion//
    function procesaroperacion(a , b , operacion ) {
        let resultado = operacion(a, b);
        return 'resultado:' + resultado;
    }
    let multiplicar = (a, b) => a * b;
    let restar = (a, b) => a - b;
    console.log(procesaroperacion(5, 10, multiplicar));
    console.log(procesaroperacion(5, 10, restar));
    