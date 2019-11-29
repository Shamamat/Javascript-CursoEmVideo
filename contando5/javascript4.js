function resposta(){
    var inicio = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pas')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Estás a fumar ainda mais coisas tipo... macounrha?')
        res.innerHTML = `Pare de fumar e vire cristão!`
    }
    else{
        res.innerHTML = 'Engajando ensaltos: <br>'
        var i = Number(inicio.value) //por mais que se coloque números
        var f = Number(fim.value)    //nas caixinhas, eles são strings
        var p = Number(passo.value)
    if(p <= 0){
        alert(`Passo errado, você quebrou a perna igual a akali, vou contar 1`)
        p = 1
    }
    if(i < f)   
        for(var c = i; c <= f; c += p){ //relaxa eu do futuro, tbm n entendi
            res.innerHTML += `${c} \u{1F449}` //contagem crescente
        }
    else{
        for(var c = i; c >= f; c -= p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
    }
        res.innerHTML += `\u{1F3C1}`
    }
    
}