var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
var par = [ ]
for(var i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 == 1) {
        continue
        
    }console.log(numeros[i])

}

var cartela = [8, 13, 18, 22, 42, 49]
  var numeroSorteado = 42
for( var i = 0; i < cartela.length; i++) {
    if(cartela[i] == numeroSorteado) {
      console.log("Encontrei o número")
      break
    }
  }