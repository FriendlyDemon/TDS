package com.mycompany.calculadora;

public class Calculadora {

    public double somar(double a, double b) {
        return a + b;
    }

    public double subtrair(double a, double b) {
        return a - b;
    }

    public double multiplicacao(double a, double b) {
        return a * b;
    }

    public double divisao(double a, double b) {
        if (b != 0) {
            return a / b;
        } else {
            System.out.println("erro:divisao por 0");
            return 0;
        }
    }

    public double potencia(double base, double exponente) {
        return Math.pow(base, exponente);
    }

    public double raizQuadrada(double base) {
        return Math.sqrt(base);
    }
}
