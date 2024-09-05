const rl=require('readline-sync')
let input = rl.questionInt('Quanto quer retirar? ')
const real = [100, 50, 20, 10, 5, 2, 1], dinheiro = []

if (input >= real[0]) {
    dinheiro.push(Math.floor(input / real[0]) + ' notas de 100')
} if ((Math.floor(input % real[0] / real[1])) && input >= real[1]) {
    dinheiro.push(Math.floor(input % real[0] / real[1]) + ' notas de 50')
} if ((Math.floor(input % real[0] % real[1] / real[2])) && input >= real[2]) {
    dinheiro.push(Math.floor(input % real[0] % real[1] / real[2]) + ' notas de 20')
} if ((Math.floor(input % real[0] % real[1] % real[2] / real[3])) && input >= real[3]) {
    dinheiro.push(Math.floor(input % real[0] % real[1] % real[2] / real[3]) + ' notas de 10')
} if ((Math.floor(input % real[0] % real[1] % real[2] % real[3] / real[4])) && input >= real[4]) {
    dinheiro.push(Math.floor(input % real[0] % real[1] % real[2] % real[3] / real[4]) + ' notas de 5')
} if ((Math.floor(input % real[0] % real[1] % real[2] % real[3] % real[4] / real[5])) && input >= real[5]) {
    dinheiro.push(Math.floor(input % real[0] % real[1] % real[2] % real[3] % real[4] / real[5]) + ' notas de 2')
} if ((Math.floor(input % real[0] % real[1] % real[2] % real[3] % real[4] % real[5] / real[6])) && input >= real[6]) {
    dinheiro.push(Math.floor(input % real[0] % real[1] % real[2] % real[3] % real[4] % real[5] / real[6]) + ' moedas de 1')
}
console.log(dinheiro.join('\n'))