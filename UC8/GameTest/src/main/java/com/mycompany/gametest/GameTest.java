package com.mycompany.gametest;

public class GameTest {

    public static void main(String[] args) {
        Items.Weapon sword;
        sword = new Items.Weapon("longsword", new Types.WeaponTags[]{Types.WeaponTags.slashing, Types.WeaponTags.martial, Types.WeaponTags.melee, Types.WeaponTags.versatile}, 500, 20, "nah", new Items.Damage(1, 8, Types.DamageTypes.slashing, 10), 0, 0);
        System.out.println(sword.getTags());
        sword.removeTags(new Types.WeaponTags[]{Types.WeaponTags.slashing, Types.WeaponTags.martial});
        System.out.println(sword.getTags());
    }
}
