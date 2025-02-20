package com.mycompany.rpsgame;

public class GameValidator {

    public String validate(int opponent, int player) {
        String oppChoise = null;
        switch (opponent) {
            case 1 ->
                oppChoise = "pedra";

            case 2 ->
                oppChoise = "papel";

            case 3 ->
                oppChoise = "tesoura";
        }

        if ((player == 1 && opponent == 2) || (player == 2 && opponent == 3) || (player == 3 && opponent == 1)) {
            System.out.println("Você perdeu, o computador usou " + oppChoise);
            return "computador";
        } else if ((player == 1 && opponent == 3) || (player == 2 && opponent == 1) || (player == 3 && opponent == 2)) {
            System.out.println("Você ganhou, o computador usou " + oppChoise);
            return "jogador";
        } else {
            System.out.println("Empate, ambos escolheram " + oppChoise);
            return "empate";
        }
    }
}
