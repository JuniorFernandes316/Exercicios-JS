function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value == 0 ){
        window.alert('Por favor, digite um numero.')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ' ' // para limpar antes de começar outra tabuada
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}` //texto de dentro do option
            item.value = `tab${c}`
            tab.appendChild(item)
            c++// variavel c + 1 e repete até 10
        }
    }
}