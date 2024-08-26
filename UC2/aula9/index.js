/* exe1
array
//undefined
array=null
//null
array=[3,4,5,6,7,8,9,10,11,12,13]
//array.length == 11
i=0
//array[i] == 3
array[i+1]=19
//4=>19
valor=array=i+6
//valor == 9
*/
/* exe2
frase=prompt('Digite uma frase')
// frase='Subi num ônibus em Marrocos
console.log(frase.toUpperCase().replace('A','I'), frase.length)
// SUBI NUM ÔNIBUS EM MIRROCOS 27
*/
/* exe3
x=prompt('qual seu nome')
y=prompt('qual seu e-mail')
console.log(`o e-mail ${y} foi cadastrado com sucesso. Seja bem-vinda(o), ${x}!`)
*/
/* exe4
let ar=['comida1','comida2','comida3','comida4','comida5']
// a
console.log(ar)
//b
console.log('Essas são as minhas comidas preferidas: ')
for(x=0;x<ar.length;x++){
    console.log(ar[x])
}
//c
ar[1]=prompt('Qual a sua comida preferida?')
console.log(...ar)
*/
/* exe5
let listaDeTarefas=[]
listaDeTarefas[0]=prompt('insira a primeira tarefa')
listaDeTarefas[1]=prompt('insira a segunda tarefa')
listaDeTarefas[2]=prompt('insira a terceira tarefa')
console.log(listaDeTarefas)

listaDeTarefas.splice(Number(prompt('insira o indice da tarefa que já completou')),0)
console.log(listaDeTarefas)
*/
