class Lingua {
  nome: string;
}

class Aluno {
  nome: string;
  cursos: Array<[Metodo, Material, Date]>;
  constructor(nome: string, cursos: Array<[Metodo, Material, Date]>) {
    this.nome = nome;
    this.cursos = cursos;
  }
}

class Material {
  nome: string;
  lingua: Lingua;
  custo: number;
  constructor(nome: string, lingua: Lingua, custo: number) {
    this.nome = nome;
    this.lingua = lingua;
    this.custo = custo;
  }
}

class Metodo {
  nome: string;
  duracao: number;
  lingua: Lingua;
  constructor(nome: string, duracao: number, lingua: Lingua) {
    this.nome = nome;
    this.duracao = duracao;
    this.lingua = lingua;
  }
}
