const fs = require('node:fs')
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
function ganharPontos(pontos) {
    this.pontos += pontos
    if (this.pontos >= 1000) {
        this.nivel += Math.floor(this.pontos / 1000)
        this.pontos %= 1000
    }
    fs.writeFileSync(`./personagens/${this.nome}.json`, JSON.stringify(this))
}
function comprarItem(item) {
    let i = 0
    while (i < loja.length && loja[i].nome != item) { i++ }
    if (i == loja.length) {
        return "item não está na loja"
    } else if (loja[i].preco <= this.ouro) {
        this.inventario.push(loja[i])
        this.ouro -= loja[i].preco
        fs.writeFileSync(`./personagens/${this.nome}.json`, JSON.stringify(this))
        return `${loja[i].nome} comprado/a, -${loja[i].preco} ouro`
    } else {
        return "você não tem dinheiro suficiente"
    }

}
// classe para estruturar a criação de personagens
function exibirItensDisponiveis() {
    let x = []
    for (const item in loja) {
        x.push(item.nome)
    }
    return x
}
// mostra os itens da loja
const loja = [{ nome: 'espada', tipo: 'arma', dano: 10, preco: 10 }, { nome: 'cajado', tipo: 'arma', dano: 7, preco: 8 }, { nome: 'faca', tipo: 'arma', dano: 5, preco: 4 }, { nome: 'armadura de couro', tipo: 'armadura', defesa: 3, preco: 5 }, { nome: 'armadura de placa', tipo: 'armadura', defesa: 5, preco: 15 }, { nome: 'poção de cura', tipo: 'poção', efeito: 'cura 5', preco: 10 }]
// itens da loja
function req(per) {
    return require(`./personagens/${per}.json`)
}

function busca(nome) {
    return fs.readdirSync('./personagens').includes(nome + '.json')
}
// facilitam a escrita do código
function addPersonagem(n, c, hp, at, de, h) {
    const char = new Personagem(n, c, hp, at, de, h)
    fs.writeFileSync(`./personagens/${n}.json`, JSON.stringify(char))
}
// cria um personagem a partir da classe 'Personagem'
function atacar(alvo) {
    let def = req(alvo),
        dano = this.ataque - def.defesa
    def.vida -= dano
    this.historico.push(new Date() + ' atacou ' + alvo)
    fs.writeFileSync(`./personagens/${this.nome}.json`, JSON.stringify(this))
    fs.writeFileSync(`./personagens/${alvo}.json`, JSON.stringify(def))
    return `${this.nome} atacou ${alvo} e causou ${dano} de dano`
}
// seleciona o personagem para atacar, e o personagem que vai ser atacado
function habilidade(habilidade, alvo) {
    let al = req(alvo);
    this.habilidades[habilidade]
    us.historico.push(new Date() + ' usou ' + this.habilidades[habilidade] + ' em ' + al.nome)
    fs.writeFileSync(`./personagens/${this.nome}.json`, JSON.stringify(this))
    fs.writeFileSync(`./personagens/${alvo}.json`, JSON.stringify(al))
}
// seleciona o personagem que vai usar a habilidade, qual habilidade usar e qual o alvo
function excluir(per) {
    if (busca(per)) {
        fs.unlinkSync(`./personagem/${per}.json`)
    } else {
        return 'o personagem não existe'
    }
}
// exclui um arquivo da pasta 'personagens' com o nome do personagem
function listar() {
    let lista = []
    fs.readdirSync('./personagens').forEach(character => lista.push(character.slice(0, -5)))
    return lista
}
// lista todos os arquivos da pasta 'personagens' sem mostrar a extenção
function status(per) {
    if (busca(per)) {
        return `${req(per).vida} pontos de vida\nnivel ${req(per).nivel}, ${req(per).pontos} pontos`
    } else {
        return 'o personagem não existe'
    }
}
// mostra a vida do personagem inserido
for (x = 0; x < 1;) {
    eval(zas = require('readline-sync').question(': '))
    if (zas == 0) { x++ }
};