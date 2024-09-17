const fs = require('node:fs')
class Personagem {
    historico = []
    constructor(nome, classe, vida, habilidades) {
        this.nome = nome,
            this.classe = classe,
            this.vida = vida,
            this.habilidades = [habilidades]
    }
}
// classe para estruturar a criação de personagens
function req(per) {
    return require(`./personagens/${per}.json`)
}
// facilita a escrita do código
function addPersonagem(n, c, hp, h) {
    const char = new Personagem(n, c, hp, h)
    fs.writeFileSync(`./personagens/${n}.json`, JSON.stringify(char))
}
// cria um personagem a partir da classe 'Personagem'
function atacar(atacante, defensor) {
    const atac = req(atacante), def = req(defensor);

    atac.historico.push(new Date() + ' atacou ' + def.nome)
    fs.writeFileSync(`./personagens/${atacante}.json`, JSON.stringify(atac))
}
// seleciona o personagem para atacar, e o personagem que vai ser atacado
function defender(atacante, defensor) {
    const atac = req(atacante), def = req(defensor);

    def.historico.push(new Date() + ' defendeu ' + atac.nome)
    fs.writeFileSync(`./personagens/${defensor}.json`, JSON.stringify(def))
}
// seleciona o personage mque vai defender e o personagem que vai atacar
function habilidade(usuario, habilidade, alvo) {
    const us = req(usuario), al = req(alvo);

    us.historico.push(new Date() + ' usou ' + us.habilidades[habilidade] + al.nome)
    fs.writeFileSync(`./personagens/${usuario}.json`, JSON.stringify(us))
}
// seleciona o personagem que vai usar a habilidade, qual habilidade usar e qual o alvo
function busca(nome) {
    if((fs.readdirSync('./personagens')).includes(nome + '.json')){
        console.log('o personagem existe')
    } else {
        console.log('o personagem não existe')
    }
}
// busca um arquivo com o nome do personagem inserido na pasta 'personagens'
function excluir(per) {
    if((fs.readdirSync('./personagens')).includes(nome + '.json')){
        fs.unlinkSync(`./personagem/${per}.json`)
    } else {
        console.log('o personagem não existe')
    }
}
// exclui um arquivo da pasta 'personagens' com o nome do personagem
function listar() {
    let lista = []
    fs.readdirSync('./personagens').forEach(character => lista.push(character.slice(0, -5)))
    console.log(lista)
}
// lista todos os arquivos da pasta 'personagens' sem mostrar a extenção
function status(per) {
    if((fs.readdirSync('./personagens')).includes(per + '.json')){
        console.log(req(per).vida)
    } else {
        console.log('o personagem não existe')
    }
    
}
// mostra a vida do personagem inserido
for (x = 0; x < 1;) {
    eval(zas = require('readline-sync').question(': '))
    if (zas == 0) { x++ }
};