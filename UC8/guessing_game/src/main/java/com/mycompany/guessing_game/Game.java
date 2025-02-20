package com.mycompany.guessing_game;

import java.util.Scanner;

public class Game {

    private int numberToGuess;
    private Player player;
    private GuessValidator guessValidator;
    private Scanner scanner;

    public void start() {
        System.out.println("Bem vindo(a) ao Guessing Game, " + player.getName() + "!");
        boolean hasWon = false;

        while (!hasWon) {
            System.out.print("Digite seu palpite: ");
            int guess = scanner.nextInt();
            hasWon = guessValidator.validateGuess(guess, numberToGuess);
        }

        System.out.println("Parabéns, " + player.getName() + "! Você adivinhou o número.");

    }

    public Game() {
        this.numberToGuess = (int)( Math.random() * 100 )+ 1;
        this.player = new Player();
        this.guessValidator = new GuessValidator();
        this.scanner = new Scanner(System.in);
    }
}
