package com.mycompany.gametest;

import java.util.ArrayList;
import java.util.Arrays;

public class Items {

    static class Damage {

        private int diceNumber;

        private int diceValue;

        private int diceValueVersatile;

        private Types.DamageTypes damageType;

        public int getDiceNumber() {
            return this.diceNumber;
        }

        public int getDiceValue() {
            return this.diceValue;
        }

        public int getDiceVersatile() {
            return this.diceValueVersatile;
        }

        public Types.DamageTypes getDamageType() {
            return this.damageType;
        }

        public Damage(
                int DiceNumber, int DiceValue, Types.DamageTypes DamageType, int DiceValueVersatile) {
            diceNumber = DiceNumber;
            diceValue = DiceValue;
            diceValueVersatile = DiceValueVersatile;
            damageType = DamageType;
        }
    }

    static abstract class Item {

        private String name;
        private int cost;
        private int weight;
        private String description;

        public String getName() {
            return this.name;
        }

        public void setName(String Name) {
            this.name = Name;
        }

        public int getCost() {
            return this.cost;
        }

        public void setCost(int newCost) {
            this.cost = newCost;
        }

        public int getWeight() {
            return this.weight;
        }

        public void setWeight(int newWeight) {
            this.weight = newWeight;
        }

        public String getDescription() {
            return this.description;
        }

        public void setDescription(String Description) {
            this.description = Description;
        }

        Item(String Name, int Cost, int Weight, String Description) {

            name = Name;
            cost = Cost;
            weight = Weight;
            description = Description;
        }
    }

    static abstract class Equipment extends Item {

        private boolean isMagical;

        public boolean getIsMagical() {
            return this.isMagical;
        }

        public void setIsMagical(boolean isMagic) {
            this.isMagical = isMagic;
        }

        Equipment(String Name, int Cost, int Weight, String Description) {
            super(Name, Cost, Weight, Description);
        }
    }

    static class Weapon extends Equipment {

        private Damage damage;

        private ArrayList<Integer> range;

        private ArrayList<Types.WeaponTags> tags;

        public Damage getDamage() {
            return this.damage;
        }

        public void setDamage(Damage Damage) {
            this.damage = Damage;
        }

        public ArrayList<Integer> getRange() {
            return this.range;
        }

        public ArrayList<Types.WeaponTags> getTags() {
            return this.tags;
        }

        public void addTag(Types.WeaponTags Tag) {
            this.tags.add(Tag);
        }

        public void addTags(Types.WeaponTags[] Tags) {
            tags.addAll(Arrays.asList(Tags));
        }

        public void removeTag(Types.WeaponTags Tag) {
            this.tags.remove(Tag);
        }

        public void removeTags(Types.WeaponTags[] Tags) {
            tags.removeAll(Arrays.asList(Tags));
        }

        public Weapon(String Name, Types.WeaponTags[] Tags, int Cost, int Weight, String Description, Damage Damage, Integer MinRange, Integer MaxRange) {
            super(Name, Cost, Weight, Description);
            this.tags = new ArrayList<>();
            tags.addAll(Arrays.asList(Tags));
            damage = Damage;
            range = new ArrayList<>();
            range.add(MinRange);
            range.add(MaxRange);
        }
    }

    static class Armor extends Equipment {

        private int ac;
        private int dexLimit;
        private Types.ArmorType armorType;
        private boolean isMetal;

        public int getAc() {
            return this.ac;
        }

        public void setAc(int newAc) {
            this.ac = newAc;
        }

        public int getDexLimit() {
            return this.dexLimit;
        }

        public void setDexLimit(int newDexLimit) {
            this.dexLimit = newDexLimit;
        }

        public Types.ArmorType getArmorType() {
            return this.armorType;
        }

        public boolean getIsMetal() {
            return this.isMetal;
        }

        public Armor(String Name, int Cost, int Weight, String Description, int Ac, int DexLimit, Types.ArmorType ArmorType, boolean IsMetal) {
            super(Name, Cost, Weight, Description);
            ac = Ac;
            dexLimit = DexLimit;
            armorType = ArmorType;
            isMetal = IsMetal;
        }
    }

    static class Accessory extends Equipment {

        private Types.EquipSlot slot;

        public Types.EquipSlot getSlot() {
            return this.slot;
        }

        public Accessory(String Name, int Cost, int Weight, String Description, Types.EquipSlot Slot) {
            super(Name, Cost, Weight, Description);
            slot = Slot;
        }
    }

    static class Material extends Item {

        public Material(String Name, int Cost, int Weight, String Description) {
            super(Name, Cost, Weight, Description);
        }
    }

    static class Usable extends Item {

        private boolean isConsumed;
        private Types.Actions useTime;

        public boolean getIsConsumed() {
            return this.isConsumed;
        }

        public Types.Actions getUseTime() {
            return this.useTime;
        }

        public Usable(String Name, int Cost, int Weight, String Description, boolean Consumed, Types.Actions UseTime) {
            super(Name, Cost, Weight, Description);
            isConsumed = Consumed;
            useTime = UseTime;
        }
    }

    static class Wand extends Usable {

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

        public Wand(String Name, int Cost, int Weight, String Description, boolean Consumed, Types.Actions UseTime, Spells.Spell Spell, int CurrentCharges, int MaxCharges) {
            super(Name, Cost, Weight, Description, Consumed, UseTime);
            spell = Spell;
            charges = new int[]{CurrentCharges, MaxCharges};

        }
    }

    static class Scroll extends Usable {

        private Spells.Spell spell;

        public Spells.Spell getSpell() {
            return this.spell;
        }

        public Scroll(String Name, int Cost, int Weight, String Description, Types.Actions UseTime, Spells.Spell Spell) {
            super(Name, Cost, Weight, Description, true, Types.Actions.action);
            spell = Spell;
        }
    }

    static class Ammunition extends Item {

        private int ammount;

        public int getAmmount() {
            return this.ammount;
        }

        public void changeAmmount(int change) {
            this.ammount += change;
        }

        public Ammunition(String Name, int Cost, int Weight, String Description, int Ammount) {
            super(Name, Cost, Weight, Description);
            ammount = Ammount;
        }
    }
}
