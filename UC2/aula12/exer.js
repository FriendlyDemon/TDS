const rl=require('readline-sync')
/* 1
let calc=0
let resp
while(resp!=0){
    resp=rl.questionInt('digite um numero para adicionar, digite 0 para terminar: ')
    calc+=resp
}
console.log(calc)
*/
/* 2
const numeros=[10,21,32,43,12,23,34]
for(i=0;i<numeros.length;i++){
    console.log(numeros[i])
}
console.log(Math.max(...numeros))
*/
/* 3
numeros=[1,2,3,4,5,6,7,8,9]
calc=0
for(i=0;i<numeros.length;i++){
    num=numeros[i]
if (num%2==0){calc+=num}
}
console.log(calc)
*/
/* 4
const numeros=[14,67,89,15,23]
for(let numero of numeros){
    console.log(numero)
}

let frase = ['Oi', 'sumido','tudo','bem?','Saudades']
console.log(frase.join(' '))
*/
/* 5
let numeros=[11,15,18,14,12,13],soma=0;
for (let num of numeros){
    if (num%2==0){
        soma+=num
    }
}
console.log(soma)
*/
let frase=['banana','abacaxi','laranja','melancia','uva'],va2=[' '];
for (const va1 of frase) {
    if(va1.length>va2[0].length){
        va2=[va1]
    }else if (va1.length==va2[0].length){
        va2.push(va1)}
}
console.log(va2)