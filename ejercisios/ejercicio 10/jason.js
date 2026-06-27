let nombre = prompt("Ingrese el nombre del estudiante:");
let speaking = parseFloat(prompt("Ingrese la nota de Speaking (0-100):"));
let listening = parseFloat(prompt("Ingrese la nota de Listening (0-100):"));
let reading = parseFloat(prompt("Ingrese la nota de Reading (0-100):"));
let writing = parseFloat(prompt("Ingrese la nota de Writing (0-100):"));
const notas = [speaking, listening, reading, writing];
let suma = 0;
let notaBaja = 100;
for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
    if (notas[i] < notaBaja) {
        notaBaja = notas[i];
    }
}
let promedio = suma / notas.length;
let nivel;
if (promedio >= 90) {
    nivel = "C2 – Maestría";
} else if (promedio >= 75) {
    nivel = "C1 – Avanzado";
} else if (promedio >= 60) {
    nivel = "B2 – Intermedio alto";
} else if (promedio >= 45) {
    nivel = "B1 – Intermedio";
} else {
    nivel = "A2 – Básico";
}
document.write(`
    <h3>Estudiante: ${nombre}</h3>
    <p>Notas:</p>
    <ul>
        <li>Speaking: ${speaking}</li>
        <li>Listening: ${listening}</li>
        <li>Reading: ${reading}</li>
        <li>Writing: ${writing}</li>
    </ul>
    <p>Nota más baja: ${notaBaja}</p>
    <p>Promedio final: ${promedio.toFixed(2)}</p>
    <p>Nivel asignado: ${nivel}</p>
`);
