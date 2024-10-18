class Academia{
  alunos:Array<Aluno>=[]
  addTreino(aluno:Aluno,treino:Treino){
    aluno.treinos.push(treino)
  }
}
class Aluno{
  nome:string
  altura:number
  peso:number
  treinos:Array<Treino>
}
class Treino{
  descricao:string
  series:number
  repeticoes:number
  constructor(des:string,ser:number,rep:number){
    this.descricao=des
    this.series=ser
    this.repeticoes=rep
  }
}
