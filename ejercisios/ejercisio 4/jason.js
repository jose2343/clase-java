
const ventas = [
    { dia: "Lunes", vendedor: "Ana", unidades: 8, totalVendido: 320000 },
    { dia: "Martes", vendedor: "Luis", unidades: 12, totalVendido: 480000 },
    { dia: "Miércoles", vendedor: "Pedro", unidades: 5, totalVendido: 200000 },
    { dia: "Jueves", vendedor: "María", unidades: 15, totalVendido: 750000 },
    { dia: "Viernes", vendedor: "Andrés", unidades: 9, totalVendido: 360000 }
];
function calcularTotalSemana(ventas) {
    return ventas.reduce((acum, venta) => acum + venta.totalVendido, 0);
}
function mejorDia(ventas) {
    return ventas.reduce((max, venta) => 
        venta.totalVendido > max.totalVendido ? venta : max
    );
}
function diasDestacados(ventas) {
    return ventas.filter(venta => venta.unidades > 10);
}
function imprimirReporte(ventas) {
    console.log(" REPORTE DE VENTAS ");
    for (const venta of ventas) {
        console.log(`${venta.dia} - Vendedor: ${venta.vendedor}, Unidades: ${venta.unidades}, Total: $${venta.totalVendido.toLocaleString('es-CO')}`);
    }
    const totalSemana = calcularTotalSemana(ventas);
    const diaMayor = mejorDia(ventas);
    const destacados = diasDestacados(ventas);

    console.log("\n Total de la semana:", `$${totalSemana.toLocaleString('es-CO')}`);
    console.log("Día con mayor venta:", diaMayor.dia, `($${diaMayor.totalVendido.toLocaleString('es-CO')})`);
    console.log("Días con más de 10 unidades vendidas:");
    destacados.forEach(d => console.log(`- ${d.dia} (${d.unidades} unidades)`));
}
imprimirReporte(ventas);
