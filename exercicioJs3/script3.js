function contar() {//no html foi criado um com valor e id = 'contar' para o botao chamar essa função abaixo
    let ini = document.getElementById('txti')//foi criado um 'input' no htmal de tipo 'number' com o id 'txti' 
    let fim = document.getElementById('txtf')// foram criadas tres variaveis para cada campo de numero
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value == 0 || fim.Value == 0 || passo.Value == 0){
        window.alert('[ERRO] faltam dados!')
    } else {
        res.innerHTML = 'contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value) 
        if (p <= 0) {
            window.alert("Passo inválido! considerando passo 1")
            p = 1
        }
        if (i < f){
        for(var c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1f607}`//esse codigo emoji só funciona entre crases
         }
        } else {
            for (var c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1f604}`
        }
    }
        res.innerHTML += `\u{1f3c1}`
    }
}