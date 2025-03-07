/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.gametest;

/**
 *
 * @author Aluno
 */
public class Types {

    enum DamageTypes {
        slashing,
        piercing,
        bludgeoning,
        fire,
        cold,
        lightning,
        thunder,
        acid,
        poison,
        psychic,
        radiant,
        necrotic,
        force
    }

    enum WeaponTags {
        slashing,
        piercing,
        bludgeoning,
        fire,
        cold,
        lightning,
        thunder,
        acid,
        poison,
        psychic,
        radiant,
        necrotic,
        force,
        ammunition,
        finesse,
        reach,
        loading,
        martial,
        simple,
        versatile,
        two_handed,
        melee,
        ranged,
        thrown,
        arcane_focus,
        heavy,
        light,
        special
    }

    enum ArmorType {
        light,
        medium,
        heavy,
        shield;
    }

    enum EquipSlot {
        head,
        neck,
        torso,
        back,
        arm,
        hands,
        finger,
        waist,
        legs,
        feet,
        misc,
        off_hand;
    }

    enum SpellTags {
        slashing,
        piercing,
        bludgeoning,
        fire,
        cold,
        lightning,
        thunder,
        acid,
        poison,
        psychic,
        radiant,
        necrotic,
        force,
        DamageTypes,
        buff,
        save,
        attack,
        enemy,
        creature,
        object,
        terrain,
        target,
        damage
    }

    enum Actions {
        action,
        bonus_action,
        reaction,
        movement;
    }

    enum MagicSchool {
        abjuration,
        conjuration,
        divination,
        enchantment,
        evocation,
        illusion,
        necromancy,
        transmutation;
    }

    enum Range {
        self,
        touch
    }

    enum CreatureType {
        aberration,
        beast,
        celestial,
        construct,
        dragon,
        elemental,
        fey,
        fiend,
        giant,
        humanoid,
        mostrosity,
        ooze,
        plant,
        undead;
    }
}
