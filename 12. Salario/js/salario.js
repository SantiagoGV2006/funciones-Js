/*
 * Salario
 * Autor:Santiago Gonzalez Vasquez
 * Fecha 01 de abril de 2024
 * version 1.0
 */

const salario=function (Pvdias,Pndias) {
    let resul=Pvdias*Pndias
    return resul
}

const salud=function (Pvdias,Pndias) {
    let saludPer
    let salarioPer=salario (Pvdias,Pndias)
    saludPer=salarioPer*0,12
    return saludPer
}

const pension=function (Pvdias,Pndias) {
    let pensionPer
    let salarioPer=salario (Pvdias,Pndias)
    pensionPer=salarioPer*0,16
    return pensionPer
}

const arl=function (Pvdias,Pndias) {
    let arlPer
    let salarioPer=salario (Pvdias,Pndias)
    arlPer=salarioPer*0.052
    return arlPer
}

const subTrans =function(Pvdias,Pndias) {
    let salarioPer=salario (Pvdias,Pndias)
    let salarioMinimo = 1300000
    if (salarioPer<=2*salarioMinimo){
        psubTrans = 114000
    }
    else{
        psubTrans =0
    }
    return psubTrans
}

const retencionPer=function(Pvdias,Pndias) {
    let salarioPer=salario (Pvdias,Pndias)
    let retencion
    let salarioMinimo = 1300000
    if (salarioPer<=4*salarioMinimo){
        retencion = salarioPer*0.04
    }
    else{
        retencion=0
    }
    return retencion
}

const deducible=function (Pvdias,Pndias) {
    let descuento
    let dsalud= salud(Pvdias,Pndias)
    let dpension= pension(Pvdias,Pndias)
    let darl= arl(Pvdias,Pndias)
    let dretencion= retencionPer(Pvdias,Pndias)
    descuento= parseInt(dsalud)+parseInt(dpension)+parseInt(darl)+parseInt(dretencion)
    return descuento
}

const pagoTotal = function(Pvdias,Pndias) {
    let salarioPer= salario (Pvdias,Pndias)
    let subTransPer= subTrans(Pvdias,Pndias)
    let deduciblePer= deducible(Pvdias,Pndias)
    pago= parseInt(salarioPer)+parseInt(subTransPer)-deduciblePer
    return pago
}