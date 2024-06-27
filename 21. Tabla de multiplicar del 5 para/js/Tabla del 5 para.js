/*
 * Tabla del 5 
 * Autor:Santiago Gonzalez Vasquez
 * Fecha 03 de abril de 2024
 * version 1.0
 */

function multi(num, contador, multi){
        num = 5;
        multi = 1;

        for (contador = 1; contador  <= num; contador++) {
            multi = num * contador;
            console.log(num+ " x " +contador+ " = " + multi);
        }
        return "completado"
}

const multiExpresion = function(num, contador, multi){
        num = 5;
        multi = 1;

        for (contador = 1; contador  <= num; contador++) {
            multi = num * contador;
            console.log(num+ " x " +contador+ " = " + multi);
        }
        return "Completado"
    }