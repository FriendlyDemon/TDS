const rl=require('readline-sync')
let nome,idade
console.log(typeof nome,typeof idade)
// porque as variáveis estão vazias

nome=rl.question('qual seu nome? ')
idade=rl.questionInt('qual sua idade? ')
console.log(typeof nome,typeof idade)
// string number

console.log(`olá ${nome}, você tem ${idade} anos`)