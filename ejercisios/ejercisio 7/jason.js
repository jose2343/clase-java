
let nombre = prompt("Ingrese su nombre:");
let plan = prompt("Ingrese el número del plan que desea (1, 2 o 3):");
nombre = nombre.toLowerCase();
nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
let gigas;
let precio;
switch (plan) {
    case "1":
        gigas = 2;
        precio = 25000;
        break;
    case "2":
        gigas = 5;
        precio = 45000;
        break;
    case "3":
        gigas = 10;
        precio = 75000;
        break;
    default:
        alert("Plan no disponible");
        gigas = null;
        precio = null;
}
if (gigas !== null && precio !== null) {
    document.write(
        `<h3>Cliente: ${nombre}</h3>
         <p>Plan elegido: ${plan}</p>
         <p>Incluye: ${gigas} GB</p>
         <p>Costo mensual: $${precio.toLocaleString("es-CO")}</p>`
    );
}
