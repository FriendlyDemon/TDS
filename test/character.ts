import { CreatureType } from "./types.ts";
import * as items from "./items.ts";
import fist from "./fist.ts";

function d(num: number) {
  return Math.floor(Math.random() * num) + 1;
}

class Character {
  name: string;
  creatureType: CreatureType;
  race: string;
  classe?: string;
  charStatus: [
    strength: number,
    dexterity: number,
    constitution: number,
    inteligence: number,
    wisdom: number,
    charisma: number
  ];
  level: number;
  healthMax: number;
  gold: number;
  equipment: Equip;
  inventory: Inventory;
  spells?: SpellList;

  attack(weapon: "main" | "off" | "2h") {
    let ref: items.Weapon;
    if (weapon == "main") {
      ref = this.equipment.mainhand;
    }
    if (weapon == "off" && this.equipment.offhand instanceof items.Weapon) {
      ref = this.equipment.offhand;
    }
    if (
      weapon == "2h" &&
      (this.equipment.mainhand.tags.includes("two-handed") ||
        (this.equipment.mainhand.tags.includes("versatile") &&
          this.equipment.offhand == "empty"))
    ) {
      ref = this.equipment.mainhand;
    } else {
      return "error";
    }

    let x = 0;

    if (weapon != "2h") {x += d(ref.damage[0].DiceValue);
    } else if(weapon=='2h'&&typeof ref.damage[0].DiceValueVersatile=='number'){x += d(ref.damage[0].DiceValueVersatile)
    }

    let final = `${x} ${ref.damage[0].DamageType} damage`;

    x = 0;

    if (ref.damage.length > 1) {
      for (let i = 1, y = 1; y < ref.damage.length; ) {
        x += d(ref.damage[y][1]);
        if (ref.damage[y][0] > i) {
          i++;
        } else {
          final += `, ${x} ${ref.damage[y].DiceValue} damage`;

          y++, (i = 1), (x = 0);
        }
      }
    }
    return final;
  }

  constructor(
    name: string,
    creatureType: CreatureType,
    race: string,
    str: number,
    dex: number,
    con: number,
    int: number,
    wis: number,
    cha: number,
    level: number,
    healthMax: number,
    gold: number,
    equip: Equip,
    inventory: Inventory,
    spells?: SpellList,
    classe?: string
  ) {
    this.name = name;
    this.creatureType = creatureType;
    this.race = race;
    this.classe = classe;
    this.charStatus = [str, dex, con, int, wis, cha];
    this.level = level;
    this.healthMax = healthMax;
    this.gold = gold;
    this.equipment = equip;
    this.inventory = inventory;
    this.spells = spells;
  }
}

class Equip {
  head: items.Accessory | "empty" = "empty";
  back: items.Accessory | "empty" = "empty";
  torso: items.Armor | items.Accessory | "empty" = "empty";
  waist: items.Accessory | "empty" = "empty";
  legs: items.Accessory | "empty" = "empty";
  feet: items.Accessory | "empty" = "empty";
  hands: items.Accessory | "empty" = "empty";
  fingers: Array<items.Accessory> | "empty" = "empty";
  neck: items.Accessory | "empty" = "empty";
  mainhand: items.Weapon = fist;
  offhand: items.Equipment | "empty" = "empty";
  misc: Array<items.Accessory> | "empty" = "empty";
  constructor(
    head?: items.Accessory,
    back?: items.Accessory,
    torso?: items.Armor | items.Accessory,
    waist?: items.Accessory,
    legs?: items.Accessory,
    feet?: items.Accessory,
    hands?: items.Accessory,
    fingers?: Array<items.Accessory>,
    neck?: items.Accessory,
    mainhand?: items.Weapon,
    offhand?: items.Equipment,
    misc?: Array<items.Accessory>
  ) {
    if (head?.slot == "head") {
      this.head = head;
    }
    if (back?.slot == "back") {
      this.back = back;
    }
    if (
      torso != undefined &&
      (torso instanceof items.Armor || torso.slot == "torso")
    ) {
      this.torso = torso;
    }
    if (waist?.slot == "waist") {
      this.waist = waist;
    }
    if (legs?.slot == "legs") {
      this.legs = legs;
    }
    if (feet?.slot == "feet") {
      this.feet = feet;
    }
    if (hands?.slot == "hands") {
      this.hands = hands;
    }
    if (fingers != undefined) {
      for (let i = 0; i <= fingers.length; i++)
        if (fingers[i].slot == "finger") {
          if ((this.fingers = "empty")) {
            this.fingers = [];
          }
          this.fingers.push(fingers[i]);
        }
    }
    if (neck?.slot == "neck") {
      this.neck = neck;
    }
    if (mainhand != undefined) {
      this.mainhand = mainhand;
    }
    if (
      (offhand instanceof items.Accessory && offhand?.slot == "off-hand") ||
      (offhand instanceof items.Armor && offhand.armorType == "shield") ||
      (offhand instanceof items.Weapon && offhand.tags.includes("light"))
    ) {
      this.offhand = offhand;
    }
    if (misc != undefined) {
      this.misc = misc;
    }
  }
}

class Inventory {
  equipment: Array<string | void> = [];
  materials: Array<string | void> = [];
  consumables: Array<string | void> = [];
  misc: Array<string | void> = [];
  constructor(
    equipment?: Array<string | void>,
    materials?: Array<string | void>,
    consumables?: Array<string | void>,
    misc?: Array<string | void>
  ) {
    if (equipment != undefined) {
      this.equipment = equipment;
    }
    if (materials != undefined) {
      this.materials = materials;
    }
    if (consumables != undefined) {
      this.consumables = consumables;
    }
    if (misc != undefined) {
      this.misc = misc;
    }
  }
}

class SpellList {
  "cantrip": Array<string> = [];
  "1st level": Array<string> = [];
  "2nd level": Array<string> = [];
  "3rd level": Array<string> = [];
  "4th level": Array<string> = [];
  "5th level": Array<string> = [];
  "6th level": Array<string> = [];
  "7th level": Array<string> = [];
  "8th level": Array<string> = [];
  "9th level": Array<string> = [];
  constructor(
    l0?: Array<string>,
    l1?: Array<string>,
    l2?: Array<string>,
    l3?: Array<string>,
    l4?: Array<string>,
    l5?: Array<string>,
    l6?: Array<string>,
    l7?: Array<string>,
    l8?: Array<string>,
    l9?: Array<string>
  ) {
    if (typeof l0 == "object") {
      this.cantrip = l0;
    }
    if (typeof l1 == "object") {
      this["1st level"] = l1;
    }
    if (typeof l2 == "object") {
      this["2nd level"] = l2;
    }
    if (typeof l3 == "object") {
      this["3rd level"] = l3;
    }
    if (typeof l4 == "object") {
      this["4th level"] = l4;
    }
    if (typeof l5 == "object") {
      this["5th level"] = l5;
    }
    if (typeof l6 == "object") {
      this["6th level"] = l6;
    }
    if (typeof l7 == "object") {
      this["7th level"] = l7;
    }
    if (typeof l8 == "object") {
      this["8th level"] = l8;
    }
    if (typeof l9 == "object") {
      this["9th level"] = l9;
    }
  }
}

export { Character, Equip, Inventory, SpellList };
