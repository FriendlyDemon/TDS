let ilha = [[], [], [], [], [], [], [], [], [], []]

// 0: "grama"; 1: "água"; 2: "floresta"; 3: "carnívoro"; 4: "herbívoro"

for (x = 0; x < 10; x++) {
    for (y = 0; y < 10; y++) {
        ilha[x][y] = Math.floor(Math.random() * 5)
    }
}

console.log(ilha.join('\n'))

function move(x,y,dir) {
    switch (dir) {
        case 'cima':if(y!=0){
            ilha[x-1][y]=ilha[x][y]
            ilha[x][y]=0
        }else{
                console.log('ERRO: Não pode mover para cima')}
            break;
        case 'baixo':if(y!=9){
            ilha[x+1][y]=ilha[x][y]
            ilha[x][y]=0
        }else{
                console.log('ERRO: Não pode mover para baixo')}
            break;
        case 'esquerda':if(x!=0){
            ilha[x][y-1]=ilha[x][y]
            ilha[x][y]=0
        }else{
                console.log('ERRO: Não pode mover para esquerda')}
            break;
        case 'direita':if(x!=9){
            ilha[x][y+1]=ilha[x][y]
            ilha[x][y]=0
        }else{
                console.log('ERRO: Não pode mover para direita')}
            break;
        default:console.log('ERRO: direção inválida')
            break;
    }
}