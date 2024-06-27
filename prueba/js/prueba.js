function tabla(numero = 10, contador = 0, multiplicacion=3, resultado, par=0, impar=0){

    while(contador < numero){
        contador = contador + 1
        resultado = multiplicacion * contador 
         if (resultado % 2 === 0) {
            console.log(multiplicacion+ " x " +contador+ " = "  +resultado + " (par)");
            par=par+1;
        } else {
            console.log(multiplicacion+ " x " +contador+ " = "  +resultado + " (impar)");
            impar=impar+1;
        }
    }
    console.log("pares",par)
    console.log("impares",impar)
    return  "Tabla terminada"
}