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

    class Damage {

        private int diceNumber;

        private int diceValue;

        private int diceValueVersatile;

        private Types.DamageTypes damageType;

        public int getDiceNumber() {
            return this.diceNumber;
        }

        public Damage(
                int DiceNumber, int DiceValue, Types.DamageTypes DamageType, int DiceValueVersatile) {
            diceNumber = DiceNumber;
            diceValue = DiceValue;
            diceValueVersatile = DiceValueVersatile;
            damageType = DamageType;
        }
    }

    abstract class Item {

        private String name;
        private String[] tags;
        private int cost;
        private int weight;
        private String description;

        Item(String Name, String[] Tags, int Cost, int Weight, String Description) {

            name = Name;
            tags = Tags;
            cost = Cost;
            weight = Weight;
            description = Description;
        }
    }

    abstract class Equipment extends Item {

        Equipment(String Name, String[] Tags, int Cost, int Weight, String Description) {
            super(Name, Tags, Cost, Weight, Description);
        }
    }

    class Weapon extends Equipment {

        private Damage damage;
        private int range;

        public Weapon(String Name, String[] Tags, int Cost, int Weight, String Description, Damage Damage, int Range) {
            super(Name, Tags, Cost, Weight, Description);
            damage = Damage;
            range = Range;
        }
    }

    class Armor extends Equipment {

        private int ac;
        private int dexLimit;
        private Types.ArmorType armorType;

        Armor(String Name, String[] Tags, int Cost, int Weight, String Description, int Ac, int DexLimit, Types.ArmorType ArmorType) {
            super(Name, Tags, Cost, Weight, Description);
            ac = Ac;
            dexLimit = DexLimit;
            armorType = ArmorType;
        }
    }

    class Accessory extends Equipment {

        private Types.EquipSlot slot;

        Accessory(String Name, String[] Tags, int Cost, int Weight, String Description, Types.EquipSlot Slot) {
            super(Name, Tags, Cost, Weight, Description);
            slot = Slot;
        }
    }

    class Material extends Item {

        Material(String Name, String[] Tags, int Cost, int Weight, String Description) {
            super(Name, Tags, Cost, Weight, Description);
        }
    }

    class Usable extends Item {

        private boolean consumed;
        private Types.Actions useTime;

        Usable(String Name, String[] Tags, int Cost, int Weight, String Description, boolean Consumed, Types.Actions UseTime) {
            super(Name, Tags, Cost, Weight, Description);
            consumed = Consumed;
            useTime = UseTime;
        }
    }

    class Wand extends Usable {

        private Spells.Spell spell;
        private int[] charges;

        public Spells.Spell getSpell() {
            return this.spell;
        }

        public int[] getCharges() {
            return this.charges;
        }

        public void changeCharges(int change) {
            this.charges[0] += change;
        }

        Wand(String Name, String[] Tags, int Cost, int Weight, String Description, boolean Consumed, Types.Actions UseTime, Spells.Spell Spell, int CurrentCharges, int MaxCharges) {
            super(Name, Tags, Cost, Weight, Description, Consumed, UseTime);
            spell = Spell;
            charges = new int[]{CurrentCharges, MaxCharges};

        }
    }

    class Scroll extends Usable {

        private Spells.Spell spell;

        public Spells.Spell getSpell() {
            return this.spell;
        }

        Scroll(String Name, String[] Tags, int Cost, int Weight, String Description, Types.Actions UseTime, Spells.Spell Spell) {
            super(Name, Tags, Cost, Weight, Description, true, Types.Actions.action);
            spell = Spell;
        }
    }

    class Ammunition extends Item {

        private int ammount;

        public int getAmmount() {
            return this.ammount;
        }

        public void changeAmmount(int change) {
            this.ammount += change;
        }

        Ammunition(String Name, String[] Tags, int Cost, int Weight, String Description, int Ammount) {
            super(Name, Tags, Cost, Weight, Description);
            ammount = Ammount;
        }
    }
}
