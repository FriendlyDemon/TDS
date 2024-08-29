/* a = se o número é par,b = se o número for par, c = se o númerp for impar ou fracionado */

/* a = retornar o preço de uma fruta, b = 2.25, c = "o preço da fruta pera é R$ 5" */

/* a = criando uma variável 'numero', atribuindo a ela o valor inserido via 'prompt' e convertendo esse valor para number,
b = [numero=10 => "Esse número passou no teste \n Essa mensagem é secreta!!!", numero=-10 => "undefined"]
c = console.log(mensagem) deveria estar dentro do if */

/* let idade=Number(prompt('Qual a sua idade?')); if(idade>=18){console.log('Você pode dirigir')} else {console.log('Você não pode dirigir')} */

/* turno = prompt('Qual turno você estuda?\nM: matutino\nV: Vespertino\nN: Noturno').toUpperCase()
if (turno == 'M') {
    console.log('Bom Dia!')
} else if (turno == 'V') {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}

switch (turno) {
    case 'M':
        console.log('Bom Dia!')
        break;
    case 'V':
        console.log('Boa Tarde!')
        break;
    case 'N':
        console.log('Boa Noite!')
        break;
    }*/

let genero=prompt('Qual o gênero do filme?')
if (genero=='fantasia') {
let ingresso=prompt('Quanto é o ingresso do filme?')
    if (ingresso<15){
        let lanchinho=prompt('Qual lanche vai querer comprar?')
        console.log('Bom filme!\nE aproveite o seu '+lanchinho)
    }else{
        console.log('Escolha outro filme :(')
    }
}else{
    console.log('Escolha outro filme :(')
}