const rl = require('readline-sync');
let num1 = rl.questionInt('insira um numero: '), num2 = rl.questionInt('insira outro numero: ');
x = num1 + num2, y = num1 * num2;
console.log(`* ${num1} + ${num2} = ${x}\n* ${num1} x ${num2} = ${y}`)