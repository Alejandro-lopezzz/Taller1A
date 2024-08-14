function valorLavadora(tamaño){
    if(tamaño == 1){
        return 4000
    }else if (tamaño == 2){
        return 3000
    }else{
        console.log("no contamos con este tipo de lavadora")
    }
}

function valortotallavadora (numerodelavadoras){
    let = numerodelavadoras * valorLavadora(2) 
}


function calcularPorcentaje(){
    if(numerodelavadoras >= 3){
        return 0.03 
    }else{
        return 0
    }
}
function calcularTotal(){
    let total = valortotallavadora(5) * calcularPorcentaje

}

function principal(){
    let total = calcularTotal() 
}