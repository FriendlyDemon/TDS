interface Forma {
  nome: string;
  cor: string;
  calcularArea(): number;
}

class Circulo implements Forma {
  nome: string;
  cor: string;
  raio: number;
  calcularArea(): number {
    let x = Math.pow(this.raio, 2) * 3.14;
    return x;
  }
  constructor(nome: string, cor: string, raio: number) {
    this.nome = nome;
    this.cor = cor;
    this.raio = raio;
  }
}

class Retangulo implements Forma {
  nome: string;
  cor: string;
  base: number;
  altura: number;
  calcularArea(): number {
    let x = this.base * this.altura;
    return x;
  }
  constructor(nome: string, cor: string, base: number, altura: number) {
    this.nome = nome;
    this.cor = cor;
    this.base = base;
    this.altura = altura;
  }
}

class Triangulo implements Forma {
  nome: string;
  cor: string;
  base: number;
  altura: number;
  calcularArea(): number {
    let x = (this.base * this.altura) / 2;
    return x;
  }
  constructor(nome: string, cor: string, base: number, altura: number) {
    this.nome = nome;
    this.cor = cor;
    this.base = base;
    this.altura = altura;
  }
}
