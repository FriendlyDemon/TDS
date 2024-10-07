class Personagem {
    constructor(nome, vida, dano, defesa) {
        this.nome = nome
        this.vida = vida
        this.dano = dano
        this.defesa = defesa
    }
}
class Arma {
    constructor(nome, tipo, dano, alcance) {
        this.nome = nome
        this.tipo = tipo
        this.dano = dano
        this.alcance = alcance
    }
}
class Item {
    constructor(nome, efeito) {
        this.nome = nome
        this.efeito = efeito
    }
}
let personagens = [{ nome: 'Link', vida: 5, dano: 3, defesa: 5 }]
let armas = [{ nome: 'Master Sword', tipo: 'espada', dano: 5, alcance: 1 }]
let itens = [{ nome: 'Ocarina', efeito: 'deixa tocar melodias' }]
let tipos = ['espada', 'arco', 'lanca', 'machado', 'martelo']
function per(nome, vida, dano, defesa) {
    if (typeof nome != 'string') {
        console.log(`Erro: nome deve ser to tipo 'string'`)
    } else if (personagens.map(({ nome }) => nome.toUpperCase()).includes(nome.toUpperCase())) {
        console.log(`Erro: nome inválido, já existe um personagem com esse nome`)
    } else if (vida <= 0 || vida > 20) {
        console.log(`Erro: vida deve estar entre 1 e 20`)
    } else {
        personagens.push(new Personagem(nome, Number(vida), Number(dano), Number(defesa)))
        console.log(`personagem criado com sucesso`)
    }
}
function arm(nome, tipo, dano, alcance) {
    if (typeof nome != 'string') {
        console.log(`Erro: nome deve ser to tipo 'string'`)
    } else if (armas.map(({ nome }) => nome.toUpperCase()).includes(nome.toUpperCase())) {
        console.log(`Erro: nome inválido, já existe uma arma com esse nome`)
    } else if (!tipos.includes(tipo)) {
        console.log(`Erro: tipo inválido. Tipos válidos:\n`,...tipos)
    } else if (dano <= 0) {
        console.log(`Erro: dano precisa ser maior que 0`)
    } else if (alcance <= 0) {
        console.log(`Erro: alcance precisa ser maior que 0`)
    } else {
        armas.push(new Arma(nome, tipo, Number(dano), Number(alcance)))
        console.log(`arma criada com sucesso`)
    }
}
function ite(nome, efeito) {
    if (typeof nome != 'string') {
        console.log(`Erro: nome deve ser to tipo 'string'`)
    } else if (itens.map(({ nome }) => nome.toUpperCase()).includes(nome.toUpperCase())) {
        console.log(`Erro: nome inválido, já existe um item com esse nome`)
    } else {
        itens.push(new Item(nome, efeito))
        console.log(`item criado com sucesso`)
    }
}

per('Zelda',3,5,2)
per('Goron',0,10,5) // vida=0
per(['Ganon'],10,10,10) // nome = array
per('Midna',3,-1,-1) // dano||alcance negativo

arm('Arco','arco',4,10)
arm('Bumerangue','bum',5,5) // tipo invalido
arm('Yari','lanca',-1,3) // dano negativo

ite('Bomba','causa dano e abre caminhos')
ite('ocarina','test') // nome já existe

console.log(personagens,'\n',armas,'\n',itens)