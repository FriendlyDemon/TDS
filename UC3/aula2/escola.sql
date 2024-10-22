create table
    turma (
        id int unique primary key,
        num_sala int,
        modulo char(3),
        foreign key num_sala references sala (numero)
    );

create table
    aluno (
        id int unique primary key,
        nome varchar(50),
        dataNasc date,
        id_turma int,
        foreign key id_turma references turma (id)
    );

create table
    sala (
        numero int unique primary key,
        capacidade int
    );

select turma.*, count(aluno.id_turma) as quantidade
from turma
join alunos on turma.id=alunos.id_turma
group by id;
