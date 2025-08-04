import { Pessoa } from "./Pessoa";

let nome: string = "Henrique";
let idade: number = 30;
let estudante: boolean = true;

let listaDeCompras: string[] = ["Arroz", "Feijão", "Macarrão"];
let notas: Array<number> = [8.5, 9.0, 7.5];

let pessoa: { nome: string; idade: number; estudante: boolean } = {
  nome: "Maria",
  idade: 25,
  estudante: false,
};

function mensagem(): void {
  console.log("Olá, mundo!");
}
function soma(a: number, b: number): void {
  console.log(a + b);
}
function fraseOpcional(nome?: string): void {
  console.log("Olá, " + (nome || "mundo") + "!");
}
function calcularValor(valor: number, desconto: number = 5): void {
  console.log(valor * (1 - desconto / 100));
}

mensagem();
soma(10, 20);
fraseOpcional();
fraseOpcional("João");
calcularValor(20);
calcularValor(50, 10);

const fulano: Pessoa = new Pessoa("Fulano", 28);
console.log(fulano.getName());
