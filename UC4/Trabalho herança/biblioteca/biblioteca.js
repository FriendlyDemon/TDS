"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var rl = require("readline-sync");
var Biblioteca = {
    livros: [],
    revistas: [],
    usuarios: [],
    emprestimos: [],
};
var ItensBiblioteca = /** @class */ (function () {
    function ItensBiblioteca(titulo, dataPublicacao) {
        this.titulo = titulo;
        this.dataPublicacao = dataPublicacao;
    }
    return ItensBiblioteca;
}());
var Livro = /** @class */ (function (_super) {
    __extends(Livro, _super);
    function Livro(titulo, dataPublicacao, autor, isbn, paginas, genero) {
        var _this = _super.call(this, titulo, dataPublicacao) || this;
        _this.autor = autor;
        _this.isbn = isbn;
        _this.paginas = paginas;
        _this.genero = genero;
        return _this;
    }
    Livro.prototype.obterInformacoes = function () {
        console.log(this.titulo +
            "\n" +
            this.dataPublicacao +
            "\n" +
            this.autor +
            "\n" +
            this.isbn +
            "\n" +
            this.paginas +
            "\n" +
            this.genero);
    };
    return Livro;
}(ItensBiblioteca));
var Revista = /** @class */ (function (_super) {
    __extends(Revista, _super);
    function Revista(titulo, dataPublicacao, editor, issn, nEdicoes) {
        var _this = _super.call(this, titulo, dataPublicacao) || this;
        _this.editor = editor;
        _this.issn = issn;
        _this.nEdicoes = nEdicoes;
        return _this;
    }
    Revista.prototype.obterInformacoes = function () {
        console.log(this.titulo +
            "\n" +
            this.dataPublicacao +
            "\n" +
            this.editor +
            "\n" +
            this.issn +
            "\n" +
            this.nEdicoes);
    };
    return Revista;
}(ItensBiblioteca));
var Usuario = /** @class */ (function () {
    function Usuario(nome, matricula, tipo) {
        this.nome = nome;
        this.matricula = matricula;
        this.tipo = tipo;
    }
    Usuario.prototype.obterInformacoes = function () {
        console.log(this.nome + "\n" + this.matricula + "\n" + this.tipo);
    };
    return Usuario;
}());
var Emprestimo = /** @class */ (function () {
    function Emprestimo(data1, data2, usuario, item) {
        this.dataEmprestimo = data1;
        this.dataDevolução = data2;
        this.usuario = usuario;
        this.item = item;
    }
    Emprestimo.prototype.obterInformacoes = function () {
        console.log(this.dataEmprestimo +
            "\n" +
            this.dataDevolução +
            "\n" +
            this.usuario +
            "\n" +
            this.item);
    };
    return Emprestimo;
}());
var book = new Livro("titulo", new Date("2024-1-15"), "autor", 112233, 200, "genero");
book.obterInformacoes();
var tipo;
(function (tipo) {
    tipo[tipo["aluno"] = 0] = "aluno";
    tipo[tipo["professor"] = 1] = "professor";
    tipo[tipo["funcionario"] = 2] = "funcionario";
})(tipo || (tipo = {}));
var lista = ["livros", "revistas", "usuarios", "emprestimos"];
var acao = ["criar", "listar", "apagar"];
var final = [
    [
        function () {
            var foo = rl
                .question("preencha os dados do livro separados por virgula\n(titulo, data de publicacao, autor, ISBN, numero de paginas e genero) >")
                .split(",");
            return new Livro(foo[0], new Date(foo[1]), foo[2], Number(foo[3]), Number(foo[4]), foo[5]);
        },
        Object.keys(Biblioteca.livros),
        function () {
            Biblioteca.livros.splice(Biblioteca.livros.indexOf(eval(rl.question("Qual livro gostaria de apagar? "))), 1);
        },
    ],
    [
        function () {
            var foo = rl
                .question("preencha os dados da revista separados por virgula\n(titulo, data de publicacao, editor, ISSN e numero de edicoes) >")
                .split(",");
            return new Revista(foo[0], new Date(foo[1]), foo[2], Number(foo[3]), Number(foo[4]));
        },
        Object.keys(Biblioteca.revistas),
        function () {
            Biblioteca.revistas.splice(Biblioteca.revistas.indexOf(eval(rl.question("Qual revista gostaria de apagar? "))), 1);
        },
    ],
    [
        function () {
            var foo = rl
                .question("preencha os dados do usuario separados por virgula\n(nome, matricula, tipo(0=aluno, 1=prefessor ou 2=funcionario)) >")
                .split(",");
            return new Usuario(foo[0], foo[1], tipo[foo[2]]);
        },
        Object.keys(Biblioteca.usuarios),
        function () {
            Biblioteca.usuarios.splice(Biblioteca.usuarios.indexOf(eval(rl.question("Qual usuario gostaria de apagar? "))), 1);
        },
    ],
    [
        function () {
            var foo = rl
                .question("preencha os dados do emprestimo separados por virgula\n(data de emprestimo, data de devolucao, usuario e item retirado) >")
                .split(",");
            return new Emprestimo(new Date(foo[0]), new Date(foo[1]), eval(foo[2]), eval(foo[3]));
        },
        Object.keys(Biblioteca.emprestimos),
        function () {
            Biblioteca.emprestimos.splice(Biblioteca.emprestimos.indexOf(eval(rl.question("Qual emprestimo gostaria de apagar? "))), 1);
        },
    ],
];
var x = rl.keyInSelect(lista, "com qual entrada gostaria de interagir? ");
var y = rl.keyInSelect(acao, "o que gostaria de fazer com ".concat(lista[x], "? "));
final[x][y];
