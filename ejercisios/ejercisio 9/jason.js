
let nombreMascota = prompt("Ingrese el nombre de la mascota:");
let tipo = prompt("Ingrese el tipo de mascota (perro o gato):").toLowerCase();
let edadMascota = parseInt(prompt("Ingrese la edad de la mascota en años:"), 10);
let edadHumana;
if (tipo === "perro") {
    edadHumana = edadMascota <= 2 
        ? edadMascota * 10.5 
        : (2 * 10.5) + ((edadMascota - 2) * 4);
} else if (tipo === "gato") {
    edadHumana = edadMascota <= 2 
        ? edadMascota * 12 
        : (2 * 12) + ((edadMascota - 2) * 4);
} else {
    alert("Tipo de mascota no reconocido");
    edadHumana = null;
}
if (edadHumana !== null) {
    document.write(`
        <h3>Nombre de la mascota: ${nombreMascota}</h3>
        <p>Tipo: ${tipo}</p>
        <p>Edad en años de mascota: ${edadMascota}</p>
        <p>Edad equivalente en años humanos: ${edadHumana}</p>
    `);
}
