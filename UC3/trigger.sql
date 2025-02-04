--LANGUAGE plpgsql
create table
    cliente (id_cliente serial primary key, salario money);

create table
    historico_salarial (
        id_historico serial primary key,
        id_cliente int,
        data_alteracao date,
        salario money,
        foreign key (id_cliente) references cliente (id_cliente)
    );

create or replace function atualizacao_salario() returns
trigger as $$ begin
insert into historico_salarial(id_cliente,data_alteracao,salario)
values (new.id_cliente,now(),new.salario);
return null; end; $$ language plpgsql;

create
or replace trigger trigger_salario after insert
or
update on cliente for each row execute function atualizacao_salario ();

insert into
    cliente (salario)
values
    (1200);

insert into
    cliente (salario)
values
    (2800);

--
update cliente
set
    salario = 1400
where
    id_cliente = 1;

insert into
    cliente  (salario)
values
    (1500);

insert into
    cliente  (salario)
values
    (2500);

insert into
    cliente  (salario)
values
    (2300);

--

create table
    produto (
        id_produto serial primary key,
        nome varchar(100),
        preco money
    );

create table
    historico_produtos (
        id serial primary key,
        produto_id int references produto (id_produto),
        preco money,
        data_alteracao date
    );

create or replace function produto_precos() returns
trigger as $$ begin
insert into historico_produto(produto_id,preco,data_alteracao)
values (new.id_produto,new.preco,now());
return null; end; $$ language plpgsql;

create or replace trigger trigger_produto
after insert or update on produto for each row execute function produto_precos ();