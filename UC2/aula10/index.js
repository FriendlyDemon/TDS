let num1 = 1, num2 = 2;

if (num1 == num2) {
    console.log('os números são iguais')
} else if (num1 > num2) {
    console.log('o primeiro número é maior')
} else {
    console.log('o segundo número é maior')
}
//
let paisDeOrigem = 'Brasil'

switch (paisDeOrigem) {
    case 'Brasil':
        console.log('Brasileiro')
        break
    case 'Uruguay':
        console.log('Uruguaio')
        break
    case 'para que?':
        console.log('Paraguaio')
        break
    default:
        console.log('pais não encontrado')
        break
}
//
let pokemon = 'charmander'
function inicial() {
    switch (pokemon) {
        case 'charmander':
            return 'fogo'
        case 'squirtle':
            return 'agua'
        case 'bulbasauro':
            return 'planta'
        default:
            return 'unkown'
    }
}
console.log(inicial())
//
let aluno = 'hermione',
    alunos = ['narcisa', 'luna', 'ana', 'hermione'],
    casas = ['sonserina', 'corvinal', 'lufa-lufa', 'grifinória'];

if (alunos.includes(aluno)) {
    console.log(casas[alunos.indexOf(aluno)])
} else {
    console.log('erro')
}
//
let con1 = true, con2 = false
if (con1 && con2) {
    console.log('ambas as condições são verdadeiras')
} else if (con1 || con2) {
    console.log('alguma das condições é verdadeira')
} else {
    console.log('nenhuma das condições são verdadeiras')
}
if (!con1) {
    console.log('a condição 1 é falsa')
} else {
    console.log('a condição 1 é verdadeira')
}
//
medio=true
idade=20
cursando=false

if(idade>=18&&medio&&!cursando){
    console.log('pode cursar')
} else {
    console.log('não pode cursar')
}