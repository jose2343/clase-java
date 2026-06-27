function resultado(event) {
    if (event) event.preventDefault();
    const totalCompra = parseFloat(document.getElementById("a").value);
    const dineroCliente = parseFloat(document.getElementById("b").value);
    if (isNaN(totalCompra) || isNaN(dineroCliente)) {
        alert("Por favor ingresa valores válidos");
        return;
    }
    if (dineroCliente < totalCompra) {
        const faltante = totalCompra - dineroCliente;
        alert("Dinero insuficiente, faltan $" + faltante.toLocaleString("es-CO"));
    } else if (dineroCliente === totalCompra) {
        alert("No hay cambio");
        document.getElementById("total").textContent = "0";
    } else {
        const cambio = dineroCliente - totalCompra;
        document.getElementById("total").textContent = cambio.toLocaleString("es-CO");
    }
}
