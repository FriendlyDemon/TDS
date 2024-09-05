const rl = require('readline-sync'),
    palavras = ['abacaxi', 'banana', 'cenoura'],
    palavra = palavras[Math.floor(Math.random() * palavras.length)].split(''),
    mostra = [];
let err = 5
for (let i = 0; i < palavra.length; i++) {
    mostra.push('*')
}
while (mostra.join('') !== palavra.join('') && err > 0) {
    console.log(mostra.join(''), "\ntentativas:", err)
    letra = rl.question('\ninsira uma letra: ')
    if (palavra.includes(letra)) {
        palavra.forEach(function (a, b) {
            if (a === letra) {
                mostra[b] = a

            }
        })
    } else { err--; console.log('a palavra não tem nenhum',letra) }
}