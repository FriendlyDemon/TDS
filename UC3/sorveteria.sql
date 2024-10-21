create table
    sorvetes (
        id int auto_increment primary key,
        sabor varchar(20) not null,
        tipo varchar(20)
    );

create table
    clientes (
        id int auto_increment primary key,
        nome varchar(50),
        e_mail varchar(50),
        telefone int
    );

create table
    pedidos (
        id int auto_increment primary key,
        id_cliente int,
        id_sorvete int,
        quantidade float,
        datadopedido date,
        foreign key (id_cliente) references clientes (id),
        foreign key (id_sorvete) references sorvetes (id)
    );
--
insert into
    sorvetes (sabor, tipo)
values
    ('morango', 'casquinha'),
    ('chocolate', 'cascao'),
    ('napolitano', '1L');

insert into
    clientes (nome, e_mail, telefone)
values
    ('Pedro', 'pedro@para.com', '51999999999'),
    ('João', 'joao@joestar.com', '55987987987'),
    ('Guilherme', 'guigui@tel.com', '55963963963');

insert into
    pedidos (id_cliente, id_sorvete, quantidade, datadopedido)
values
    (1, 1, 1, '2024-07-05'),
    (2, 2, 1, '2024-07-06'),
    (1, 2, 1, '2024-07-12'),
    (3, 3, 1, '2024-07-14');
--
SELECT
    count(*)
FROM
    pedidos
WHERE
    id_cliente = 2;
-- 1
SELECT
    count(*)
FROM
    pedidos
WHERE
    id_sorvete = 2;
-- 2
