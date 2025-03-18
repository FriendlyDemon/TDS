package com.mycompany.gametest;

public class Types {

    static enum DamageTypes {
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
        force;
    }

    static enum WeaponTags {
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
        special;
    }

    static enum ArmorType {
        light,
        medium,
        heavy,
        shield;
    }

    static enum EquipSlot {
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

    static enum SpellTags {
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
        buff,
        save,
        attack,
        enemy,
        creature,
        object,
        terrain,
        target,
        damage;
    }

    static enum Actions {
        action,
        bonus_action,
        reaction,
        movement;
    }

    static enum MagicSchool {
        abjuration,
        conjuration,
        divination,
        enchantment,
        evocation,
        illusion,
        necromancy,
        transmutation;
    }

    static enum Range {
        self,
        touch;
    }

    static enum CreatureType {
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
