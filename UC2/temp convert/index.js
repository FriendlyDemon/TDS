function arr() {
    document.getElementById("resultado").innerHTML =
    document.getElementById("num").value * 9 / 5 + 32 +"Fº"
};
document.getElementById("btn").onclick = function () { arr() };