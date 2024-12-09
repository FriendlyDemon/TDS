select nome,quantidade from cliente,pedido
where cliente.id=pedido.fk_cliente

select nome,pedido.quantidade from produto,pedido
where produto.id=pedido.fk_produto

select nome,id_pedido,quantidade from cliente,pedido
where cliente.id=pedido.fk_cliente and quantidade>2

select cliente.nome,produto.nome,pedido.quantidade from cliente,pedido,produto
where pedido.fk_cliente=cliente.id and pedido.fk_produto=produto.id

--

select personagem.nome , item.nome from personagem, item, coletado
where personagem.id=coletado.fk_personagem and item.id=coletado.fk_item
order by personagem.nome

select cenario.nome from personagem, cenario, coletado
where personagem.nome='Legolas' and personagem.id=coletado.fk_personagem and cenario.id=coletado.fk_cenario

select item.nome from item,coletado,cenario,personagem
where personagem.nome='Gimli' and cenario.nome='Campo de Batalha de Helm' and item.id=coletado.fk_item and personagem.id=coletado.fk_personagem and item.id=coletado.fk_item

select sum(item.valor) from item,cenario,coletado
where item.id=coletado.fk_item and cenario.id=coletado.fk_cenario and cenario.nome='Floresta de Lothlórien'

--

select personagem.nome , item.nome from coletado
join item on item.id=coletado.fk_item
join personagem on personagem.id=coletado.fk_personagem
order by personagem.nome

select cenario.nome from coletado
join cenario on cenario.id=coletado.fk_cenario
join personagem on personagem.id=coletado.fk_personagem
where personagem.nome='Legolas'

select item.nome from coletado
join item on item.id=coletado.fk_item
join cenario on item.id=coletado.fk_item
join personagem on personagem.id=coletado.fk_personagem
where personagem.nome='Gimli' and cenario.nome='Campo de Batalha de Helm'

select sum(item.valor) from coletado
join item on item.id=coletado.fk_item
join cenario on cenario.id=coletado.fk_cenario
where cenario.nome='Floresta de Lothlórien'