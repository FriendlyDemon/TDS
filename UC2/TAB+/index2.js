const fs = require('node:fs'), rl = require('readline-sync')
class Personagem {
    constructor(nome, classe, vida, ataque, defesa, habilidades) {
        this.nome = nome
        this.classe = classe
        this.vida = vida
        this.ataque = ataque
        this.defesa = defesa
        this.habilidades = [habilidades]
    }
    inventario = []
    ouro = 0
    pontos = 0
    nivel = 1
    historico = []
}
function req(per) {
    return require(`./personagens/${per}.json`)
}
function busca(nome) {
    return fs.readdirSync('./personagens').includes(nome + '.json')
}
const loja = [
    { nome: 'espada', tipo: 'arma', dano: 10, preco: 10 },
    { nome: 'cajado', tipo: 'arma', dano: 7, preco: 8 },
    { nome: 'faca', tipo: 'arma', dano: 5, preco: 4 },
    { nome: 'armadura de couro', tipo: 'armadura', defesa: 3, preco: 5 },
    { nome: 'armadura de placa', tipo: 'armadura', defesa: 5, preco: 15 },
    { nome: 'poção de cura', tipo: 'poção', efeito: 'cura 5', preco: 10 }
]
function acao(oque = 'lista', quem) {
    switch (oque) {
        case 'atacar':
            let def = req(quem),
                dano = this.ataque - def.defesa
            def.vida -= dano
            this.historico.push(new Date() + ' atacou ' + quem)
            fs.writeFileSync(`./personagens/${this.nome}.json`, JSON.stringify(this))
            fs.writeFileSync(`./personagens/${quem}.json`, JSON.stringify(def))
            return `${this.nome} atacou ${quem} e causou ${dano} de dano`;
        case 'excluir'://
            if (busca(per)) {
                fs.unlinkSync(`./personagem/${per}.json`)
            } else {
                return 'o personagem não existe'
            }
        ;
        default:
            break;
    }
}