select produto.nome from pedido
join produto on produto.id=pedido.fk_produto
join cliente on cliente.id=pedido.fk_cliente
where cliente.id=5

select nome from produto
where categoria=1

select produto.nome from pedido
join produto on produto.id=pedido.fk_produto
join cliente on cliente.id=pedido.fk_cliente
where cliente.id=5 and produto.categoria=4

select produto.nome from pedido
join produto on produto.id=pedido.fk_produto
join cliente on cliente.id=pedido.fk_cliente
where cliente.id=5

--

select count(produto.id),categoria.nome from categoria
left join produto on categoria.id=produto.categoria
group by categoria.id

select pedido.id as pedido,cliente.nome as cliente,pedido.quantidade from cliente
right join pedido on pedido.fk_cliente=cliente.id

select produto.nome from produto
cross join categoria
where categoria.nome='brinquedos'

select pedido.id as pedido,categoria.nome as categoria from pedido
left join produto on pedido.fk_produto=produto.id
left join categoria on produto.categoria=categoria.id