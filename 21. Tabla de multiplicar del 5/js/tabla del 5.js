/*
 * Tabla del 5 (para)
 * Autor:Santiago Gonzalez Vasquez
 * Fecha 04 de abril de 2024
 * version 1.0
 */



function multi(numero = 5, contador, multi = 1){
        for (contador = 1; contador  <= numero; contador++) {
            multi = numero * contador;
            console.log(numero+ " x " +contador+ " = " + multi);
        }
        return "Fin de la tabla de multiplicar"
    }


const multiExpresion = function(numero = 5, contador, multi = 1){
        for (contador = 1; contador  <= numero; contador++) {
            multi = numero * contador;
            console.log(numero+ " x " +contador+ " = " + multi);
        }
        return "Fin de la tabla de multiplicar"
    }