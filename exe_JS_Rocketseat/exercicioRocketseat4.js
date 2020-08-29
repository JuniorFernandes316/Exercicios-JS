function experiencia(anos) {
    
     if(anosEstudo <= 1){
        console.log('iniciante')
    } else if (anosEstudo >1 && anosEstudo <= 3){
        console.log('intermediário')
    } else if (anosEstudo > 3 && anosEstudo<= 6){
        console.log('Avançado')
    } else if (anosEstudo > 6 ){
        console.log('Jedi Master')
    }
}

var anosEstudo = 7
experiencia(anosEstudo)