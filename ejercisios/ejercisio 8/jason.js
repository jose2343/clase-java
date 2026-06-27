
let producto = prompt("Ingrese el nombre del producto:");
let precioOriginal = parseFloat(prompt("Ingrese el precio original del producto:"));
let porcentaje = parseFloat(prompt("Ingrese el porcentaje de descuento (1 - 70):"));
if (porcentaje < 1 || porcentaje > 70) {
    alert("Porcentaje no válido, debe estar entre 1% y 70%");
} else {
    let descuentoPesos = (precioOriginal * porcentaje) / 100;
    let precioFinal = precioOriginal - descuentoPesos;
    let mensaje = porcentaje > 50 ? "¡Oferta especial!" : "Precio de temporada";
    document.write(`
        <h3>Producto: ${producto}</h3>
        <p>Precio original: $${precioOriginal.toLocaleString("es-CO")}</p>
        <p>Descuento aplicado: $${descuentoPesos.toLocaleString("es-CO")} (${porcentaje}%)</p>
        <p>Precio final: $${precioFinal.toLocaleString("es-CO")}</p>
        <p>${mensaje}</p>
    `);
}
