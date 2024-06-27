/*
 * Mayor de edad
 * Autor:Santiago Gonzalez Vasquez
 * Fecha 31 de marzo de 2024
 * version 1.0
 */


function edadMayor(aanioActual, aanioNacimiento){
    let anioActual = aanioActual
    let anioNacimiento = aanioNacimiento
    if(anioNacimiento === "") {
        return "Error: Digite el año de nacimiento";
    }
    let edad = anioActual - anioNacimiento;
    if (edad < 0) {
        return "La persona aún no ha nacido.";}
    if(edad > 17){
        return "El tiene " +edad+ " años y es mayor de edad";
    } else{
        return "El tiene " +edad+ " años y no es mayor de edad";
    }
}

const edadMayorExpresion = function(banioActual, banioNacimiento){
    let anioActual = banioActual
    let anioNacimiento = banioNacimiento
    if(anioNacimiento === "") {
        return "Error: Digite el año de nacimiento";
    }
    let edad = anioActual - anioNacimiento;
    if (edad < 0) {
        return "La persona aún no ha nacido.";}
    if(edad > 17){
        return "El tiene " +edad+ " años y es mayor de edad";
    } else{
        return "El tiene " +edad+ " años y no es mayor de edad";
    }
}