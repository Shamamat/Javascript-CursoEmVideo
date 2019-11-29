var idade = 45
var agora = new Date()
var diaSem = agora.getDay() //dia da semana

console.log(`Hoje é: ${diaSem} dia de fazer alguma coisa`)

switch(diaSem){
    case 0: 
    console.log('Domingo')
    break

    case 1: 
    console.log('Segunda')
    break

    case 2: 
    console.log('Terça')
    break

    case 3: 
    console.log('Quarta')
    break

    case 4: 
    console.log('Quinta')
    break

    case 5: 
    console.log('Sexta')
    break

    case 6: 
    console.log('Sábado')
    break

    default:
    console.log('Que dia é esse QUE-RI-DI-NHA?')
    break
}

//Separaçãozinha de leve entre as atividades
console.log('----------------------------------------------------------------------------')

console.log(`Você quer brincar? coloca a idade aí... com ${idade}...`)
if(idade < 15){
    console.log(`Você é de menor? podemos brincar`)
}
else if(idade < 18){
    console.log(`Ta meio grandinho... mas da pra brincar`)
}  
else if(idade < 40 || idade < 37){
console.log(`Você é de maior? aí n tem graça`)
}
else{
console.log(`Você é tão velho assim? não dá pra brincar :/`)
}


//Se usa console.log pra mostrar na tela, diferente de document.write quando se está no node.js