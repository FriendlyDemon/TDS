let matriz1 = [[1, 2, 3], [4, 5, 6]] // matriz 2x3 (duas linhas, tres colunas)
// console.log(matriz1[1][2])
let matriz2 = [[10, 20, 30], [40, 50, 60], [70, 80, 90]]
/*
console.log(matriz2[0][1])
console.log(matriz2[2][1]) // 80
console.log(matriz2[1][0]) // 40
*/
let matriz3 = []
matriz3[0] = [1, 2, 3]
matriz3[1] = [4, 5, 6]
matriz3[2] = [7, 8, 9]
// console.log(matriz3[1][1]) // 5
// exer 1
let velha = [
    ['0', '0', '0'],
    ['0', '0', '0'],
    ['0', '0', '0']
]
velha[1][2] = 1
//console.log(velha[0] + '\n' + velha[1] + '\n' + velha[2])
//
let matriz4 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], soma = 0

for (const linha in matriz4) {
    for (const n in matriz4[linha]) {
        soma += matriz4[linha][n]
    }
}
// console.log(soma)
//
for (const linha in matriz4) {
    for (const n in matriz4[linha]) {
        matriz4[linha][n] *= 2
        //console.log(matriz4[linha][n])
    }
}
// exer 2
let exer = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]
function sum(mat) {
    let soma = 0
    for (const i in mat) {
        for (const j in mat[i]) {
            soma += mat[i][j]
        }
    }
    return soma
}
// console.log(sum(exer))

// batnav:
const rl = require('readline-sync')
let agua = [
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
function navio(mat) {
    function r(o){return Math.floor(Math.random()*o)}

    let n1=[r(11),r(10)]
    mat[n1[0]][n1[1]]=1
    mat[n1[0]][n1[1]+1]=1
    
    let n2=[r(10),r(11)]
    mat[n2[0]][n2[1]]=1
    mat[n2[0]+1][n2[1]]=1

    let n3=[r(11),r(9)]
    mat[n3[0]][n3[1]]=1
    mat[n3[0]][n3[1]+1]=1
    mat[n3[0]][n3[1]+2]=1

    let n4=[r(9),r(11)]
    mat[n4[0]][n4[1]]=1
    mat[n4[0]+1][n4[1]]=1
    mat[n4[0]+2][n4[1]]=1

    let n5=[r(11),r(8)]
    mat[n3[0]][n3[1]]=1
    mat[n3[0]][n3[1]+1]=1
    mat[n3[0]][n3[1]+2]=1
    mat[n5[0]][n5[1]+3]=1

    let n6=[r(8),r(11)]
    mat[n4[0]][n4[1]]=1
    mat[n4[0]+1][n4[1]]=1
    mat[n4[0]+2][n4[1]]=1
    mat[n6[0]+3][n6[1]]=1
}

{
rl.questionInt('escolha uma linha: ')
rl.questionInt('escolha uma coluna: ')
}