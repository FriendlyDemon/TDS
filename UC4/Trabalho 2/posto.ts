class Cliente {
  nome: string;
  notas: Array<NotaFiscal>;
  compra(conbustivel: Combustivel, quantidade: number, veiculo?: Veiculo): void;
  compra(combustivel: Combustivel, quantidade: number) {
    let nota = new NotaFiscal(
      this,
      new Date(),
      combustivel,
      quantidade,
      combustivel.valor * quantidade
    );
    this.notas.push(nota);
    combustivel.quantidade -= quantidade;
  }
}

class ClienteComum extends Cliente {
  CPF: string;
}

class Frota extends Cliente {
  CNPJ: string;
  veiculos: Array<Veiculo>;
  compra(combustivel: Combustivel, quantidade: number, veiculo: Veiculo) {
    let nota = new NotaFiscal(
      this,
      new Date(),
      combustivel,
      quantidade,
      combustivel.valor * quantidade
    );
    nota["veiculo"] = veiculo;
    this.notas.push(nota);
    combustivel.quantidade -= quantidade;
  }
}

class Veiculo {
  modelo: string;
  placa: string;
}

class Combustivel {
  nome: string;
  quantidade: number;
  valor: number;
  ultimaAdicao: [Date, number];
  adicionarCombustivel(quantidade: number, data: Date) {
    this.ultimaAdicao = [data, quantidade];
    this.quantidade += quantidade;
  }
}

class NotaFiscal {
  cliente: Cliente;
  data: Date;
  combustivel: Combustivel;
  quantidade: number;
  valor: number;
  constructor(
    cliente: Cliente,
    data: Date,
    combustivel: Combustivel,
    quantidade: number,
    valor: number
  ) {
    this.cliente = cliente;
    this.data = data;
    this.combustivel = combustivel;
    this.quantidade = quantidade;
    this.valor = valor;
  }
}
