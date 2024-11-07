class Animal {
  nome: string;
  idade: number;
  especie: string;
  raca: string;
  peso: number;
  emitirSom() {}
  alimentar() {}
  brincar() {}
  constructor(
    nome: string,
    idade: number,
    especie: string,
    raca: string,
    peso: number
  ) {
    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
    this.raca = raca;
    this.peso = peso;
  }
}
class Mamifero extends Animal {
  pelo: string;
  amamenta: boolean;
  emitirSom() {
    console.log("auau");
  }
  constructor(
    nome: string,
    idade: number,
    especie: string,
    raca: string,
    peso: number,
    pelo: string,
    amamenta: boolean
  ) {
    super(nome, idade, especie, raca, peso);
    this.pelo = pelo;
    this.amamenta = amamenta;
  }
}
class Ave extends Animal {
  envegaduraAsa: number;
  bico: string;
  emitirSom() {
    console.log("piupiu");
  }
  constructor(
    nome: string,
    idade: number,
    especie: string,
    raca: string,
    peso: number,
    envergaduraAsa: number,
    bico: string
  ) {
    super(nome, idade, especie, raca, peso);
    this.envegaduraAsa = envergaduraAsa;
    this.bico = bico;
  }
}
class Peixe extends Animal {
  tamanhoAquario: number;
  alimentacao: string;
  emitirSom() {
    console.log("glubglub");
  }
  constructor(
    nome: string,
    idade: number,
    especie: string,
    raca: string,
    peso: number,
    tamanhoAquario: number,
    alimentacao: string
  ) {
    super(nome, idade, especie, raca, peso);
    this.tamanhoAquario = tamanhoAquario;
    this.alimentacao = alimentacao;
  }
}