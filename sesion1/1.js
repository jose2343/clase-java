console.log("hola mundo");
/*variables*/
let edad = 25

const pi= 3.141598


const entero = 45


const decimal = 5.32


const negativo = -23
console.log("hola andres , tu edad es", edad ,"tu nomero es ", entero)
let estadoactuvo = true
let estadoinactivo = false
 
const estado = false
let sinvalor =  12
console.log(sinvalor)
console.log(typeof -21)
console.log(typeof "andres")
/*operadore aritmeticos */
a =20;
b = 15;
console.log(a+b)
console.log(a-b)
console.log(a/b)
console.log(a*b)
console.log(a**b)
/*operadores de comparacion  */
console.log(a==="20")
console.log(5 !=="3")
console.log(a<b)
console.log(a>b)
console.log(13<=13)


//operadores logicos//
console.log("operadores logicos");
let email = "jose@gmail.com"
let password = "123456"
console.log(false && false);
console.log(false || false);
console.log(true);
//operadores de asignacion//
let contador = 10;
contador += 5;
console.log(contador);


let temperatura = 20;
if (temperatura > 30){
    console.log("el clima es caliente");
} else if(temperatura > 15){
    console.log("el clima es templado");
}
else if (temperatura > 0){
    console.log("el clima es frio");
}
let dia = "lunes";
switch (dia) {
    case "lunes":
        console.log("hoy es lunes");
        break;
    case "martes":
        console.log("hoy es martes");
        break;
    default:
        console.log("dias laborales");
        break;
     case "miercoles":
        console.log("hoy es miercoles");
        break;
}let edad1 = 18;
let tarjetacredito;

if (edad1 >= 18) {
    tarjetacredito = "puede sacar tarjeta de credito";
} else {
    tarjetacredito = "no puede sacar tarjeta de credito";
}

console.log(tarjetacredito);

let mensaje ;
if (edad>= 18) {
mensaje = "eress mayor de eadad "
} else {
    mensaje = "eres menor de edad"
}
console.log(mensaje);
let nota = 75;
if(nota >= 75){
    console.log("aprobado")
}
else if(nota >= 60){
    console.log("regular")
} else {
    console.log("reprobado")
}q