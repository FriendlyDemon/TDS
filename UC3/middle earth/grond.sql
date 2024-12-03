create table
    personagem (id serial primary key, nome varchar(50));

create table
    cenario (id serial primary key, nome varchar(50));

create table
    item (
        id serial primary key,
        nome varchar(50),
        tipo varchar(50)
    );

create table
    coletado (
        fk_personagem int,
        fk_item int,
        fk_cenario int,
        foreign key (fk_personagem) references personagem (id),
        foreign key (fk_item) references item (id),
        foreign key (fk_cenario) references cenario (id)
    );

--

insert into personagem(nome) values ('Aragorn'),('Legolas'),('Gimli'),('Gandalf'),('Tom Bombadil'),('Galadriel'),('Shelob');

insert into cenario(nome) values ('Floresta de Lothlórien'),('Montanhas de Moria'),('Campo de Batalha de Helm'),('Isengard'),('Portões de Mordor'),('Valinor'),('Condado');

insert into item(nome, tipo) values ('Espada Elfica','espada'),('Arco Longo','arco'),('Machado de Batalha','machado'),('Varinha Mágica','focus'),('Anduril','espada'),('Lamina Morgul','faca'),('Ferroada','espada'),('O Anél','anél');

insert into coletado(fk_personagem,fk_item,fk_cenario) values (1,1,1),(2,2,2),(3,3,3),(4,4,1),(1,3,3),(2,1,1),(5,8,3),(7,7,5),(6,1,1);