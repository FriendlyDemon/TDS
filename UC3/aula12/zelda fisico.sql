/* zelda logico: */

CREATE TABLE Personagem (
    id_personagem INT PRIMARY KEY,
    nome_personagem VARCHAR(50),
    afiliacao TEXT,
    descricao_personagem TEXT,
    fk_raca_id_raca INT
);

CREATE TABLE Item (
    id_item INT PRIMARY KEY,
    nome_item VARCHAR(50),
    tipo_item VARCHAR(20),
    efeito TEXT,
    raridade VARCHAR(20)
);

CREATE TABLE Local (
    id_local INT PRIMARY KEY,
    nome_local VARCHAR(50),
    descricao_local TEXT,
    tipo_local VARCHAR(20)
);

CREATE TABLE raca (
    habilidade VARCHAR(50),
    nome_raca VARCHAR(50),
    id_raca INT PRIMARY KEY
);

CREATE TABLE inventario (
    quantidade INT,
    fk_Personagem_id_personagem INT,
    fk_Item_id_item INT
);

CREATE TABLE relacionamentos (
    fk_Personagem_id_personagem INT,
    fk_Personagem_id_personagem_ INT
);

CREATE TABLE posisao_personagem (
    fk_Local_id_local INT,
    fk_Personagem_id_personagem INT
);

CREATE TABLE posisao_item (
    fk_Local_id_local INT,
    fk_Item_id_item INT
);
 
ALTER TABLE Personagem ADD CONSTRAINT FK_Personagem_2
    FOREIGN KEY (fk_raca_id_raca)
    REFERENCES raca (id_raca)
    ON DELETE RESTRICT;
 
ALTER TABLE inventario ADD CONSTRAINT FK_inventario_1
    FOREIGN KEY (fk_Personagem_id_personagem)
    REFERENCES Personagem (id_personagem);
 
ALTER TABLE inventario ADD CONSTRAINT FK_inventario_2
    FOREIGN KEY (fk_Item_id_item)
    REFERENCES Item (id_item);
 
ALTER TABLE relacionamentos ADD CONSTRAINT FK_relacionamentos_1
    FOREIGN KEY (fk_Personagem_id_personagem)
    REFERENCES Personagem (id_personagem)
    ON DELETE CASCADE;
 
ALTER TABLE relacionamentos ADD CONSTRAINT FK_relacionamentos_2
    FOREIGN KEY (fk_Personagem_id_personagem_)
    REFERENCES Personagem (id_personagem)
    ON DELETE CASCADE;
 
ALTER TABLE posisao_personagem ADD CONSTRAINT FK_posisao_personagem_1
    FOREIGN KEY (fk_Local_id_local)
    REFERENCES Local (id_local)
    ON DELETE RESTRICT;
 
ALTER TABLE posisao_personagem ADD CONSTRAINT FK_posisao_personagem_2
    FOREIGN KEY (fk_Personagem_id_personagem)
    REFERENCES Personagem (id_personagem)
    ON DELETE SET NULL;
 
ALTER TABLE posisao_item ADD CONSTRAINT FK_posisao_item_1
    FOREIGN KEY (fk_Local_id_local)
    REFERENCES Local (id_local)
    ON DELETE SET NULL;
 
ALTER TABLE posisao_item ADD CONSTRAINT FK_posisao_item_2
    FOREIGN KEY (fk_Item_id_item)
    REFERENCES Item (id_item)
    ON DELETE SET NULL;