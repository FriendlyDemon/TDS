/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.filetest;

import java.io.Serializable;

/**
 *
 * @author henri
 */
public class Character implements Serializable{

    private String name;
    private int level;
    private boolean alive;

    public String getName() {
        return this.name;
    }

    public int getLevel() {
        return this.level;
    }

    public boolean isAlive() {
        return this.alive;
    }

    Character(String Name, int Level) {
        name = Name;
        level = Level;
        alive = true;
    }
}
