const rl=require('readline-sync')
// contador
for(i=0;i<=10;i++){
    console.log(i)
}
// contador par
for(i=0;i<=10;i+=2){
    console.log(i)
}
// tabuada
let x=rl.questionInt('insira um numero: ')
for(i=1;i<=10;i++){
    console.log(i*x)
}
// soma de números
let y=[]
for (let i=0;i<5;i++){
    y[i]=rl.questionInt(`insira o ${i+1}o numero: `)
}
console.log(y.reduce((y1,y2)=>y1+y2))
// média de notas
let z=[]
for(i=0;i<5;i++){
    z[i]=rl.questionInt(`insira a ${i+1}a nota: `)
}
console.log('a média das 5 notas é '+z.reduce((z1,z2)=>z1+z2)/5)
// forca.js
// ???
// atm.js
// ordenação
const numeros = [57, 9, 2, 49, 5, 41, 3, 54, 6, 21, 95], hue = []
//numeros=rl.question()
while (numeros.length > 0) {
    hue.push(Math.min(...numeros)),
    numeros.splice((numeros.indexOf(Math.min(...numeros))),1)
}
console.log(hue)