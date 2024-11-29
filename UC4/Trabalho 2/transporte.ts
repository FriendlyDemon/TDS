class Cliente {
  private nome: string;
  getnome() {
    return this.nome;
  }
  setnome(valor: string) {
    this.nome = valor;
  }
  private CNPJ: string;
  getCNPJ() {
    return this.CNPJ;
  }
  setCNPJ(valor: string) {
    this.CNPJ = valor;
  }
  private endereco: Endereco;
  getendereco() {
    return this.endereco;
  }
  setendereco(valor: Endereco) {
    this.endereco = valor;
  }
  protected listaContratos: Array<NotaFiscal>;
  getcontratos() {
    return this.listaContratos;
  }
  addnota(
    numero: number,
    data: Date,
    itens: [Carga],
    valor: number,
    formaDePagamento: string
  ): void {
    this.listaContratos.push(
      new NotaFiscal(numero, data, this, itens, valor, formaDePagamento)
    );
  }
  constructor(nome: string, cnpj: string, endereco: Endereco) {
    this.nome = nome;
    this.CNPJ = cnpj;
    this.endereco = endereco;
  }
}

class ClienteContratante extends Cliente {
  private desconto: number;
  getdesconto() {
    return this.desconto;
  }
  setdesconto(valor: number) {
    this.desconto = valor;
  }
  constructor(
    nome: string,
    cnpj: string,
    endereco: Endereco,
    desconto: number
  ) {
    super(nome, cnpj, endereco);
    this.desconto = desconto;
  }
}

class ClienteEsporadico extends Cliente {
  private dataUltimoContrato: Date;
  getdataUltimoContrato() {
    return this.dataUltimoContrato;
  }
  addnota(
    numero: number,
    data: Date,
    itens: [Carga],
    valor: number,
    formaDePagamento: string
  ) {
    this.listaContratos.push(
      new NotaFiscal(numero, data, this, itens, valor, formaDePagamento)
    );
    this.dataUltimoContrato = data;
  }
  constructor(
    nome: string,
    cnpj: string,
    endereco: Endereco,
    dataDoUltimoContrato: Date
  ) {
    super(nome, cnpj, endereco);
    this.dataUltimoContrato = dataDoUltimoContrato;
  }
}

class Veiculo {
  private placa: string;
  getplaca() {
    return this.placa;
  }
  setplaca(valor: string) {
    this.placa = valor;
  }
  private modelo: string;
  getmodelo() {
    return this.modelo;
  }
  setmodelo(valor: string) {
    this.modelo = valor;
  }
  private capCarga: string;
  getcapCarga() {
    return this.capCarga;
  }
  setcapCarga(valor: string) {
    this.capCarga = valor;
  }
  private tipoCarga: TipoCarga;
  gettipoCarga() {
    return this.tipoCarga;
  }
  settipoCarga(valor: TipoCarga) {
    this.tipoCarga = valor;
  }
  private status: StatusVeiculo;
  getstatus() {
    return this.status;
  }
  setstatus(valor: StatusVeiculo) {
    this.status = valor;
  }
  constructor(
    placa: string,
    modelo: string,
    capacidadeDeCarga: string,
    tipoDeCarga: TipoCarga
  ) {
    this.placa = placa;
    this.modelo = modelo;
    this.capCarga = capacidadeDeCarga;
    this.tipoCarga = tipoDeCarga;
  }
}

class Entrega {
  private data: Date;
  getdata() {
    return this.data;
  }
  setdata(valor: Date) {
    this.data = valor;
  }
  private hora: Date;
  gethora() {
    return this.hora;
  }
  sethora(valor: Date) {
    this.hora = valor;
  }
  private cliente: Cliente;
  getcliente() {
    return this.cliente;
  }
  setcliente(valor: Cliente) {
    this.cliente = valor;
  }
  private carga: Carga;
  getcarga() {
    return this.carga;
  }
  setcarga(valor: Carga) {
    this.carga = valor;
  }
  private veiculo: Veiculo;
  getveiculo() {
    return this.veiculo;
  }
  setveiculo(valor: Veiculo) {
    this.veiculo = valor;
  }
  private motorista: Motorista;
  getmotorista() {
    return this.motorista;
  }
  setmotorista(valor: Motorista) {
    this.motorista = valor;
  }
  private status: StatusEntrega;
  getstatus() {
    return this.status;
  }
  setstatus(valor: StatusEntrega) {
    this.status = valor;
  }
  private obs: string;
  getobs() {
    return this.obs;
  }
  setobs(valor: string) {
    this.obs = valor;
  }
  constructor(
    data: Date,
    hora: Date,
    cliente: Cliente,
    veiculo: Veiculo,
    motorista: Motorista,
    observacao: string
  ) {
    this.data = data;
    this.hora = hora;
    this.cliente = cliente;
    this.veiculo = veiculo;
    this.motorista = motorista;
    this.obs = observacao;
  }
}

class Carga {
  private peso: number;
  getpeso() {
    return this.peso;
  }
  setpeso(valor: number) {
    this.peso = valor;
  }
  private volume: number;
  getvolume() {
    return this.volume;
  }
  setvolume(valor: number) {
    this.volume = valor;
  }
  private tipo: TipoCarga;
  gettipo() {
    return this.tipo;
  }
  settipo(valor: TipoCarga) {
    this.tipo = valor;
  }
  private origem: Endereco;
  getorigem() {
    return this.origem;
  }
  setorigem(valor: Endereco) {
    this.origem = valor;
  }
  private destino: Endereco;
  getdestino() {
    return this.destino;
  }
  setdestino(valor: Endereco) {
    this.destino = valor;
  }
  private dataEmbarque: Date;
  getdataEmbarque() {
    return this.dataEmbarque;
  }
  setdataEmbarque(valor: Date) {
    this.dataEmbarque = valor;
  }
  private dataEntrega: Date;
  getdataEntrega() {
    return this.dataEntrega;
  }
  setdataEntrega(valor: Date) {
    this.dataEntrega = valor;
  }
  constructor(
    peso: number,
    volume: number,
    tipo: TipoCarga,
    origem: Endereco,
    destino: Endereco,
    dataDeEmbarque: Date,
    dataDeEntrega: Date
  ) {
    this.peso = peso;
    this.volume = volume;
    this.tipo = tipo;
    this.origem = origem;
    this.destino = destino;
    this.dataEmbarque = dataDeEmbarque;
    this.dataEntrega = dataDeEntrega;
  }
}

class Endereco {
  private pais: string;
  getpais() {
    return this.pais;
  }
  setpais(valor: string) {
    this.pais = valor;
  }
  private estado: string;
  getestado() {
    return this.estado;
  }
  setestado(valor: string) {
    this.estado = valor;
  }
  private cidade: string;
  getcidade() {
    return this.cidade;
  }
  setcidade(valor: string) {
    this.cidade = valor;
  }
  private bairro: string;
  getbairro() {
    return this.bairro;
  }
  setbairro(valor: string) {
    this.bairro = valor;
  }
  private rua: string;
  getrua() {
    return this.rua;
  }
  setrua(valor: string) {
    this.rua = valor;
  }
  private numero: number;
  getnumero() {
    return this.numero;
  }
  setnumero(valor: number) {
    this.numero = valor;
  }
  private CEP: number;
  getCEP() {
    return this.CEP;
  }
  setCEP(valor: number) {
    this.CEP = valor;
  }
  constructor(
    pais: string,
    estado: string,
    cidade: string,
    bairro: string,
    rua: string,
    numero: number,
    cep: number
  ) {
    this.pais = pais;
    this.estado = estado;
    this.cidade = cidade;
    this.bairro = bairro;
    this.rua = rua;
    this.numero = numero;
    this.CEP = cep;
  }
}

class Motorista {
  private nome: string;
  getnome() {
    return this.nome;
  }
  setnome(valor: string) {
    this.nome = valor;
  }
  private CNH: string;
  getCNH() {
    return this.CNH;
  }
  setCNH(valor: string) {
    this.CNH = valor;
  }
  private categoria: string;
  getcategoria() {
    return this.categoria;
  }
  setcategoria(valor: string) {
    this.categoria = valor;
  }
  private experiencia: string;
  getexperiencia() {
    return this.experiencia;
  }
  setexperiencia(valor: string) {
    this.experiencia = valor;
  }
  private veiculoAtribuido: Veiculo;
  getveiculoAtribuido() {
    return this.veiculoAtribuido;
  }
  setveiculoAtribuido(valor: Veiculo) {
    this.veiculoAtribuido = valor;
  }
  constructor(
    nome: string,
    cnh: string,
    categoria: string,
    experiencia: string,
    veiculo: Veiculo
  ) {
    this.nome = nome;
    this.CNH = cnh;
    this.categoria = categoria;
    this.experiencia = experiencia;
    this.veiculoAtribuido = veiculo;
  }
}

class Rota {
  private origem: Endereco;
  private destino: Endereco;
  private distancia: number;
  private tempoEstimado: Date;
  private listaVeiculos: Array<Veiculo>;
  constructor(
    origem: Endereco,
    destino: Endereco,
    distancia: number,
    tempoEstimado: Date
  ) {
    this.origem = origem;
    this.destino = destino;
    this.distancia = distancia;
    this.tempoEstimado = tempoEstimado;
  }
  showRota(){
    return this
  }
}

class NotaFiscal {
  private numero: number;
  private dataEmissao: Date;
  private cliente: Cliente;
  private itens: Array<Carga>;
  private valorTotal: number;
  private formaPagamento: string;
  constructor(
    numero: number,
    data: Date,
    cliente: Cliente,
    itens: [Carga],
    valor: number,
    formaDePagamento: string
  ) {
    this.numero = numero;
    this.dataEmissao = data;
    this.cliente = cliente;
    this.itens = itens;
    this.valorTotal = valor;
    this.formaPagamento = formaDePagamento;
  }
  showNota(){
    return this
  }
}

enum TipoCarga {
  "seco",
  "refrigerado",
  "perigoso",
}

enum StatusVeiculo {
  "disponível",
  "em manutenção",
  "em rota",
}

enum StatusEntrega {
  "pendente",
  "em andamento",
  "entregue",
}
