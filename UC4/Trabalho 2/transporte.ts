class Cliente {
  nome: string;
  CNPJ: string;
  endereco: Endereco;
  listaContratos: Array<NotaFiscal>;
  constructor(nome: string, cnpj: string, endereco: Endereco) {
    this.nome = nome;
    this.CNPJ = cnpj;
    this.endereco = endereco;
  }
  adicionarNota(
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
}

class ClienteContratante extends Cliente {
  desconto: number;
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
  dataUltimoContrato: Date;
  adicionarNota(
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
  placa: string;
  modelo: string;
  capCarga: string;
  tipoCarga: TipoCarga;
  status: StatusVeiculo;
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
  data: Date;
  hora: Date;
  cliente: Cliente;
  carga: Carga;
  veiculo: Veiculo;
  motorista: Motorista;
  status: StatusEntrega;
  obs: string;
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
  peso: number;
  volume: number;
  tipo: TipoCarga;
  origem: Endereco;
  destino: Endereco;
  dataEmbarque: Date;
  dataEntrega: Date;
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
  pais: string;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: number;
  CEP: number;
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
  nome: string;
  CNH: string;
  categoria: string;
  experiencia: string;
  veiculoAtribuido: Veiculo;
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
  origem: Endereco;
  destino: Endereco;
  distancia: number;
  tempoEstimado: Date;
  listaVeiculos: Array<Veiculo>;
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
}

class NotaFiscal {
  numero: number;
  dataEmissao: Date;
  cliente: Cliente;
  itens: Array<Carga>;
  valorTotal: number;
  formaPagamento: string;
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
