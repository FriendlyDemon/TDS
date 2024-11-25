/* DS Logico: */

CREATE TABLE Area (
    Area_ID int PRIMARY KEY,
    Area_Name varchar(50),
    Mult_HP float,
    Mult_DMG float,
    Mult_XP float,
    Mult_RES float
);

CREATE TABLE NPC (
    NPC_ID int PRIMARY KEY,
    NPC_Name varchar(50),
    NPC_HP float,
    NPC_Stamnia float,
    NPC_DMG float,
    NPC_RES_Bleed int,
    NPC_RES_Poison int,
    NPC_RES_Curse int,
    NPC_DEF_Phy float,
    NPC_DEF_Sla float,
    NPC_DEF_Pie float,
    NPC_DEF_Str float,
    NPC_DEF_Mag float,
    NPC_DEF_Fla float,
    NPC_DEF_Lig float,
    NPC_SOUL int
);

CREATE TABLE Object (
    Object_ID int PRIMARY KEY,
    Object_Name varchar(50),
    Hardness int,
    Durability int,
    Interactable boolean,
    Weight int
);

CREATE TABLE Obj_Pos (
    Obj_Pos_Area int,
    Obj_Pos_Object int,
    Obj_Position_X int,
    Obj_position_Y int,
    Obj_Position_Z int
);

CREATE TABLE Item (
    Item_ID int PRIMARY KEY,
    Item_Name varchar(50),
    Description text,
    Item_Type varchar(10)
);

CREATE TABLE Player (
    Level int,
    Name varchar(50),
    HP float,
    Stamina float,
    Equip_Load float,
    RES_Bleed int,
    RES_Poison int,
    RES_Curse int,
    DEF_Phy float,
    DEF_Sla float,
    DEF_Pie float,
    DEF_Str float,
    DEF_Mag float,
    DEF_Fla float,
    DEF_Lig float,
    SOUL int,
    Vigor int,
    Attunement int,
    Endurance int,
    Strength int,
    Dexterity int,
    Resistance int,
    Intelligence int,
    Faith int,
    Humanity int,
    Human Boolean,
    Poise int
);

CREATE TABLE Inventory (
    Item int,
    Quantity int,
    Equiped boolean
);

CREATE TABLE Weapon (
    Weapon_ID int,
    DMG int,
    Scaling_STR float,
    Scaling_DEX float,
    Scaling_INT float,
    Scaling_FAI float,
    Weapon_Weight float,
    Weapon_Type varchar(20)
);

CREATE TABLE Armor (
    Armor_ID int,
    ARM_DEF_Phy float,
    ARM_DEF_Sla float,
    ARM_DEF_Pie float,
    ARM_DEF_Str float,
    ARM_DEF_Mag float,
    ARM_DEF_Fla float,
    ARM_DEF_Lig float,
    Armor_Weight float,
    ARM_Poise float
);

CREATE TABLE Ring (
    Ring_ID int
);

CREATE TABLE Usable (
    Usable_ID int,
    Consumed boolean
);

CREATE TABLE NPC_Pos (
    NPC_Pos_Area int,
    NPC_Pos_NPC int,
    NPC_Position_X int,
    NPC_Position_Y int,
    NPC_Position_Z int
);

CREATE TABLE Drops (
    Drop_NPC int,
    Drop_Item int,
    Drop_Chance float
);
 
ALTER TABLE Obj_Pos ADD CONSTRAINT FK_Obj_Pos_1
    FOREIGN KEY (Obj_Pos_Area)
    REFERENCES Area (Area_ID);
 
ALTER TABLE Obj_Pos ADD CONSTRAINT FK_Obj_Pos_2
    FOREIGN KEY (Obj_Pos_Object)
    REFERENCES Object (Object_ID);
 
ALTER TABLE Inventory ADD CONSTRAINT FK_Inventory_1
    FOREIGN KEY (Item)
    REFERENCES Item (Item_ID);
 
ALTER TABLE Weapon ADD CONSTRAINT FK_Weapon_1
    FOREIGN KEY (Weapon_ID)
    REFERENCES Item (Item_ID);
 
ALTER TABLE Armor ADD CONSTRAINT FK_Armor_1
    FOREIGN KEY (Armor_ID)
    REFERENCES Item (Item_ID);
 
ALTER TABLE Ring ADD CONSTRAINT FK_Ring_1
    FOREIGN KEY (Ring_ID)
    REFERENCES Item (Item_ID);
 
ALTER TABLE Usable ADD CONSTRAINT FK_Usable_1
    FOREIGN KEY (Usable_ID)
    REFERENCES Item (Item_ID);
 
ALTER TABLE NPC_Pos ADD CONSTRAINT FK_NPC_Pos_1
    FOREIGN KEY (NPC_Pos_Area)
    REFERENCES Area (Area_ID);
 
ALTER TABLE NPC_Pos ADD CONSTRAINT FK_NPC_Pos_2
    FOREIGN KEY (NPC_Pos_NPC)
    REFERENCES NPC (NPC_ID);
 
ALTER TABLE Drops ADD CONSTRAINT FK_Drops_1
    FOREIGN KEY (Drop_NPC)
    REFERENCES NPC (NPC_ID);
 
ALTER TABLE Drops ADD CONSTRAINT FK_Drops_2
    FOREIGN KEY (Drop_Item)
    REFERENCES Item (Item_ID);