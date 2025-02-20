/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.guessing_game;

import java.util.Scanner;

/**
 *
 * @author Aluno
 */
public class Player {

    private String name;

    public Player() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite seu nome: ");
        this.name = sc.nextLine();
    }

    public String getName() {
        return name;
    }
}
