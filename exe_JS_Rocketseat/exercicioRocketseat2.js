//2º exercício
//Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

function pares(x,y) {
    var x = 31
    var y = 321
    for(var i = x; i <= y; i++){
        if(i % 2 == 0){
        console.log(i)
    }
  }
}
pares()