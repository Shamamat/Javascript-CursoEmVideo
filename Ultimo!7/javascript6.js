function dificil(){
    var num = document.getElementById('num')
    var sel = document.getElementById('sel')
    var res = document.getElementById('res')

    if(num.value.length == 0 || num.value <= 1 || num.value > 100 ){
        alert('Você precisa seguir o que mandei se não vai pra cadeia!')
    }
    else{
        var n = Number(num.value)
        var item = document.createElement('option')
        item.text = `Você colocou o magnífico número: ${n}`
        sel.appendChild(item)
        
    }
}