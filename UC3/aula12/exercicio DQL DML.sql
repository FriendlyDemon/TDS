insert into cliente (id, nome, sobrenome) values (4,'Allan','Howard'),(5,'Noel','Appleby'),(6,'Sean','Astin'),(7,'Sala','Baker'),(8,'Sean','Bean'),(9,'Billy','Boyd'),(10,'Andy','Serkis'),(11,'Marton','Csokas'),(12,'Viggo','Mortensen'),(13,'Orlando','Bloom'),(14,'Megan','Edwards');

insert into produto (id, nome, descricao, preco, quantidade) values (3,'Tênis','Tênis de corrida Runfalcon 5 adidas',399.99,50),(4,'Fralda','Fralda Pampers ajuste total 78 unidades',99.99,985),(5,'Creatina monohidratada','Creatina Monohidratada 1Kg 100% Pura Soldiers Nutrition Sem sabor',151.13,1457),(6,'Lavadora alta preção','Lavadora De Alta Pressão Kärcher Compacta 1500psi 1400w Cor Amarelo 110V',299.99,986),(7,'Kit 5 camisas','Kit Com 5 Camisetas Masculinas Básicas Hering',129.99,931),(8,'Balança','Omron HBF-514 balança de bioimpedância cor cinza',469.99,333),(9,'Cafeteira','Cafeteira Britânia Cp15 Vidro Preto Com Inox 127V',79.90,607),(10,'Piscina inflavel','Piscina splash fun redonda inflável 2400 litros Mor',189.99,118),(11,'Nebulizador','Nebulizador e Inalador Bivolt Super Flow Compact DC1 G-Tech',79.90,192),(12,'Smart TV','Smart TV 43” LED FULL HD 2 HDMI WI-FI Google Assistente Chromecast Bluetooth 43S5400A TCL 110V/220V',1468,20),(13,'Smart Phone','Samsung Galaxy A15 Dual SIM 5G 256GB Azul-escuro 8GB RAM',1059.99,454),(14,'Notebook','Notebook Dell Inspiron I15-i120k-a25p I5 8gb 512gb 15.6 W11',2999.99,29);

CREATE PROCEDURE criar_pedido(in id_cliente int, in id_produto int, in quantidade_produto)
BEGIN ATOMIC
 UPDATE produto SET quantidade = (produto.quantidade - criar_pedido.quantidade_produto)
   WHERE (produto.id = criar_pedido.id_produto);
 INSERT INTO pedido (fk_cliente, fk_produto, quantidade)
   VALUES (criar_pedido.id_cliente, criar_pedido.id_produto, criar_pedido.quantidade_produto);
END;
--
call criar_pedido(10,14,2);
call criar_pedido(11,12,1);
call criar_pedido(1,1,1);
call criar_pedido(5,4,1);
call criar_pedido(14,11,3);
call criar_pedido(8,7,1);
call criar_pedido(6,5,1);
call criar_pedido(4,4,1);
call criar_pedido(12,12,1);
call criar_pedido(2,6,1);
call criar_pedido(13,14,1);
call criar_pedido(9,9,1);

delete from pedido where id_pedido =1;
delete from pedido where id_pedido =3;
--
update cliente set genero = 'masculino',salario=2000,cpf=11111111111 where id =1;
update cliente set genero = 'masculino',salario=2200,cpf=11111111112 where id =2;
update cliente set genero = 'feminino',salario=1800,cpf=11111111113 where id =3;
update cliente set genero = 'masculino',salario=1750,cpf=11111111114 where id =4;
update cliente set genero = 'masculino',salario=2500,cpf=11111111115 where id =5;
update cliente set genero = 'masculino',salario=2549,cpf=11111111116 where id =6;
update cliente set genero = 'feminino',salario=3200,cpf=11111111117 where id =7;
update cliente set genero = 'masculino',salario=3500,cpf=11111111118 where id =8;
update cliente set genero = 'masculino',salario=2000,cpf=11111111119 where id =9;
update cliente set genero = 'masculino',salario=2100,cpf=11111111120 where id =10;
update cliente set genero = 'masculino',salario=2100,cpf=11111111121 where id =11;
update cliente set genero = 'masculino',salario=2350,cpf=11111111122 where id =12;
update cliente set genero = 'masculino',salario=2875,cpf=11111111123 where id =13;
update cliente set genero = 'feminino',salario=4000,cpf=11111111124 where id =14;