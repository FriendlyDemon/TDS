//
let logGate: Array<Lote> = [];
let espaco: Array<Array<boolean>> = [];
let x: number = 10;
let y: number = 4;
espaco.length = x;
for (const i in espaco) {
  espaco[i].length = y;
  for (const j in espaco[i]) {
    espaco[i][j] = true;
  }
}
//
class Carro {
  placa: string;
  modelo: string;
  cor: string;
  constructor(placa: string, modelo: string, cor: string) {
    this.placa = placa;
    this.modelo = modelo;
    this.cor = cor;
  }
}
class Lote {
  carro: Carro;
  cliente: string;
  horaEntrada: Date;
  estaDentro: boolean;
  horaSaida: Date | void;
  vaga: Array<number>;
  constructor(
    carro: Carro,
    cliente: string,
    entrada: Date,
    vaga: Array<number>
  ) {
    this.carro = carro;
    this.cliente = cliente;
    this.horaEntrada = entrada;
    this.estaDentro = true;
    espaco[vaga[0]][vaga[1]] = false;
  }
}

function sair(lote: Lote, hora: Date) {
  lote.horaSaida = hora;
  logGate.push(lote)
  espaco[lote.vaga[0]][lote.vaga[1]]=true
}
