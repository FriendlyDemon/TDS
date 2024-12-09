select nome,quantidade from cliente,pedido
where cliente.id=pedido.fk_cliente

select nome,pedido.quantidade from produto,pedido
where produto.id=pedido.fk_produto

select nome,id_pedido,quantidade from cliente,pedido
where cliente.id=pedido.fk_cliente and quantidade>2

select cliente.nome,produto.nome,pedido.quantidade from cliente,pedido,produto
where pedido.fk_cliente=cliente.id and pedido.fk_produto=produto.id