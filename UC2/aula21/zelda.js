var Personagem = /** @class */ (function () {
    function Personagem(nome, vida, dano, defesa) {
        this.nome = nome;
        this.vida = vida;
        this.dano = dano;
        this.defesa = defesa;
    }
    return Personagem;
}());
var Arma = /** @class */ (function () {
    function Arma(nome, tipo, dano, alcance) {
        this.nome = nome;
        this.tipo = tipo;
        this.dano = dano;
        this.alcance = alcance;
    }
    return Arma;
}());
var Item = /** @class */ (function () {
    function Item(nome, efeito) {
        this.nome = nome;
        this.efeito = efeito;
    }
    return Item;
}());
var personagens = [
    new Personagem("Link", 3, 2, 2),
    new Personagem("Zelda", 2, 0, 0),
    new Personagem("Ganondorf", 5, 5, 3),
];
var armas = [
    new Arma("Master Sword", "sword", 3, 1),
    new Arma("Arco", "bow", 2, 10),
    new Arma("Lança", "spear", 2, 3),
];
var itens = [
    new Item("Bomba", "explode paredes e causa dano"),
    new Item("Poção", "recupera 5 corações"),
    new Item("Flechas", "munição para o arco"),
];
function per(nome, vida, dano, defesa) {
    if (vida > 0 && vida <= 20) {
        personagens.push(new Personagem(nome, vida, dano, defesa));
    }
    else {
        console.log("Erro: vida deve estar entre 1 e 20");
    }
}
function arm(nome, tipo, dano, alcance) {
    if (dano > 0) {
        armas.push(new Arma(nome, tipo, dano, alcance));
    }
    else {
        console.log("Erro: dano precisa ser maior que 0");
    }
}
function ite(nome, efeito) {
    itens.push(new Item(nome, efeito));
}
