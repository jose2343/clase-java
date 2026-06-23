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