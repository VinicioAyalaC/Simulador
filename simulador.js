//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML 

function calcular() {
       // =========================
    // FUNCIONES INTERNAS
    // =========================
    function mostrarError(idCampo, mensaje) {
        let campo = document.getElementById(idCampo);

        // eliminar error previo
        let errorExistente = document.getElementById(idCampo + "Error");
        if (errorExistente) {
            errorExistente.remove();
        }

        let error = document.createElement("p");
        error.id = idCampo + "Error";
        error.style.color = "red";
        error.style.fontSize = "12px";
        error.innerText = mensaje;

        campo.insertAdjacentElement("afterend", error);
    }

    function limpiarErrores() {
        let errores = document.querySelectorAll("p[id$='Error']");
        errores.forEach(e => e.remove());
    }

    function esNumero(valor) {
        return !isNaN(valor) && valor.trim() !== "";
    }

    // =========================
    // INICIO VALIDACIONES
    // =========================
    limpiarErrores();
    let hayErrores = false;

    let ingresosTxt = document.getElementById("txtIngresos").value;
    let egresosTxt = document.getElementById("txtEgresos").value;
    let montoTxt = document.getElementById("txtMonto").value;
    let plazoTxt = document.getElementById("txtPlazo").value;
    let tasaTxt = document.getElementById("txtTasaInteres").value;

    // SOLO NÚMEROS
    if (!esNumero(ingresosTxt)) {
        mostrarError("txtIngresos", "Ingrese solo números");
        hayErrores = true;
    }

    if (!esNumero(egresosTxt)) {
        mostrarError("txtEgresos", "Ingrese solo números");
        hayErrores = true;
    }

    if (!esNumero(montoTxt)) {
        mostrarError("txtMonto", "Ingrese solo números");
        hayErrores = true;
    }

    if (!esNumero(plazoTxt)) {
        mostrarError("txtPlazo", "Ingrese un número válido");
        hayErrores = true;
    }

    if (!esNumero(tasaTxt)) {
        mostrarError("txtTasaInteres", "Ingrese solo números");
        hayErrores = true;
    }

    // VALIDACIONES ESPECÍFICAS
    let plazo = parseInt(plazoTxt);
    if (isNaN(plazo) || plazo <= 0 || plazo > 25 || !Number.isInteger(plazo)) {
        mostrarError("txtPlazo", "Debe ser entero entre 1 y 25");
        hayErrores = true;
    }

    let tasa = parseFloat(tasaTxt);
    if (isNaN(tasa) || tasa < 0 || tasa > 50) {
        mostrarError("txtTasaInteres", "Debe estar entre 0 y 50");
        hayErrores = true;
    }

    // SI HAY ERRORES → DETENER
    if (hayErrores) {
        return;
    }

    // =========================
    // LÓGICA ORIGINAL
    // =========================
    let ingresos = parseFloat(ingresosTxt);
    let egresos = parseFloat(egresosTxt);

    let disponible = calcularDisponible(ingresos, egresos);
    document.getElementById("spnDisponible").innerText = disponible.toFixed(2);

    let capacidadDePago = calcularCapacidadDePago(disponible);
    document.getElementById("spnCapacidadPago").innerText = capacidadDePago.toFixed(2);

    let montoSolicitado = parseFloat(montoTxt);
    let plazoAnios = plazo;
    let tasaAnualSimple = tasa;

    let valorInteres = calcularInteresSimple(montoSolicitado, tasaAnualSimple, plazoAnios);
    document.getElementById("spnInteresPagar").innerText = valorInteres.toFixed(2);

    let totalPagarCredito = calcularTotalPagar(montoSolicitado, valorInteres);
    document.getElementById("spnTotalPrestamo").innerText = totalPagarCredito.toFixed(2);

    let cuotaLetraMensual = calcularCuotaMensual(totalPagarCredito, plazoAnios);
    document.getElementById("spnCuotaMensual").innerText = cuotaLetraMensual.toFixed(2);

    let aprobacion = aprobarCredito(capacidadDePago, cuotaLetraMensual);
    document.getElementById("spnEstadoCredito").innerText =
        aprobacion ? "CREDITO APROBADO" : "CREDITO RECHAZADO";
}


function reiniciarIngresos(){
    
    // ===== limpiar inputs (vacío real) =====
    document.getElementById("txtIngresos").value = "";
    document.getElementById("txtEgresos").value = "";
    document.getElementById("txtMonto").value = "";
    document.getElementById("txtPlazo").value = "";
    document.getElementById("txtTasaInteres").value = "";

    // ===== limpiar resultados =====
    document.getElementById("spnDisponible").innerText = "";
    document.getElementById("spnCapacidadPago").innerText = "";
    document.getElementById("spnInteresPagar").innerText = "";
    document.getElementById("spnTotalPrestamo").innerText = "";
    document.getElementById("spnCuotaMensual").innerText = "";

    // ===== restaurar estado inicial =====
    document.getElementById("spnEstadoCredito").innerText = "ANALIZANDO...";

    // ===== eliminar mensajes de error =====
    let errores = document.querySelectorAll("p[id$='Error']");
    errores.forEach(e => e.remove());
}