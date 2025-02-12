export {
  DamageTypes,
  WeaponTags,
  ArmorType,
  EquipSlot,
  SpellTags,
  Actions,
  MagicSchool,
  Range,
  CreatureType,
};

type DamageTypes =
  | "slashing"
  | "piercing"
  | "bludgeoning"
  | "fire"
  | "cold"
  | "lightning"
  | "thunder"
  | "acid"
  | "poison"
  | "psychic"
  | "radiant"
  | "necrotic"
  | "force";

type WeaponTags =
  | DamageTypes
  | "ammunition"
  | "finesse"
  | "reach"
  | "loading"
  | "martial"
  | "simple"
  | "versatile"
  | "two-handed"
  | "melee"
  | "ranged"
  | "thrown"
  | "arcane focus"
  | "heavy"
  | "light"
  | "special";

type ArmorType = "light" | "medium" | "heavy" | "shield";

type EquipSlot =
  | "head"
  | "neck"
  | "torso"
  | "back"
  | "arm"
  | "hands"
  | "finger"
  | "waist"
  | "legs"
  | "feet"
  | "misc"
  | "off-hand";

type SpellTags =
  | DamageTypes
  | "buff"
  | "save"
  | "attack"
  | "enemy"
  | "creature"
  | "object"
  | "terrain"
  | "target"
  | "damage";

type Actions = "action" | "bonus action" | "reaction" | "movement";

type MagicSchool =
  | "abjuration"
  | "conjuration"
  | "divination"
  | "enchantment"
  | "evocation"
  | "illusion"
  | "necromancy"
  | "transmutation";

type Range = number | "self" | "touch";

type CreatureType =
  | "aberration"
  | "beast"
  | "celestial"
  | "construct"
  | "dragon"
  | "elemental"
  | "fey"
  | "fiend"
  | "giant"
  | "humanoid"
  | "mostrosity"
  | "ooze"
  | "plant"
  | "undead";
