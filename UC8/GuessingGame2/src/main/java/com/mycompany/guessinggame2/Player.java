/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.guesinggame2;

/**
 *
 * @author Aluno
 */
public class Player {

    private String name;
    private int victories = 0;
    private int failures = 0;

    public String getName() {
        return this.name;
    }

    public void setName(String Name) {
        this.name = Name;
    }

    public int getVictories() {
        return this.victories;
    }

    public int getFailures() {
        return this.failures;
    }

    public void addVictorie() {
        this.victories++;
    }

    public void addFailure() {
        this.failures++;
    }

    public Player(String Name) {
        name = Name;
    }
}
