//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
//Calcular Disponible
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