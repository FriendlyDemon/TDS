/* Spotify Log: */

CREATE TABLE Usuario (
    ID_Usuario INT PRIMARY KEY,
    Nome_Usuario VARCHAR(50),
    Premium BOOLEAN,
    E_mail VARCHAR(50)
);

CREATE TABLE Pasta (
    ID_Pasta INT PRIMARY KEY,
    Nome_Pasta VARCHAR(50),
    Genero VARCHAR(50),
    Data_Album DATE,
    Pasta_TIPO INT,
    Pasta_ID_Artista INT,
    Pasta_Tipo VARCHAR(20)
);

CREATE TABLE Artista (
    ID_Artista INT PRIMARY KEY,
    Nome_Artista VARCHAR(50),
    Bio TEXT
);

CREATE TABLE Conteudo (
    ID_Conteudo INT PRIMARY KEY,
    Nome_Conteudo VARCHAR(50),
    Duracao TIME,
    Data_Episodio DATE,
    Conteudo_TIPO INT,
    Conteudo_ID_Pasta INT,
    Conteudo_Tipo VARCHAR(20)
);

CREATE TABLE Playlist (
    ID_Playlist INT PRIMARY KEY,
    Nome_Playlist VARCHAR(50),
    Ultima_Alteracao DATE,
    Playlist_ID_Usuario INT,
    Playlist_ID_Conteudo INT
);

CREATE TABLE Participa (
    Participa_ID_Conteudo INT,
    Participa_ID_Artista INT
);
 
ALTER TABLE Pasta ADD CONSTRAINT FK_Pasta_2
    FOREIGN KEY (Pasta_ID_Artista)
    REFERENCES Artista (ID_Artista)
    ON DELETE CASCADE;
 
ALTER TABLE Conteudo ADD CONSTRAINT FK_Conteudo_2
    FOREIGN KEY (Conteudo_ID_Pasta)
    REFERENCES Pasta (ID_Pasta)
    ON DELETE CASCADE;
 
ALTER TABLE Playlist ADD CONSTRAINT FK_Playlist_2
    FOREIGN KEY (Playlist_ID_Usuario)
    REFERENCES Usuario (ID_Usuario);
 
ALTER TABLE Playlist ADD CONSTRAINT FK_Playlist_3
    FOREIGN KEY (Playlist_ID_Conteudo)
    REFERENCES Conteudo (ID_Conteudo);
 
ALTER TABLE Participa ADD CONSTRAINT FK_Participa_1
    FOREIGN KEY (Participa_ID_Conteudo)
    REFERENCES Conteudo (ID_Conteudo)
    ON DELETE SET NULL;
 
ALTER TABLE Participa ADD CONSTRAINT FK_Participa_2
    FOREIGN KEY (Participa_ID_Artista)
    REFERENCES Artista (ID_Artista)
    ON DELETE SET NULL;