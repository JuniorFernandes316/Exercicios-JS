// sua função aqui
function menorNumero(numeroA, numeroB){
    if (numeroA < numeroB){
        return(numeroA)
    } if  (numeroB < numeroA){
        return(numeroB)
    } else if (numeroA == numeroB) {
        return(numeroA || numeroB)
    }
}