//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML 

function calcular() {
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);

    let disponible = calcularDisponible(ingresos, egresos);
    const elemento = document.getElementById("spnDisponible");
    elemento.innerText = disponible.toFixed(2);

    let capacidadDePago = calcularCapacidadDePago(disponible);
    const CapacidadPago = document.getElementById("spnCapacidadPago");
    CapacidadPago.innerText = capacidadDePago.toFixed(2);

    // Solicitud de credito
    let montoSolicitado = parseInt( document.getElementById("txtMonto").value);
    let plazoAnios =  parseInt(document.getElementById("txtPlazo").value);
    let tasaAnualSimple = parseInt(document.getElementById("txtTasaInteres").value);

    let valorInteres =  calcularInteresSimple(montoSolicitado,tasaAnualSimple,plazoAnios);
    const interesPagar = document.getElementById("spnInteresPagar");
    interesPagar.innerText = valorInteres.toFixed(2);


    // total a pagar del credito + intereses
    let totalPagarCredito = calcularTotalPagar(montoSolicitado,valorInteres);
    const totalCredito = document.getElementById("spnTotalPrestamo");
    totalCredito.innerText = totalPagarCredito.toFixed(2);


    // total letra mensual
    let cuotaLetraMensual = calcularCuotaMensual(totalPagarCredito, plazoAnios);
    const letraMensual = document.getElementById("spnCuotaMensual");
    letraMensual.innerText = cuotaLetraMensual.toFixed(2);


    // validar aprobacion del credito
    let aprobacion = aprobarCredito(capacidadDePago,cuotaLetraMensual);
    if (aprobacion==true){
        const estado = document.getElementById("spnEstadoCredito");
        estado.innerText = "CREDITO APROBADO";
    } else{
        const estado = document.getElementById("spnEstadoCredito");
        estado.innerText = "CREDITO RECHAZADO";
    }

}

function reiniciarIngresos(){

    //limpiar cajas de ingreso de valores
    let cmpCajaIngreso = document.getElementById("txtIngresos").value=" ";
    let cmpCajaEgreso = document.getElementById("txtEgresos").value=" ";
    let cmpCajaMonto = document.getElementById("txtMonto").value=" ";
    let cmpCajaPlazo = document.getElementById("txtPlazo").value=" ";
    let cmpCajaTaza = document.getElementById("txtTasaInteres").value=" ";

    //limpiar resultados
    let txtDisponible = document.getElementById("spnDisponible").innerText=" ";
    let txtCapacidad = document.getElementById("spnCapacidadPago").innerText=" ";
    let txtInteres = document.getElementById("spnInteresPagar").innerText=" ";
    let txtPrestamo = document.getElementById("spnTotalPrestamo").innerText=" ";
    let txtCuota = document.getElementById("spnCuotaMensual").innerText=" ";
    let txtEstado = document.getElementById("spnEstadoCredito").innerText="ANALIZANDO...";
}