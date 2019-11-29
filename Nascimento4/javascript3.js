function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fAno.value.length == 0 || Number(fAno.value) > ano){ //number transforma o valor
        window.alert('Estás a fumar coisas altamente ilícitas?') //em número
    } //fAno.value.length == 0 faz com que caso a pessoa tenha digitado nada dá erro
    else{
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img') //cria um elemento pelo js, sem o html
        img.setAttribute('id', 'foto') //coloca os atributos desse elemento

        if(fsex[0].checked){//faz com que ele pegue da primeira posição
            gênero = 'machão top'//que é 0, e se for checked fará isso
            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'bebê-homem.jpg')
            }
            else if(idade < 23){
                img.setAttribute('src', 'jovem homem.png')
            }
            else if(idade < 50){
                img.setAttribute('src', 'adulto homem.jpg')
            }
            else{
                img.setAttribute('src', 'velho homem.jpg')
            }
        }
        else{
            gênero = 'benina bonina'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'bebê-mulher.jpg')  
            }
            else if(idade < 23){
                img.setAttribute('src', 'jovem mulher.jpg')
            }
            else if(idade < 50){
                img.setAttribute('src', 'adulta mulher.jpg')
            }
            else{
                img.setAttribute('src', 'velha mulher.jpg') //não esquece do src e do tipo                                                        
            }                                               //de imagem (no caso jpg e png)
        }
        res.innerHTML = `Detectamos um ${gênero} com ${idade} anos`
        res.appendChild(img) //append é adicionar e img vai sem '' pq n é string e sim uma img
    }
}