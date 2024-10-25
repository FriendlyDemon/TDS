class ClienteAc {
  nome: string;
  email: string;
  plano: Plano;
  treino: Array<Treino>;
  tipoAula: Aula;
  constructor(nome: string, email: string, plano: Plano, aula: Aula) {
    this.nome = nome;
    this.email = email;
    this.plano = plano;
    this.tipoAula = aula;
  }
}
class Treino {
  instrutor: Instrutor;
  descricao: string;
  repeticoes: number;
  series: number;
  constructor(
    instrutor: Instrutor,
    descricao: string,
    repeticoes: number,
    series: number
  ) {
    this.instrutor = instrutor;
    this.descricao = descricao;
    this.repeticoes = repeticoes;
    this.series = series;
  }
}
class Instrutor {
  nome: string;
  especializacoes: Array<string>;
  criarTreino(cliente: ClienteAc, desc: string, rep: number, ser: number) {
    cliente.treino.push(new Treino(this, desc, rep, ser));
  }
  constructor(nome: string, esp: Array<string>) {
    this.nome = nome;
    this.especializacoes = esp;
  }
}
class Sala {
  equipamentos: Array<Equipamento>;
  aula: Aula;
  constructor(equipamentos: Array<Equipamento>, aula: Aula) {
    this.equipamentos = equipamentos;
    this.aula = aula;
  }
}
class Equipamento {
  nome: string;
  descricao: string;
  dataManutencao: Date;
  fornecedor: string;
  instrutoresResponsaveis: Array<Instrutor>;
  constructor(
    nome: string,
    descricao: string,
    manutencao: Date,
    fornecedor: string,
    instrutores: Array<Instrutor>
  ) {
    this.nome = nome;
    this.descricao = descricao;
    this.dataManutencao = manutencao;
    this.fornecedor = fornecedor;
    this.instrutoresResponsaveis = instrutores;
  }
}
enum Plano {
  "semanal",
  "mensal",
  "anual",
}
enum Aula {
  "musculação",
  "natação",
}
