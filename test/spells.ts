import { SpellTags, DamageTypes, MagicSchool, Range } from "./types.ts";

export class Spell {
  name: string;
  slot: number;
  school: MagicSchool;
  range: Range;
  area?: number;
  duration: number;
  dice?: Array<[number, number, DamageTypes, DamageTypes?]>;
  tags: Array<SpellTags>;
  constructor(
    name: string,
    slot: number,
    school: MagicSchool,
    range: Range,
    area: number,
    duration: number,
    tags: Array<SpellTags>,
    dice?: Array<[number, number, DamageTypes, DamageTypes?]>
  ) {
    this.name = name;
    this.slot = slot;
    this.school = school;
    this.range = range;
    if (area > 0) {
      this.area = area;
    }
    if (duration > 0) {
      this.duration = duration;
    }
    this.dice = dice;
    this.tags = tags;
  }
}
