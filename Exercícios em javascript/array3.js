var num = [9, 5, 7]
num[3]=7 //Coloca um número na posição 3, e se não tiver acrescenta
num.push(89) //Coloca um número sem se preocupar com a posição
num.sort() //Organiza em ordem crescente
num.push(1) //Se colocar depois do sort ele não organiza

console.log(`Crá crá, eu coloquei ${num.length} números
cujos são: ${num} o primeiro é ${num[0]}`)

console.log('-------------------------------------------------------')

var valor = [6, 7, 3, 7, 1, 3]

console.log(valor)
for(var pos=0;pos < valor.length;pos++){
    console.log(`A posição top é ${pos} com o valor ${valor[pos]}`)
}

console.log('-------------------------------------------------------')

var valores = [9, 0, 5, 3, 6]

for(var posi in valores){ //in também é dentro
    console.log(`Uma forma mais fácil de fazer ${posi} com o valor ${valores[posi]}`)
}

console.log('-------------------------------------------------------')

var numeros = [7, 4, 7, 0]

var array = numeros.indexOf(8)
var sete = numeros.indexOf(7) //serve pra achar a posição

console.log(`Onde tá? cadê? ${array}`)
console.log(`Aaah... achei esse ${sete} pelo menos`)
//Poderia colocar que ao invés de aparecer -1 colocar um if else pra mostrar outra coisa

//Array é o nome da variavel que você criou
//Elemento é onde guarda valores
//valores são o que tem nas arrays
//chave é o número de cada valor (e começa do zero)
//quando algo retornou -1 significa que tentou procurar e não achou