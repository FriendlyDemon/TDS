const rl = require('readline-sync');
function C(celsius) {
    fahrenheit = (celsius * 9 / 5 + 32)
    console.log(`${celsius} graus Celsius equivalem a ${fahrenheit} graus Fahrenheit`)
};

function F(fahrenheit) {
    celsius = ((fahrenheit - 32) * 5 / 9)
    console.log(`${fahrenheit} graus Fahrenheit equivalem a ${celsius} graus Celsius`)
}
S='sair',x=0;
while(x!=S){
x=eval(rl.question(`para converter C para F escreva C(n), F para C F(n), e para sair S
: `))
}