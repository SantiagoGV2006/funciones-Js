/*
 *  Factorial (para)
 * Autor:Santiago Gonzalez Vasquez
 * Fecha 03 de abril de 2024
 * version 1.0
 */


function factorial(contador, numero = 5, factorial = 1){
    for (contador = 1; contador <= numero; contador++) {
        factorial = factorial * contador;
        console.log("El factorial de " + contador + " es " + factorial);
    }
    return "Fin del contador"
}

const factorialExpresion = function(contador, numero = 5, factorial = 1){
    for (contador = 1; contador <= numero; contador++) {
        factorial = factorial * contador;
        console.log("El factorial de " + contador + " es " + factorial);
    }
    return "Fin del contador"
}