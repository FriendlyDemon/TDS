/* number as string still can be compared vs number (<=>)
let dakka = '0'
if (dakka > 0) {
    console.log('sim')
} else { console.log('não') }
*/

/* how to know if an obj has a property
let hue = {a:1,b:2,c:3}
console.log(Object.keys(hue).includes('a'))
*/

/* how to use 'readFile'
const fs = require("fs");
fs.readFile("./file.txt", function (erro, texto) {
  if (erro) {
    console.log(erro);
  } else {
    console.log(texto.toString());
  }
});
*/

// npm install --save-dev @types/node -- to use node modules in ts

// typescript constructor generator

// https://code.visualstudio.com/api/get-started/your-first-extension
