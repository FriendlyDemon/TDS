class Cliente {
  nome: string;
  compras: number = 0;
  carrinho = {};
  addCarrihno(produto: Produto, quantia: number) {
    this.carrinho[produto.nome] = quantia;
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
