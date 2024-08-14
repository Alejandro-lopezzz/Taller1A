//calcule el salario de un empleado

function calcularDevengado(salario, bonificacion, prima){
    return salario + bonificacion + prima
}

function calcularDeducida(seguridadS, prestamo){
    return seguridadS - prestamo
}

function calcularPorcentajeRetencion(salario){
    if(salario > 100){
        return 0.1
    }else{
        return 0
    }
}

function principal(){
    let salario = calcularDevengado(100, 5, 2 ) - calcularDeducida(4, 5)
    salario -= salario * calcularPorcentajeRetencion(salario)
    console.log(el salario es ${salario})
}
principal()