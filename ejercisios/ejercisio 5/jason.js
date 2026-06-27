// Función principal para procesar el retiro
function procesarRetiro(nombre, saldo, monto) {
    // Validar que el monto sea mayor a cero
    if (monto <= 0) {
        return {
            nombre,
            mensaje: "el monto debe ser mayor a cero"
        };
    }

    // Validar si el saldo es suficiente
    if (saldo >= monto) {
        const nuevoSaldo = saldo - monto;
        return {
            nombre,
            saldoAnterior: saldo.toLocaleString("es-CO"),
            montoRetirado: monto.toLocaleString("es-CO"),
            nuevoSaldo: nuevoSaldo.toLocaleString("es-CO"),
            mensaje: "retiro exitoso"
        };
    } else {
        const faltante = monto - saldo;
        return {
            nombre,
            saldoDisponible: saldo.toLocaleString("es-CO"),
            montoSolicitado: monto.toLocaleString("es-CO"),
            faltante: faltante.toLocaleString("es-CO"),
            mensaje: "Saldo insuficiente"
        };
    }
}
const resultado1 = procesarRetiro("Juan", 500000, 200000);
console.log(resultado1);

const resultado2 = procesarRetiro("María", 100000, 250000);
console.log(resultado2);

const resultado3 = procesarRetiro("Pedro", 300000, 0);
console.log(resultado3);
