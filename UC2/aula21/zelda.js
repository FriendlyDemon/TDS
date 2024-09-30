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
let personagens = []
let armas = []
let itens = []
let tipos = ['espada', 'arco', 'lanca', 'machado', 'martelo']
function per(nome, vida, dano, defesa) {
    if (typeof nome != string) {
        console.log(`Erro: nome deve ser to tipo 'string'`)
    } else if (personagens.map(({ nome }) => nome).includes(nome)) {
        console.log(`Erro: nome inválido, já existe um personagem com esse nome`)
    } else if (vida <= 0 || vida > 20) {
        console.log(`Erro: vida deve estar entre 1 e 20`)
    } else {
        personagens.push(new Personagem(nome, Number(vida), Number(dano), Number(defesa)))        
        console.log(`personagem criado com sucesso`)
    }
}
function arm(nome, tipo, dano, alcance) {
    if (typeof nome != string) {
        console.log(`Erro: nome deve ser to tipo 'string'`)
    } else if (armas.map(({ nome }) => nome).includes(nome)) {
        console.log(`Erro: nome inválido, já existe uma arma com esse nome`)
    } else if (tipos.includes(tipo)) {
        console.log(`Erro: tipo inválido`)
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
    if (typeof nome != string) {
        console.log(`Erro: nome deve ser to tipo 'string'`)
    } else if (personagens.map(({ nome }) => nome).includes(nome)) {
        console.log(`Erro: nome inválido, já existe um item com esse nome`)
    } else {
        itens.push(new Item(nome, efeito))
        console.log(`item criado com sucesso`)
    }
}
