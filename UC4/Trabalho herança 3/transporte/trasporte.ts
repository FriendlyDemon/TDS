class Transporte{
    capacidade:number
    velocidade:number
    rotas:Array<Rota>
    constructor(){}
}

class Rota{
    distancia:number
    custo:number
    metodosDeTransporte:Transporte
    constructor(){}
}

class Onibus extends Transporte{}

class Trem extends Transporte{}

class Aviao extends Transporte{}
