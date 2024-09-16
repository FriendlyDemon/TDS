const fs = require('node:fs')
const filme1 = { diretor: ['diretor1', 'diretor2'], nome: 'filme1', ano: '2000', elenco: ['ator1', 'ator2', 'ator3','ator4'], visto: true };
// console.log(filme1.diretor,filme1['nome'],filme1.ano,filme1['elenco'],filme1.visto)
const pessoa = { nome: 'longo', idade: 'muitos', 'genero musical': 'ouvir música' }
// console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa['genero musical']}`)
const gato = { nome: 'Ulisses', idade: 4, genero: 'macho' }, henrique = { nome: 'Henrique Michel', idade: 30, genero: 'masculino', gato }
// console.log(henrique.gato)
filme1.personagens=[['personagem1','personagem2'],['personagem3'],['personagem4'],false]
/*
for(i=0;i<filme1.elenco.length;i++){
    if(filme1.personagens[i]){
    console.log(filme1.elenco[i],...filme1.personagens[i])
    }
}
filme1.elenco[0]='xuxa'
console.log(filme1)
*/
const filme2=(({diretor,...filme})=>filme)(filme1)
console.log(filme2)