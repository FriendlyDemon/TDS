class Morador{
    nome:string
    idade:Date
    temPet:boolean
    entrada:Date
}
class Aluguel{
    apartamento:Apartamento
    responsavel:Morador
    moradores:Array<Morador>
    valor:number
}
class Manutencao{//o que, aonde, pressa, valor
    problema:string
    afetados:Array<Apartamento>
    custo:number
}
class Relatorio{//custos, apt alugados, alugieis pagos/atrasados
}
class Apartamento{
    valor:number
    andar:number
    numero:number
}
