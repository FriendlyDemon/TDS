package com.mycompany.rpsgame;

import java.util.Scanner;

public class Game {

    public GameValidator validar = new GameValidator();
    private int opponentNumber;
    Scanner sc = new Scanner(System.in);

    public Game() {
    }

    public void start() {
        int jogador = 0;
        int computador = 0;
        int empate = 0;
        boolean fim = false;
        System.out.println("Bem vindo ao pedra papel e tesoura!");
        while (fim == false) {
            opponentNumber = (int) (Math.random() * 3) + 1;
            System.out.println("escolha 1 para pedra, 2 para papel ou 3 para tesoura: ");
            int playerNumber = sc.nextInt();
            String resultado = validar.validate(opponentNumber, playerNumber);

            switch (resultado) {
                case "jogador" ->
                    jogador++;
                case "computador" ->
                    computador++;
                case "empate" ->
                    empate++;
            }

            System.out.println("você: " + jogador + " computador: " + computador + " empates: " + empate);

            if (jogador == 2 || (jogador + empate >= 3) && jogador > computador) {
                System.out.print("Você Ganhou!");
                fim = true;
            } else if (computador == 2 || (computador + empate >= 3) && computador > jogador) {
                System.out.print("Você Perdeu!");
                fim = true;
            }
        }
    }
}
