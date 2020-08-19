
function carregar(){
    var msg  = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date() // pegar a data atual
    var hora = data.getHours()
    msg.innerHTML = "Agora sao "+hora+" horas"
    if(hora >= 0 && hora < 12) {
        img.src = 'imagesex/morning.png'
        document.body.style.background = '#7ba5af'
        msg.innerText = "Bom Dia! Agora sao "+hora+" horas"
    } else if (hora >= 12 && hora < 18){
        img.src = 'imagesex/afternoon.png'
        document.body.style.background = '#fee89b'
        msg.innerText = "Boa Tarde! Agora sao "+hora+" horas"
    } else {
        img.src = 'imagesex/night.png'
        document.body.style.background = '#584162'
        msg.innerText = "Boa Noite! Agora sao "+hora+" horas"
    }

}