/*
 * Promedio
 * Autor:Santiago Gonzalez Vasquez
 * Fecha 30 de marzo de 2024
 * version 1.0
 */


function nota(pnotaUno, pnotaDos, pnotaTres){
    let notaUno = pnotaUno
    let notaDos = pnotaDos
    let notaTres = pnotaTres
    // Se calcula el promedio de las notas
    return (parseInt(notaUno)+parseInt(notaDos)+parseInt(notaTres))/3;
}

const notaExpresion = function(cnotaUno, cnotaDos, cnotaTres){
    let notaUno = cnotaUno
    let notaDos = cnotaDos
    let notaTres = cnotaTres
    // Se calcula el promedio de las notas
    return (parseInt(notaUno)+parseInt(notaDos)+parseInt(notaTres))/3;
}