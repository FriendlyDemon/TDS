// 1
// 12

// 2
// 2, 4 e 6, apenas os pares

// 3
// 225. soma total de todos os valores

// 1
let mapa=[[],[],[],[],[]]
for (i=0;i<5;i++){
    for(j=0;j<5;j++){
        mapa[i]=Math.floor(Math.random()*3)
    }
}
//console.log(mapa.join('\n'))

// 2
let pontuacao=[[3,3,4,4],[5,2,4,1],[2,3,4,5]]
function total(){
    let j1=pontuacao[0].reduce((soma, num) => soma + num),
    j2=pontuacao[1].reduce((soma, num) => soma + num),
    j3=pontuacao[2].reduce((soma, num) => soma + num)
    console.log(`O jogador 1 fez ${j1} pontos, o jogador 2 fez ${j2}, e o jogador 3 fez ${j3}`)
}
// total()

// 3
let mat=[[1,2,3,4],[2,4,6,8],[1,3,5,7],[3,6,9,12]]
for(const linha in mat){
    mat[linha].reverse()
}
console.log(mat.join('\n'))