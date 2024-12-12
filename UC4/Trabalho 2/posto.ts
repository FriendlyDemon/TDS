abstract class Cliente {
  private nome: string;
  getnome() {
    return this.nome;
  }
  setnome(valor: string) {
    this.nome = valor;
  }
  protected notas: Array<NotaFiscal>;
  getnotas() {
    return this.notas;
  }
  addnotas(valor: NotaFiscal) {
    this.notas.push(valor);
  }
  removenotas(index: number) {
    this.notas.splice(index, 1);
  }
  compra(conbustivel: Combustivel, quantidade: number, veiculo?: Veiculo): void;
  compra(combustivel: Combustivel, quantidade: number) {
    let nota = new NotaFiscal(
      this,
      new Date(),
      combustivel,
      quantidade,
      combustivel.getvalor() * quantidade
    );
    this.notas.push(nota);
    combustivel.setquantidade(combustivel.getquantidade() - quantidade);
  }
  constructor(nome: string, notas: Array<NotaFiscal>) {
    this.nome = nome;
    this.notas = notas;
  }
}

class ClienteComum extends Cliente {
  private CPF: string;
  getCPF() {
    return this.CPF;
  }
  setCPF(valor: string) {
    this.CPF = valor;
  }
  constructor(nome: string, notas: Array<NotaFiscal>, CPF: string) {
    super(nome, notas);
    this.CPF = CPF;
  }
}

class Frota extends Cliente {
  private CNPJ: string;
  getCNPJ() {
    return this.CNPJ;
  }
  setCNPJ(valor: string) {
    this.CNPJ = valor;
  }
  private veiculos: Array<Veiculo>;
  getveiculos() {
    return this.veiculos;
  }
  setveiculos(valor: Array<Veiculo>) {
    this.veiculos = valor;
  }
  compra(combustivel: Combustivel, quantidade: number, veiculo: Veiculo) {
    let nota = new NotaFiscal(
      this,
      new Date(),
      combustivel,
      quantidade,
      combustivel.getvalor() * quantidade
    );
    nota["veiculo"] = veiculo;
    this.notas.push(nota);
    combustivel.setquantidade(combustivel.getquantidade() - quantidade);
  }
  constructor(
    nome: string,
    notas: Array<NotaFiscal>,
    CNPJ: string,
    veiculos: Array<Veiculo>
  ) {
    super(nome, notas);
    this.CNPJ = CNPJ;
    this.veiculos = veiculos;
  }
}

class Veiculo {
  private modelo: string;
  getmodelo() {
    return this.modelo;
  }
  setmodelo(valor: string) {
    this.modelo = valor;
  }
  private placa: string;
  getplaca() {
    return this.placa;
  }
  setplaca(valor: string) {
    this.placa = valor;
  }
  constructor(modelo: string, placa: string) {
    this.modelo = modelo;
    this.placa = placa;
  }
}

class Combustivel {
  private nome: string;
  getnome() {
    return this.nome;
  }
  setnome(valor: string) {
    this.nome = valor;
  }
  private quantidade: number;
  getquantidade() {
    return this.quantidade;
  }
  setquantidade(valor: number) {
    this.quantidade = valor;
  }
  private valor: number;
  getvalor() {
    return this.valor;
  }
  setvalor(valor: number) {
    this.valor = valor;
  }
  private ultimaAdicao: [Date, number];
  getultimaAdicao() {
    return this.ultimaAdicao;
  }
  adicionarCombustivel(quantidade: number, data: Date) {
    this.ultimaAdicao = [data, quantidade];
    this.quantidade += quantidade;
  }
  constructor(
    nome: string,
    quantidade: number,
    valor: number,
    ultimaAdicao: [Date, number]
  ) {
    this.nome = nome;
    this.quantidade = quantidade;
    this.valor = valor;
    this.ultimaAdicao = ultimaAdicao;
  }
}

class NotaFiscal {
  private cliente: Cliente;
  getcliente() {
    return this.cliente;
  }
  setcliente(valor: Cliente) {
    this.cliente = valor;
  }
  private data: Date;
  getdata() {
    return this.data;
  }
  setdata(valor: Date) {
    this.data = valor;
  }
  private combustivel: Combustivel;
  getcombustivel() {
    return this.combustivel;
  }
  setcombustivel(valor: Combustivel) {
    this.combustivel = valor;
  }
  private quantidade: number;
  getquantidade() {
    return this.quantidade;
  }
  setquantidade(valor: number) {
    this.quantidade = valor;
  }
  private valor: number;
  getvalor() {
    return this.valor;
  }
  setvalor(valor: number) {
    this.valor = valor;
  }
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
