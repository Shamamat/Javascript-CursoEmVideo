function resultado(){
    var txt = document.getElementById('txtn')
    var tab = document.getElementById('sel')
    
    if(txt.value.length == 0){
        alert(`Coloque valores da bolsa de valores para serem multiplicados pela x
        quadrada da questão filosófica do mundo aí fora... chorei`)
    }
    else{
        var m = Number(txt.value)
        tab.innerHTML = ''
        for(var n = 1;n <= 10;n++){ 
            var item = document.createElement('option')
            resul = m*n //aí n precisava desse
            item.text = `O resultado dessa tabuada cheia de marmelada é:
            ${m} x ${n} é: ${resul}`
            tab.appendChild(item) //Serve pra adicionar um elemento filho(mostrar)
             //Também podia ser: item.text = `${m} x ${n} = ${m*n}`
    }
    }
}