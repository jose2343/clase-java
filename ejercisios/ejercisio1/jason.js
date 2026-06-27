// Esperamos a que el formulario sea enviado
document.getElementById("formEnvio").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue

    // Obtenemos los valores del formularioÑ
    const nombreCliente = document.getElementById("nombre").value;
    const pesoPaquete = parseFloat(document.getElementById("peso").value);
    const ciudadDestino = document.getElementById("ciudad").value;

    // Calculamos la tarifa base con operador ternario
    let tarifaBase = pesoPaquete < 2 
        ? 8000 
        : (pesoPaquete <= 5 ? 15000 : 25000);

    // Recargo si es Bogotá
    const recargo = ciudadDestino === "Bogotá" ? 5000 : 0;

    // Total
    const total = tarifaBase + recargo;

    // Mostramos el resultado en la página
    document.getElementById("resultado").innerHTML = `
        Cliente: ${nombreCliente} <br>
        Ciudad: ${ciudadDestino} <br>
        Peso: ${pesoPaquete.toLocaleString("es-CO")} kg <br>
        Tarifa base: ${tarifaBase.toLocaleString("es-CO")} <br>
        Recargo: ${recargo.toLocaleString("es-CO")} <br>
        <strong>Total a pagar: ${total.toLocaleString("es-CO")}</strong>
    `;
});
