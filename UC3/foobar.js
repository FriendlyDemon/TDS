//E-mail: assunto: [BD24-2T]Nome-sobrenome?-Motivo
/* avaliações
a 12/11
b 27/01
c all
d all
e(recuperação) 3/2
*sem feriados*
*/
// https://drive.google.com/drive/folders/1JvxMo0FNwKd3DfXHz-hu1_MP4lEKr767

// https://www.sqlitetutorial.net/

// classe = n de conecções
// grau = > (n,n)

//dbeaver

// '::' para retipar um valor em sql ex: select salario::numeric from cliente;

/* create view
create or replace view produtos_comprados as
select PE.id as pedido, CL.nome as cliente, PR.nome as produto, PE.quantidade as quantidade, PE.quantidade*preco as fatura
from pedido PE
join produto PR on PE.fk_produto=PR.id
join cliente CL on CL.id=PE.fk_cliente
*/

/* call view
select * from produtos_comprados
*/

/* create index
create index on tabela (coluna)
*/

/*
select * from crime_scene_report
where type='murder' and date=20180115

https://mystery.knightlab.com/

Miranda Priestly and Jeremy Bowers
*/
