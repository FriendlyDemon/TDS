const rl = require('readline-sync')
function r(o) { return Math.floor(Math.random() * o) }
let agua = []
function navio() {
    agua = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
    let n1 = [r(11), r(10)]
    agua[n1[0]][n1[1]] = 1
    agua[n1[0]][n1[1] + 1] = 1

    let n2 = [r(10), r(11)]
    while (agua[n2[0]][n2[1]] + agua[n2[0] + 1][n2[1]] !== 0) {
        n2 = [r(10), r(11)]
    }
    agua[n2[0]][n2[1]] = 1, agua[n2[0] + 1][n2[1]] = 1

    let n3 = [r(11), r(9)]
    while (agua[n3[0]][n3[1]] + agua[n3[0]][n3[1] + 1] + agua[n3[0]][n3[1] + 2] !== 0) {
        n3 = [r(11), r(9)]
    }
    agua[n3[0]][n3[1]] = 1, agua[n3[0]][n3[1] + 1] = 1, agua[n3[0]][n3[1] + 2] = 1

    let n4 = [r(9), r(11)]
    while (agua[n4[0]][n4[1]] + agua[n4[0] + 1][n4[1]] + agua[n4[0] + 2][n4[1]]) {
        n4 = [r(9), r(11)]
    }
    agua[n4[0]][n4[1]] = 1, agua[n4[0] + 1][n4[1]] = 1, agua[n4[0] + 2][n4[1]] = 1

    let n5 = [r(11), r(8)]
    while (agua[n5[0]][n5[1]] + agua[n5[0]][n5[1] + 1] + agua[n5[0]][n5[1] + 2] + agua[n5[0]][n5[1] + 3] !== 0) {
        n5 = [r(11), r(8)]
    }
    agua[n5[0]][n5[1]] = 1, agua[n5[0]][n5[1] + 1] = 1, agua[n5[0]][n5[1] + 2] = 1, agua[n5[0]][n5[1] + 3] = 1

    let n6 = [r(8), r(11)]
    while (agua[n6[0]][n6[1]] + agua[n6[0] + 1][n6[1]] + agua[n6[0] + 2][n6[1]] + agua[n6[0] + 3][n6[1]] !== 0) {
        n6 = [r(8), r(11)]
    }
    agua[n6[0]][n6[1]] = 1, agua[n6[0] + 1][n6[1]] = 1, agua[n6[0] + 2][n6[1]] = 1, agua[n6[0] + 3][n6[1]] = 1
}
let tentativas = 0
function atirar() {
    while (tentativas < 10&&(agua[0].includes(1),agua[1].includes(1),agua[2].includes(1),agua[3].includes(1),agua[4].includes(1),agua[5].includes(1),agua[6].includes(1),agua[7].includes(1),agua[8].includes(1),agua[9].includes(1))) {
        let l = rl.questionInt('escolha uma linha: '),
            c = rl.questionInt('escolha uma coluna: ')
        if (agua[l][c] == 0) {
            agua[l][c] = 'x'; tentativas++; console.log('errou.',tentativas,'tentativas')
        } else if (agua[l][c] == 1) {
            agua[c][l] = 'x'; console.log('acertou.',tentativas,'tentativas')
        } else {
            console.log('você já atirou nesse lugar')
        }
    }
    if (tentativas=10){
        console.log('Você perdeu')
    }
    else{
        console.log('Você ganhou')
    }
}
navio()
atirar()