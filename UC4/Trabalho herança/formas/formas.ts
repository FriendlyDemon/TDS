class Forma {
  nome: string;
  cor: string;
  calcularArea() {}
  constructor(nome: string, cor: string) {
    this.nome = nome;
    this.cor = cor;
  }
}

class Circulo extends Forma {
  raio: number;
  calcularArea(): number {
    let x = Math.pow(this.raio, 2) * 3.14;
    return x;
  }
  constructor(nome: string, cor: string, raio: number) {
    super(nome, cor);
    this.raio = raio;
  }
}

class Retangulo extends Forma {
  base: number;
  altura: number;
  calcularArea(): number {
    let x = this.base * this.altura;
    return x;
  }
  constructor(nome: string, cor: string, base: number, altura: number) {
    super(nome, cor);
    this.base = base;
    this.altura = altura;
  }
}

class Triangulo extends Forma {
  base: number;
  altura: number;
  calcularArea(): number {
    let x = (this.base * this.altura) / 2;
    return x;
  }
  constructor(nome: string, cor: string, base: number, altura: number) {
    super(nome, cor);
    this.base = base;
    this.altura = altura;
  }
}
