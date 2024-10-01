let ilha = [[], [], [], [], [], [], [], [], [], []],
    dino = [[], [], [], [], [], [], [], [], [], []]

// 0: "grama"; 1: "água"; 2: "floresta";
// 0: nada 1: "herbívoro"; 2: "carnívoro";

for (x = 0; x < 10; x++) {
    for (y = 0; y < 10; y++) {
        ilha[x][y] = Math.floor(Math.random() * 3)
    }
}

for (x = 0; x < 10; x++) {
    for (y = 0; y < 10; y++) {
        if (ilha[x][y] != 1) {
            if (Math.floor(Math.random() * 5) == 4) {
                dino[x][y] = 1
            } else {
                dino[x][y] = 0
            }
        } else {
            dino[x][y] = 0
        }
    }
}
car = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]

while (ilha[car[0]][car[1]] == 1 || dino[car[0]][car[1]] == 1) {
    car = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
}
dino[car[0]][car[1]] = 2

for (x = 0; x < 10; x++) {
    if (dino[x].includes(2)) {
        tyr = [x, dino[x].indexOf(2)]
    }
}

terreno.innerHTML = ilha.join('\n');
dinos.innerHTML = dino.join('\n');

function move(x, y, dir) {
    switch (dir) {
        case 'cima':
            if (y != 0 && ilha[x - 1][y] != 1) {
                dino[x - 1][y] = 2
                dino[x][y] = 0
                for (x = 0; x < 9; x++) {
                    if (dino[x].includes(2)) {
                        tyr = [x, dino[x].indexOf(2)]
                    }
                }
                terreno.innerHTML = ilha.join('\n')
                dinos.innerHTML = dino.join('\n')
                dakk.innerText = 'coma'
            } else {
                dakk.innerText = 'ERRO: Não pode mover para cima'
            }
            break;
        case 'baixo':
            if (y != 9 && ilha[x + 1][y] != 1) {
                dino[x + 1][y] = 2
                dino[x][y] = 0
                for (x = 0; x < 9; x++) {
                    if (dino[x].includes(2)) {
                        tyr = [x, dino[x].indexOf(2)]
                    }
                }
                terreno.innerHTML = ilha.join('\n')
                dinos.innerHTML = dino.join('\n')
                dakk.innerText = 'coma'
            } else {
                dakk.innerText = 'ERRO: Não pode mover para baixo'
            }
            break;
        case 'esquerda':
            if (x != 0 && ilha[x][y - 1] != 1) {
                dino[x][y - 1] = 2
                dino[x][y] = 0
                for (x = 0; x < 9; x++) {
                    if (dino[x].includes(2)) {
                        tyr = [x, dino[x].indexOf(2)]
                    }
                }
                terreno.innerHTML = ilha.join('\n')
                dinos.innerHTML = dino.join('\n')
                dakk.innerText = 'coma'
            } else {
                dakk.innerText = 'ERRO: Não pode mover para esquerda'
            }
            break;
        case 'direita':
            if (x != 9 && ilha[x][y + 1] != 1) {
                dino[x][y + 1] = 2
                dino[x][y] = 0
                for (x = 0; x < 9; x++) {
                    if (dino[x].includes(2)) {
                        tyr = [x, dino[x].indexOf(2)]
                    }
                }
                terreno.innerHTML = ilha.join('\n')
                dinos.innerHTML = dino.join('\n')
                dakk.innerText = 'coma'
            } else {
                dakk.innerText = 'ERRO: Não pode mover para direita'
            }
            break;
        default: dakk.innerText = 'ERRO: direção inválida'
            break;
    }
}

document.getElementById('up').addEventListener('click', () => { move(tyr[0], tyr[1], 'cima') });
document.getElementById('do').addEventListener('click', () => { move(tyr[0], tyr[1], 'baixo') });
document.getElementById('le').addEventListener('click', () => { move(tyr[0], tyr[1], 'esquerda') });
document.getElementById('ri').addEventListener('click', () => { move(tyr[0], tyr[1], 'direita') });