function pedro(){
    let idade=require('readline-sync').questionInt('Ola Pedro, qual a sua idade?')
    if(idade<18){console.log('Olá criança')}else{console.log('Fala velho')}
}
pedro()