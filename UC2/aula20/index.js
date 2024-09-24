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
    console.log(soma)
}
sum(exer)