
const estudiantes = [
    { nombre: "Juan", nota: 3.5 },
    { nombre: "María", nota: 4.0 },
    { nombre: "Pedro ", nota: 2.8 },
    { nombre: "Alex ", nota: 2.4 },
    { nombre: "Juancho", nota: 3.4 },
    { nombre: "Andrés", nota: 4.8 }
];
for (const estudiante of estudiantes) {
    console.log("Nombre:", estudiante.nombre, "- Nota:", estudiante.nota);
    if (estudiante.nota >= 3.5) {
        console.log("aprobado");
    } else {
        console.log("reeprobado");
    }
}
let max = 0;
let min = 5;
let aprobados = 0;
let suma = 0;
for (const estudiante of estudiantes) {
    if (estudiante.nota > max) max = estudiante.nota;
    if (estudiante.nota < min) min = estudiante.nota;
    if (estudiante.nota >= 3.5) {
        aprobados++;
    }
    suma += estudiante.nota;
}
const promedio = suma / estudiantes.length;
console.log("Nota máxima:", max);
console.log("Nota mínima:", min);
console.log("Cantidad de aprobados:", aprobados);
console.log("Promedio del grupo:", promedio.toFixed(2));
