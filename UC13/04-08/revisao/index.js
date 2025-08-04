"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var nome = "Henrique";
var idade = 30;
var estudante = true;
var listaDeCompras = ["Arroz", "Feijão", "Macarrão"];
var notas = [8.5, 9.0, 7.5];
var pessoa = {
    nome: "Maria",
    idade: 25,
    estudante: false,
};
function mensagem() {
    console.log("Olá, mundo!");
}
function soma(a, b) {
    console.log(a + b);
}
function fraseOpcional(nome) {
    console.log("Olá, " + (nome || "mundo") + "!");
}
function calcularValor(valor, desconto) {
    if (desconto === void 0) { desconto = 5; }
    console.log(valor * (1 - desconto / 100));
}
mensagem();
soma(10, 20);
fraseOpcional();
fraseOpcional("João");
calcularValor(20);
calcularValor(50, 10);
var fulano = new Pessoa_1.Pessoa("Fulano", 28);
console.log(fulano.getName());
