/*
 * edad factorial
 * Autor:Santiago Gonzalez Vasquez
 * Fecha 01 de abril de 2024
 * version 1.0
 */

function factorial() {
    let num = 5 
    let contar = 0
    let factorial = 1

    while(contar < num) {
        contar= contar + 1;
        factorial = factorial * contar
        console.log(contar+ " = " +factorial)
    }
    return "Factorial";
}

const factorialExpresion =function() {
    let num = 5 
    let contar = 0
    let factorial = 1

    while(contar < num) {
        contar= contar + 1;
        factorial = factorial * contar
        console.log(contar+ " = " +factorial)
    }
    return "Factorial";
}
