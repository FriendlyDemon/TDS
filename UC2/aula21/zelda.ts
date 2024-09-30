class Personagem {
  nome: string;
  vida: number;
  dano: number;
  defesa: number;
  constructor(nome: string, vida: number, dano: number, defesa: number) {
    this.nome = nome;
    this.vida = vida;
    this.dano = dano;
    this.defesa = defesa;
  }
}

class Arma {
  nome: string;
  tipo: string;
  dano: number;
  alcance: number;
  constructor(nome: string, tipo: string, dano: number, alcance: number) {
    this.nome = nome;
    this.tipo = tipo;
    this.dano = dano;
    this.alcance = alcance;
  }
}

class Item {
  nome: string;
  efeito: string;
  constructor(nome: string, efeito: string) {
    this.nome = nome;
    this.efeito = efeito;
  }
}

let personagens = [
  new Personagem("Link", 3, 2, 2),
  new Personagem("Zelda", 2, 0, 0),
  new Personagem("Ganondorf", 5, 5, 3),
];
let armas = [
  new Arma("Master Sword", "sword", 3, 1),
  new Arma("Arco", "bow", 2, 10),
  new Arma("Lança", "spear", 2, 3),
];
let itens = [
  new Item("Bomba", "explode paredes e causa dano"),
  new Item("Poção", "recupera 5 corações"),
  new Item("Flechas", "munição para o arco"),
];
function per(nome: string, vida: number, dano: number, defesa: number) {
  if (vida > 0 && vida <= 20) {
    personagens.push(new Personagem(nome, vida, dano, defesa));
  } else {
    console.log("Erro: vida deve estar entre 1 e 20");
  }
}
function arm(nome: string, tipo: string, dano: number, alcance: number) {
  if (dano > 0) {
    armas.push(new Arma(nome, tipo, dano, alcance));
  } else {
    console.log("Erro: dano precisa ser maior que 0");
  }
}
function ite(nome: string, efeito: string) {
  itens.push(new Item(nome, efeito));
}
