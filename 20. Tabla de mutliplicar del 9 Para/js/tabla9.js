/*
 * Tabla del 9 (para)
 * Autor:Santiago Gonzalez Vasquez
 * Fecha 04 de abril de 2024
 * version 1.0
 */


function tabla(numero = 5, contador, multiplicacion = 9, resultado, esPar){
    for (contador = 1; contador <= numero; contador++) {
                resultado = multiplicacion * contador;
        if (contador % 2 == 0) {
            esPar = "Es par";
        } else {
            esPar = "Es impar";
        }
        console.log(multiplicacion+ " x " +contador+ " = " +resultado+ " -> " +esPar);
    }
    return "Final de la tabla del 9"
}


const tablaExpresion = function(numero = 5, contador, multiplicacion = 9, resultado, esPar){
    for (contador = 1; contador <= numero; contador++) {
                resultado = multiplicacion * contador;
        if (contador % 2 == 0) {
            esPar = "Es par";
        } else {
            esPar = "Es impar";
        }
        console.log(multiplicacion+ " x " +contador+ " = " +resultado+ " -> " +esPar);
    }
    return "Final de la tabla del 9"
}