const form = document.getElementById('envio');

form.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const plan = document.getElementById('seleccione').value;
    const edad = parseInt(document.getElementById('edad').value);
    let precio = 0;

    switch (plan) {
        case "basico":
            precio = 80000;
            break;
        case "estandar":
            precio = 130000;
            break;
        case "premium":
            precio = 200000;
            break;
        default:
            alert("Por favor seleccione un plan");
            precio = 0;
    }

    if (edad < 18 && edad !== "") {
        precio = precio * 0.8;
    } else if (edad > 69 && edad < 99 && edad !== "") {
        precio = precio * 0.7;
    }

    document.getElementById("precio").textContent = precio.toLocaleString('es-CO');
});
