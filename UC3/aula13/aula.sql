--1
select * from cliente
--2
select distinct nome from cliente
--3
select nome, cpf from cliente
--4
select nome, cpf from cliente where genero = "feminino"
--5
select nome, cpf from cliente where genero = "feminino" order by nome desc
--6
select nome, salario from cliente where genero='masculino' and salario <'3000';
