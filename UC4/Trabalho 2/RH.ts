abstract class Funcionario {
  private nome: string;
  getnome() {
    return this.nome;
  }
  setnome(valor: string) {
    this.nome = valor;
  }
  private CPF: string;
  getCPF() {
    return this.CPF;
  }
  setCPF(valor: string) {
    this.CPF = valor;
  }
  private cargo: string;
  getcargo() {
    return this.cargo;
  }
  setcargo(valor: string) {
    this.cargo = valor;
  }
  private projeto: string;
  getprojeto() {
    return this.projeto;
  }
  setprojeto(valor: string) {
    this.projeto = valor;
  }
  constructor(nome: string, CPF: string, cargo: string, projeto: string) {
    this.nome = nome;
    this.CPF = CPF;
    this.cargo = cargo;
    this.projeto = projeto;
  }
}

class Horista extends Funcionario {
  private horas: Date;
  gethoras() {
    return this.horas;
  }
  sethoras(valor: Date) {
    this.horas = valor;
  }
  private valorHora: number;
  getvalorHora() {
    return this.valorHora;
  }
  setvalorHora(valor: number) {
    this.valorHora = valor;
  }
  constructor(
    nome: string,
    CPF: string,
    cargo: string,
    projeto: string,
    horas: Date,
    valorHora: number
  ) {
    super(nome, CPF, cargo, projeto);
    this.horas = horas;
    this.valorHora = valorHora;
  }
}

class Assalariado extends Funcionario {
  private cargaHoraria: string;
  getcargaHoraria() {
    return this.cargaHoraria;
  }
  setcargaHoraria(valor: string) {
    this.cargaHoraria = valor;
  }
  private salario: number;
  getsalario() {
    return this.salario;
  }
  setsalario(valor: number) {
    this.salario = valor;
  }
  constructor(
    nome: string,
    CPF: string,
    cargo: string,
    projeto: string,
    cargaHoraria: string,
    salario: number
  ) {
    super(nome, CPF, cargo, projeto);
    this.cargaHoraria = cargaHoraria;
    this.salario = salario;
  }
}

class Comissionado extends Funcionario {
  valorComicao: number;
  getvalorComicao() {
    return this.valorComicao;
  }
  setvalorComicao(valor: number) {
    this.valorComicao = valor;
  }
  constructor(
    nome: string,
    CPF: string,
    cargo: string,
    projeto: string,
    valorComicao: number
  ) {
    super(nome, CPF, cargo, projeto);
    this.valorComicao = valorComicao;
  }
}

abstract class Ativo {
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
  constructor(nome: string, quantidade: number) {
    this.nome = nome;
    this.quantidade = quantidade;
  }
}

class Equipamento extends Ativo {
  private custo: number;
  getcusto() {
    return this.custo;
  }
  setcusto(valor: number) {
    this.custo = valor;
  }
  manutencao() {}
  constructor(nome: string, quantidade: number, custo: number) {
    super(nome, quantidade);
    this.custo = custo;
  }
}

class Software extends Ativo {
  private mensalidade: number;
  getmensalidade() {
    return this.mensalidade;
  }
  setmensalidade(valor: number) {
    this.mensalidade = valor;
  }
  constructor(nome: string, quantidade: number, mensalidade: number) {
    super(nome, quantidade);
    this.mensalidade = mensalidade;
  }
}

class BD {
  private manutencoesAtivos: object;
  getmanutencoesAtivos() {
    return this.manutencoesAtivos;
  }
  setmanutencoesAtivos(valor: object) {
    this.manutencoesAtivos = valor;
  }
  private projetosFuncionarios: object;
  getprojetosFuncionarios() {
    return this.projetosFuncionarios;
  }
  setprojetosFuncionarios(valor: object) {
    this.projetosFuncionarios = valor;
  }
}

class Manutencao {
  private equipamento: Equipamento;
  getequipamento() {
    return this.equipamento;
  }
  setequipamento(valor: Equipamento) {
    this.equipamento = valor;
  }
  private dataEstrago: Date;
  getdataEstrago() {
    return this.dataEstrago;
  }
  setdataEstrago(valor: Date) {
    this.dataEstrago = valor;
  }
  private custo: number;
  getcusto() {
    return this.custo;
  }
  setcusto(valor: number) {
    this.custo = valor;
  }
  private dataInicioManutencao: void | Date;
  getdataInicioManutencao() {
    return this.dataInicioManutencao;
  }
  setdataInicioManutencao(valor: void | Date) {
    this.dataInicioManutencao = valor;
  }
  private dataFimManutencao: void | Date;
  getdataIFimManutencao() {
    return this.dataFimManutencao;
  }
  setdataIFimManutencao(valor: void | Date) {
    this.dataFimManutencao = valor;
  }
  constructor(
    equipamento: Equipamento,
    dataEstrago: Date,
    custo: number,
    dataInicioManutencao?: Date,
    dataFimManutencao?: Date
  ) {
    this.equipamento = equipamento;
    this.dataEstrago = dataEstrago;
    this.custo = custo;
    this.dataInicioManutencao = dataInicioManutencao;
    this.dataFimManutencao = dataFimManutencao;
  }
}

class Projeto {
  private funcionarios: Array<Funcionario>;
  getfuncionarios() {
    return this.funcionarios;
  }
  addFuncionario(funcionario: Funcionario) {
    if (!this.funcionarios.includes(funcionario)) {
      this.funcionarios.push(funcionario);
    } else {
      console.log("erro, funcionario já está no projeto");
    }
  }
  private inicio: Date;
  getinicio() {
    return this.inicio;
  }
  setinicio(valor: Date) {
    this.inicio = valor;
  }
  private custo: number;
  getcusto() {
    return this.custo;
  }
  setcusto(valor: number) {
    this.custo = valor;
  }
  private fim: void | Date;
  getfim() {
    return this.fim;
  }
  setfim(valor: Date) {
    this.fim = valor;
  }
  constructor(
    funcionarios: Array<Funcionario>,
    inicio: Date,
    custo: number,
    fim?: Date
  ) {
    this.funcionarios = funcionarios;
    this.inicio = inicio;
    this.custo = custo;
    this.fim = fim;
  }
}
