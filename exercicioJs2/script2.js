function verificar() {
   // window.alert("FUNCIONOU POW")
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
        if (fano.Value == 0 || Number(fano.value) > ano){
            window.alert('[ERRO] verifique os dados e tente novamente!')
        } else {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var genero = ' '
            var img = document.createElement('img')
            if (fsex[0].checked){
                genero = 'Homem'
                if(idade >= 0 && idade < 10) {
                   img.setAttribute('src', 'imagesex2/childboy.png')
                } else if(idade < 21){
                    img.setAttribute('src', 'imagesex2/youngboy.png')
                } else if (idade < 50){
                    img.setAttribute('src', 'imagesex2/adultman.png')
                }else {
                    img.setAttribute('src', 'imagesex2/oldman.png')
                }
            } else if (fsex[1].checked){
                genero = 'Mulher'
                if(idade >= 0 && idade < 10) {
                    img.setAttribute('src', 'imagesex2/childgirl.png')
                } else if (idade < 21){
                    img.setAttribute('src', 'imagesex2/younggirl.png')
                } else if(idade < 50) {
                    img.setAttribute('src', 'imagesex2/adultwoman.png')
                }else {
                    img.setAttribute('src', 'imagesex2/oldwoman.png') 
                }
            }
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
        }
    
}
