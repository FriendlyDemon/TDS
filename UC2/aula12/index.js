function id(sp1) {
    return document.getElementById(sp1)
}
function ola() {
    id("gaz").value = "olá"
}
id("dakka").addEventListener("click", function () { ola() })