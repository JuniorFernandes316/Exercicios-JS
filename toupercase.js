//Algumas vezes precisamos padronizar as informações antes de guardá-las no nosso sistema.
// Escreva uma função transformaParaMaiusculo(palavras). Essa função recebe como parâmetro
// um array de palavras. Ela deve retornar
// um array com a versão MAIÚSCULA de todas as palavras contidas no array passado como parâmetro


// Seu código vem aqui
function transformaParaMaiusculo(palavras){
    var maiusculas = [ ]
    for(var i = 0; i < palavras.length; i++ ){
        maiusculas.push(palavras[i].toUpperCase())
        
    }  return maiusculas
}