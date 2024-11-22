class Lingua{
    nome:string
    duracao:number
}

class Aluno{
    nome:string
    cursos:Array<[Lingua,Material,Date]>
}

class Material{
    lingua:Lingua
    custo:number
}

