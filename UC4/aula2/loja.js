var tamanho;
(function (tamanho) {
    tamanho[tamanho["p"] = 0] = "p";
    tamanho[tamanho["m"] = 1] = "m";
    tamanho[tamanho["g"] = 2] = "g";
    tamanho[tamanho["gg"] = 3] = "gg";
})(tamanho || (tamanho = {}));
var Peca = /** @class */ (function () {
    function Peca(codigo, nome, tamanho, cor, preco, qEstoque) {
        this.codigo = codigo;
        this.nome = nome;
        this.tamanho = tamanho;
        this.cor = cor;
        this.preco = preco;
        this.qEstoque = qEstoque;
    }
    return Peca;
}());
var Cliente = /** @class */ (function () {
    function Cliente() {
        this.comprar = function () { };
        this.historico = function () { };
        this.atDados = function () { };
    }
    return Cliente;
}());
var Vendas = /** @class */ (function () {
    function Vendas() {
        this.regVenda = function () { };
        this.totalCompra = function () { };
        this.faturamento = function () { };
    }
    return Vendas;
}());
