package com.mycompany.guessing_game;

import java.util.Scanner;

public class Player {

    private String name;

    public Player() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite seu nome: ");
        this.name = sc.nextLine();
        sc.close();
    }

    public String getName() {
        return name;
    }
}
