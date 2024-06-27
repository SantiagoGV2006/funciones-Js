/*
 * Par e impar para
 * Autor:Santiago Gonzalez Vasquez
 * Fecha 02 de abril de 2024
 * version 1.0
 */

function par(contMulti, contTa, tabla, multi, num, resul, par, impar){
        par = 0;
        impar = 0;
        contMulti = 5;
        contTa = 5;
        num = 5;

        for(tabla = 1; tabla  <= num; tabla++){

            for(multi = 1; multi <= num; multi++){

                resul = tabla * multi

                if (resul % 2 == 0) {
  
                    console.log(tabla+ " x " +multi+ " = " +resul+ " buzz");

                    par = par + 1;
                } else {

                    console.log(tabla+ " x " +multi+ " = " +resul+ " bass");

                    impar = impar + 1
                }
            }
        }

 
        console.log("hay " +par+ " pares")
        console.log("hay " +impar+ " impares")
        return "Completo"
}

const parExpresion = function(contMulti, contTa, tabla, multi, num, resul, par, impar){
    par = 0;
    impar = 0;
    contMulti = 5;
    contTa = 5;
    num = 5;

    for(tabla = 1; tabla  <= num; tabla++){

        for(multi = 1; multi <= num; multi++){

            resul = tabla * multi

            if (resul % 2 == 0) {

                console.log(tabla+ " x " +multi+ " = " +resul+ " buzz");

                par = par + 1;
            } else {

                console.log(tabla+ " x " +multi+ " = " +resul+ " bass");

                impar = impar + 1
            }
        }
    }


    console.log("hay " +par+ " pares")
    console.log("hay " +impar+ " impares")
    return "Completado"
}