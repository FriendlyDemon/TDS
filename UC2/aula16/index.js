rl = require('readline-sync')
// 1a imprime 2 e 10 no console
// 1b sem console.log simplesmente retorna 2 e 10 sem fazer nada com os números, e nada apareceria no console

// 2a retorna se o texto inserido contém 'cenoura'
// 2b true

// 1
function exerc1() { console.log('Eu sou Henrique, tenho 30 anos, moro em São Leopoldo e sou estudante') }
// 2a
let exerc2a = (a, b) => a + b
// 2b
let exerc2b = (a, b) => a >= b
// 2c
let exerc2c = (a) => a % 2 == 0
// 2d
let exerc2d = (a) => [a.length, a.toUpperCase()]
// 3

let exerc3a=(a,b)=>a+b
let exerc3b=(a,b)=>a-b
let exerc3c=(a,b)=>a*b
let exerc3d=(a,b)=>a/b
const per1=rl.questionInt('insira o primeiro numero: '), per2=rl.questionInt('insira o segundo numero: ')
console.log(exerc3a(per1,per2),exerc3b(per1,per2),exerc3c(per1,per2),exerc3d(per1,per2))

// desafio 1
// a
let des1a = (a) => { console.log(a) }
// b
let des1b = (a, b) => a + b
des1a(des1b(1, 2))
// desafio 2
function add(inv, iten) {
    if (inv.length >= 5) {
        console.log('erro: inventário cheio')
        console.log(inv.toString())
    } else {
        inv.push(iten)
        console.log(inv.toString())
    }
}
function rem(inv, iten) {
    if (inv.includes(iten)) {
        inv.splice(inv.indexOf(iten), 1)
        console.log(inv.toString())
    } else {
        console.log('erro: item não encontrado')
        console.log(inv.toString())
    }
}
function list(inv) {
    console.log(inv.toString())
}