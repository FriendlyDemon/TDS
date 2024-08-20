//op aritméticos
var a = 10, b = 20, c = a + b, d = a - b, e = a / b, f = 11 % 4, g = a * b, x = 5, y = 3;
h = Math.pow(x, y);
console.log(` ${a} + ${b} = ${c}`)
console.log(` ${a} - ${b} = ${d}`)
console.log(` ${a} / ${b} = ${e}`)
console.log(` O resto de 11/4 é ${f}`)
console.log(` ${a} x ${b} = ${g}`)
console.log(` ${x} ^ ${y} = ${h}`)
exerc = [3 + 4, (3 * 5) / 2, -(4 - 5), 234 % 5]
function arr() {
    document.getElementById("resultado").innerHTML =
    document.getElementById("num").value * 9 / 5 + 32 +"Fº"
};
document.getElementById("heading").innerHTML = "teste de html";
document.getElementById("test").innerHTML =
    ` ${a} + ${b} = ${c}` + '<br>' +
    ` ${a} - ${b} = ${d}` + '<br>' +
    ` ${a} / ${b} = ${e}` + '<br>' +
    ` O resto de 11/4 é ${f}` + '<br>' +
    ` ${a} x ${b} = ${g}` + '<br>' +
    ` ${x} ^ ${y} = ${h}` + '<br>' +
    3 + 4 + '<br>' +
    (3 * 5) / 2 + '<br>' +
    -(4 - 5) + '<br>' +
    234 % 5;
p1 = 5, p2 = 3;
p1 == p2;
p1 != p2;
p1 > p2;
p1 < p2;
document.getElementById("btn").onclick = function () { arr() };