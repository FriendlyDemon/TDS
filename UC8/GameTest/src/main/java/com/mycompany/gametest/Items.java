/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.gametest;

/**
 *
 * @author Aluno
 */
public class Items {

    public class Damage {

        int DiceNumber;

        int DiceValue;

        int DiceValueVersatile;
        // number? ;
        Types.DamageTypes DamageType;
        // DamageTypes ;

        public Damage(
                int DiceNumber, int DiceValue, Types.DamageTypes DamageType, int DiceValueVersatile) {
            this.DiceNumber = DiceNumber;
            this.DiceValue = DiceValue;
            this.DiceValueVersatile = DiceValueVersatile;
            this.DamageType = DamageType;
        }
    }

    public class Item {

        String name;
        String[] tags;
        int cost;
        int weight;
        String description;
    }

    public class Equipment extends Item {
    }

    public class Weapon extends Equipment {

        int[] Dakka;
    }
}
