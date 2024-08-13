rl=require('readline-sync')
function temp(C){
    F=(C*9.5)+(32)
    console.log(F)
}
temp(Number().rl.question('Insira o numero em Celsius: '))