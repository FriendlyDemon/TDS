enum tamanho {
  "p",
  "m",
  "g",
  "gg",
}

class Peca {
  codigo: number;
  nome: string;
  tamanho: tamanho;
  cor: string;
  preco: number;
  qEstoque: number;
  constructor(
    codigo: number,
    nome: string,
    tamanho: tamanho,
    cor: string,
    preco: number,
    qEstoque: number
  ) {
    this.codigo = codigo;
    this.nome = nome;
    this.tamanho = tamanho;
    this.cor = cor;
    this.preco = preco;
    this.qEstoque = qEstoque;
  }
}

class Cliente {
  nome: string;
  
  constructor(){}
  comprar = function () {};
  historico = function () {};
  atDados = function () {};
}

class Vendas {
  regVenda = function () {};
  totalCompra = function () {};
  faturamento = function () {};
}
