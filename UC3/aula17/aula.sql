create or replace view produtos_categorias as
select pr.nome as produto, ca.nome as categoria from produto pr
left join categoria ca on pr.categoria=ca.id

create or replace view pedidos_feitos as
select cl.nome as cliente, pr.nome as produto, pe.quantidade as quantidade from cliente cl
right join pedido pe on pe.fk_cliente=cl.id
left join produto pr on pr.id=pe.fk_produto

create or replace view usuarios_cliente as
select cl.nome as cliente, pr.nome as produto, pe.id as pedido from cliente cl
join pedido pe on pe.fk_cliente=cl.id
join produto pr on pr.id=pe.fk_produto
order by cliente

--

create index on cliente(id)

create index on produto hash(id)

create index on pedido(id)

--

