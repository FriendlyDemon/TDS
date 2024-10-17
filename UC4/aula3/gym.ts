class Aluno {
  nome: string;
  sobrenome: string;
  peso: number;
  altura: number;
  treinos:Array<Treino>=[]
  calcularIMC(): number {
    return (this.peso / this.altura) * this.altura;
  }
  adicionarTreino(treino:Treino){
    this.treinos.push(treino)
  }
  constructor(nome: string, sobrenome: string, peso: number, altura: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.peso = peso;
    this.altura = altura;
  }
}

class Academia {
  alunos: Array<Aluno>;
  adicionarAluno(aluno: Aluno) {
    this.alunos.push(aluno);
  }
  adicionarTreinoAluno(descricao: string, serie: string, repeticoes: number,aluno:Aluno){
    aluno.adicionarTreino(new Treino(descricao,serie,repeticoes))
  }
}

class Treino {
  descricao: string;
  serie: string;
  repeticoes: number;
  constructor(descricao: string, serie: string, repeticoes: number) {
    this.descricao = descricao;
    this.serie = serie;
    this.repeticoes = repeticoes;
  }
}

let academia = new Academia();
let aluno_1 = new Aluno("Pedro", "das Neves", 90, 175);
let aluno_2 = new Aluno("João", "das Canhas", 85, 170);
academia.adicionarAluno(aluno_1);
academia.adicionarAluno(aluno_2);
academia.adicionarTreinoAluno('buff','triceps',5,aluno_1)