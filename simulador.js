//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML 

function calcular() {
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);

    let disponible = calcularDisponible(ingresos, egresos);
    const elemento = document.getElementById("spnDisponible");
    elemento.innerText = disponible;

    let capacidadDePago = calcularCapacidadDePago(disponible);
    const elementoA = document.getElementById("spnCapacidadPago");
    elemento.innerText = capacidadDePago;
}