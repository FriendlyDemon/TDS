enum raca{'salsicha','golden retriever','pitbull'}
class Pessoa{
    nome:string
    rg:number
    pele:string
}
class Cachorro{
    nome:string
    cor:string
    raca:raca
    dono:Pessoa
    constructor(nome:string,cor:string,raca:raca,dono:Pessoa){
        this.nome=nome
        this.cor=cor
        this.raca=raca
        this.dono=dono
    }
}