let ilha = [[], [], [], [], [], [], [], [], [], []]

// 0: "grama"; 1: "água"; 2: "floresta"; 3: "carnívoro"; 4: "herbívoro"

for (x = 0; x < 10; x++) {
    for (y = 0; y < 10; y++) {
        ilha[x][y] = Math.floor(Math.random() * 5)
    }
}

console.log(ilha.join('\n'))

function move(dir) {
    switch (dir) {
        case 'cima':
            break;
        case 'baixo':
            break;
        case 'esquerda':
            break;
        case 'direita':
            break;
        default:
            break;
    }

}