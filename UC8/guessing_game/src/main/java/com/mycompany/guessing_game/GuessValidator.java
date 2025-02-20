package com.mycompany.guessing_game;

public class GuessValidator {

    public boolean validateGuess(int guess, int numberToGuess) {
        if (guess > numberToGuess) {
            System.out.println("Seu palpite é muito alto!");
            return false;
        } else if (guess < numberToGuess) {
            System.out.println("Seu palpite é muito baixo!");
            return false;
        } else {
            return true;
        }
    }
}
