class Lingua {
  private nome: string;
  getnome() {
    return this.nome;
  }
  setnome(valor: string) {
    this.nome = valor;
  }
  constructor(nome: string) {
    this.nome = nome;
  }
}

class Aluno {
  private nome: string;
  getnome() {
    return this.nome;
  }
  setnome(valor: string) {
    this.nome = valor;
  }
  private cursos: Array<[Metodo, Material, Date]>;
  getcursos() {
    return this.cursos;
  }
  addcurso(valor: [Metodo, Material, Date]) {
    this.cursos.push(valor);
  }
  removecurso(index: number) {
    this.cursos.splice(index, 1);
  }
  constructor(nome: string, cursos: Array<[Metodo, Material, Date]>) {
    this.nome = nome;
    this.cursos = cursos;
  }
}

class Material {
  private nome: string;
  getnome() {
    return this.nome;
  }
  setnome(valor: string) {
    this.nome = valor;
  }
  private lingua: Lingua;
  getlingua() {
    return this.lingua;
  }
  setlingua(valor: Lingua) {
    this.lingua = valor;
  }
  private custo: number;
  getcusto() {
    return this.custo;
  }
  setcusto(valor: number) {
    this.custo = valor;
  }
  constructor(nome: string, lingua: Lingua, custo: number) {
    this.nome = nome;
    this.lingua = lingua;
    this.custo = custo;
  }
}

class Metodo {
  private nome: string;
  getnome() {
    return this.nome;
  }
  setnome(valor: string) {
    this.nome = valor;
  }
  private duracao: number;
  getduracao() {
    return this.duracao;
  }
  setduracao(valor: number) {
    this.duracao = valor;
  }
  private lingua: Lingua;
  getlingua() {
    return this.lingua;
  }
  setlingua(valor: Lingua) {
    this.lingua = valor;
  }
  constructor(nome: string, duracao: number, lingua: Lingua) {
    this.nome = nome;
    this.duracao = duracao;
    this.lingua = lingua;
  }
}
