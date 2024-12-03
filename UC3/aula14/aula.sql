select count(*) from produto;

select count(*) from pedido where fk_cliente=2;

select count(*) from pedido where fk_produto=1;

select count(distinct fk_cliente) from pedido;

--

select avg(preco) from produto;

select avg(quantidade) from pedido;

select avg(count) from (select count (fk_cliente) from pedido group by fk_cliente) as clientes;

select avg(salario::numeric)::money from cliente;
