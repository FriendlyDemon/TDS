class ClientePa {
  nome: string;
  email: string;
  telefone: number;
  compras: number = 0;
  carrinho = {};
  historico: Array<object> = [];
  addCarrihno(produto: Produto, quantia: number) {
    this.carrinho[produto.nome] = quantia;
  }
  pagar() {
    this.carrinho["data"] = new Date();
    if (this.compras < 9) {
      this.compras++;
    } else {
      this.compras = 0;
      this.carrinho["brinde"] = 1;
    }
    this.historico.push(this.carrinho);
    this.carrinho = {};
  }
  constructor(nome: string, email: string, telefone: number) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
  }
}
class Produto {
  nome: string;
  valor: number;
  ingrediente: Array<string>;
}
let estoque = {
  farinha: 0,
  acucar: 0,
  ovos: 0,
  leite: 0,
};
