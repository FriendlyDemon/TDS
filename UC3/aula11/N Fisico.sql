/* N Logico: */

CREATE TABLE Usuario (
    ID_Usuario INT PRIMARY KEY,
    E_mail_Usuario VARCHAR(50),
    Nome_Usuario VARCHAR(50),
    DoB_Usuario DATE
);

CREATE TABLE Visualizacao (
    Tempo INT,
    Visto BOOLEAN,
    fk_Usuario_ID_Usuario INT,
    fk_Conteudo_ID_Conteudo INT
);

CREATE TABLE Lista (
    ID_Lista INT PRIMARY KEY,
    Nome_Lista VARCHAR(50),
    fk_Conteudo_ID_Conteudo INT,
    fk_Usuario_ID_Usuario INT
);

CREATE TABLE Conteudo (
    ID_Conteudo INT PRIMARY KEY,
    Nome_Conteduo VARCHAR(50),
    Duracao_Conteduo INT,
    N_Episodios INT,
    Conteudo_TIPO INT,
    fk_Conteudo_ID_Conteudo INT
);

CREATE TABLE Avaliacao (
    Valor FLOAT,
    fk_Conteudo_ID_Conteudo INT,
    fk_Usuario_ID_Usuario INT
);

CREATE TABLE Genero (
    ID_Genero INT PRIMARY KEY,
    Nome_Genero VARCHAR(50)
);

CREATE TABLE Possui (
    fk_Conteudo_ID_Conteudo INT,
    fk_Genero_ID_Genero INT
);
 
ALTER TABLE Visualizacao ADD CONSTRAINT FK_Visualizacao_1
    FOREIGN KEY (fk_Usuario_ID_Usuario)
    REFERENCES Usuario (ID_Usuario);
 
ALTER TABLE Visualizacao ADD CONSTRAINT FK_Visualizacao_2
    FOREIGN KEY (fk_Conteudo_ID_Conteudo)
    REFERENCES Conteudo (ID_Conteudo);
 
ALTER TABLE Lista ADD CONSTRAINT FK_Lista_2
    FOREIGN KEY (fk_Conteudo_ID_Conteudo)
    REFERENCES Conteudo (ID_Conteudo);
 
ALTER TABLE Lista ADD CONSTRAINT FK_Lista_3
    FOREIGN KEY (fk_Usuario_ID_Usuario)
    REFERENCES Usuario (ID_Usuario);
 
ALTER TABLE Conteudo ADD CONSTRAINT FK_Conteudo_1
    FOREIGN KEY (fk_Conteudo_ID_Conteudo)
    REFERENCES Conteudo (ID_Conteudo);
 
ALTER TABLE Avaliacao ADD CONSTRAINT FK_Avaliacao_1
    FOREIGN KEY (fk_Conteudo_ID_Conteudo)
    REFERENCES Conteudo (ID_Conteudo);
 
ALTER TABLE Avaliacao ADD CONSTRAINT FK_Avaliacao_2
    FOREIGN KEY (fk_Usuario_ID_Usuario)
    REFERENCES Usuario (ID_Usuario);
 
ALTER TABLE Possui ADD CONSTRAINT FK_Possui_1
    FOREIGN KEY (fk_Conteudo_ID_Conteudo)
    REFERENCES Conteudo (ID_Conteudo)
    ON DELETE SET NULL;
 
ALTER TABLE Possui ADD CONSTRAINT FK_Possui_2
    FOREIGN KEY (fk_Genero_ID_Genero)
    REFERENCES Genero (ID_Genero)
    ON DELETE SET NULL;