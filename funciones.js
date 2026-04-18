//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
//Calcular Disponible

const IMPUESTOS=100;

function calcularDisponible(ingresos, egresos){
    let disponible = ingresos - egresos;
    if(disponible < 0){
        disponible = 0;
    }
    return disponible;
}


function calcularCapacidadDePago(montoDisponible){
    let capacidadDePago= montoDisponible/2;
    return capacidadDePago;
}


function calcularInteresSimple(monto,tasa,plazoAnios){
    //interes = plazo*monto*(tasa/100)
    let interes = plazoAnios*monto*(tasa/100);
    return interes;
}


function calcularTotalPagar(montoSol,interesGen){
    //SUMAR MONTO SOLICITADO + INTERES + IMPUESTOS
    let totalPagar = montoSol + interesGen + IMPUESTOS;
    return totalPagar;
}