create table
    sorvetes (
        id int auto_increment primary key,
        sabor varchar(20) not null,
        tipo varchar(20)
    );
--
create table
    clientes (
        id int auto_increment primary key,
        nome varchar(50),
        e_mail varchar(50),
        telefone int
    );
--
create table
    pedidos (
        id int unique primary key,
        id_cliente int,
        id_sorvete int,
        quantidade float,
        datadopedido date,
        foreign key (id_cliente) references clientes (id),
        foreign key (id_sorvete) references sorvetes (id)
    );
--
insert into
    sorvetes (id, sabor, tipo)
values
    (101,'baunilha','casquinha'),
    (102,'baunilha','cascao'),
    (103,'baunilha','1L'),
    (104,'baunilha','sunday'),
    (201,'morango', 'casquinha'),
    (203,'morango','cascao'),
    (203,'morango','1L'),
    (204,'morango','sunday'),
    (301,'chocolate','casquinha'),
    (302,'chocolate', 'cascao'),
    (303,'chocolate','1L'),
    (304,'chocolate','sunday'),
    (403,'napolitano', '1L'),
    (503,'torta alema','1L'),
    (603,'brigadeiro','1L'),
    (703,'flocos','1L'),
    (803,'melancia','1L'),
    (901,'baunilha-chocolate','casquinha'),
    (902,'baunilha-chocolate','cascao'),
    (904,'baunilha-chocolate','sunday'),
    (1003,'pistache','1L');
--
insert into
    clientes (nome, e_mail, telefone)
values
    ('Pedro', 'pedro@para.com', '51999999999'),
    ('João', 'joao@joestar.com', '55987987987'),
    ('Guilherme', 'guigui@tel.com', '55963963963'),
    ('Fabio','fa_bio@bile.com','55654654654'),
    ('Eduardo','dudu@edu.com','60321321321'),
    ('Robute','rowboat@giddyman.com','61513153486'),
    ('Lucius','lulu@eternal.com','75646446643');
--
insert into
    pedidos (id_cliente, id_sorvete, quantidade, datadopedido)
values
    (1, 101, 1, '2024-07-05'),
    (2, 202, 1, '2024-07-06'),
    (1, 301, 1, '2024-07-12'),
    (3, 603, 1, '2024-07-14');
--
SELECT
    count(*)
FROM
    pedidos
WHERE
    id_cliente = 2;
-- 
SELECT
    count(*)
FROM
    pedidos
WHERE
    400 < id_sorvete > 300;
-- 
