
    personagens = ["Hermione", "Trinity", "Leia"]
    filmes = ["Harry Potter", "Matrix", "Star wars"]
    lancamentos = [2001, 1999, 1977]
    id = 3
    Math.round() * id
    
    
    if(Math.round(Math.random() * id) == 0){
    console.log(personagens[0],"é um personagem do filme",filmes[0],"que estreou no cinema em",lancamentos[0],".")
    } else if (Math.round(Math.random() * id) == 1){
        console.log(personagens[1],"é um personagem do filme",filmes[1],"que estreou no cinema em",lancamentos[1],".")
    } else if(Math.round(Math.random() * id) == 2){
        console.log(personagens[2],"é um personagem do filme",filmes[2],"que estreou no cinema em",lancamentos[2],".")
    } if (Math.round(Math.random() * id) == 3){
        console.log("numero inválido")
    }

    