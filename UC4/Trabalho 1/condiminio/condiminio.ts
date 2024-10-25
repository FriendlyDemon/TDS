class Inquilino {
  nome: string;
  domicilio: Domicilio;
  telefone: number;
  email: string;
  dependentes: Array<string> | null;
  animais: Array<string> | null;
  veiculos: Array<string> | null;
  pagamentos: Array<string>;
  contatos: Array<string | number>;
  constructor(
    nome: string,
    domicilio: Domicilio,
    telefone: number,
    email: string,
    dependentes: Array<string> | null,
    animais: Array<string> | null,
    veiculos: Array<string> | null,
    contatos: Array<string | number>
  ) {
    this.nome = nome;
    this.domicilio = domicilio;
    this.telefone = telefone;
    this.email = email;
    this.dependentes = dependentes;
    this.animais = animais;
    this.veiculos = veiculos;
    this.contatos = contatos;
  }
}
class Domicilio {
  numero: number;
  tamanho: number;
  comodos: number;
  preco: number;
  constructor(numero: number, tamanho: number, comodos: number, preco: number) {
    this.numero = numero;
    this.tamanho = tamanho;
    this.comodos = comodos;
    this.preco = preco;
  }
}
class Funcionario {
  nome: string;
  funcao: Array<Funcoes>;
  setor: string;
  jornada: string;
  contatoEmergencia: string | number;
  historicoPagamento: Array<string>;
}
class Servicos {
  empresa: string;
  servico: Funcoes;
  contato: Array<string | number>;
  contrato: string;
  historicoPagamento: Array<string>;
}
class AreaComum {
  nome: string;
  responsavel: Funcionario;
  historicoUso: Array<string>;
  agendamentos: Array<string>;
}
class Manutencao {
  descricao: string;
  tipo: Funcoes;
  data: Date;
  responsavel: Funcionario;
  custo: number;
}
class Opinioes {
  quem: Inquilino | Funcionario;
  oque: string;
  estado: string;
}
class controle_financeiro {
  pagar: Array<string>;
  receber: Array<string>;
  gastos: Array<string>;
  boleto() {}
  relatorio() {}
}
enum Funcoes {
  "porteiro",
  "jardineiro",
  "encanador",
  "limpeza",
  "segurança",
}
