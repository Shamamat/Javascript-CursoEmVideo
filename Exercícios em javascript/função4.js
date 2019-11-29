function parimpar(n){
    if(n%2 == 0){
        return 'Póri paaar' //retorna, mas ainda precisa do console
    }
    else{
        return 'Póri limpaaar' 
    }
}
console.log(parimpar(5))

console.log('-------------------ex 2-----------------------')

function soma(n1=0, n2=0){ //Se não colocar nenhum número vira zero
    return n1 + n2        
}
console.log(soma(2,5)) //Se não colocar dois valores retorna NaN

console.log('-------------------ex 3-----------------------')

var v = function(x){
    return x*2
} //tbm tem como colocar uma flecha => (isso n tem mt haver com isso)

console.log(v(5)) //Coloca o valor aqui pra fazer o preocesso de cima

console.log('-------------------ex 4-----------------------')

function fatorial(n){
    var fat = 1
    for(var c = n; c > 1; c--){ 
        fat *= c
    } //fatorial é: 5! = 5 x 4 x 3 x 2 x 1
    return fat
}
console.log(`Dá pra mostrar assim? talvez ${fatorial(5)}`)

console.log('-------------------ex 5-----------------------')

function fator(n){ //recursividade
    if(n == 1){
        return 1
    }
    else{
        return n * fator(n-1) //aqui ainda é fatorial
    }
}
console.log(`O que acontece é ${(fator(9))}`)


