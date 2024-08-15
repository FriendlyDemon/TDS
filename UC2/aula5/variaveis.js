let a1 = 10;                // variavel 'a1' igual a '10'
let b1 = 10;                // variavel 'b1' igual a '10'

console.log(b1);            // imprime '10'

b1 = 5;                     // variavel 'b1' alterada para '5'
console.log(a1, b1);        // imprime '10,5'

//

let a2 = 10;                // variavel 'a2' igual a '10'
let b2 = 20;                // variavel 'b2' igual a '20'
c2 = a2;                    // valor de 'c2' se torna 'a2' ou '10'
b2 = c2;                    // valor de 'b2' alterada para 'c2' ou '10'
a2 = b2;                    // valor de 'a2' alterada para 'b2' ou '10'

console.log(a2, b2, c2);    // imprime '10, 10, 10'

//

let horasDia = prompt("Quantas horas vocês trabalha por dia?")
let pagamentoDia = prompt("Quanto você recebe por dia?")
console.log("Você recebe",horasDia/pagamentoDia,"por hora")