import * as rl from "readline-sync";
let Biblioteca: {
  livros: Array<Livro>;
  revistas: Array<Revista>;
  usuarios: Array<Usuario>;
  emprestimos: Array<Emprestimo>;
} = {
  livros: [],
  revistas: [],
  usuarios: [],
  emprestimos: [],
};
abstract class ItensBiblioteca {
  titulo: string;
  dataPublicacao: Date;
  constructor(titulo: string, dataPublicacao: Date) {
    this.titulo = titulo;
    this.dataPublicacao = dataPublicacao;
  }
}

class Livro extends ItensBiblioteca {
  autor: string;
  isbn: number;
  paginas: number;
  genero: string;
  obterInformacoes() {
    console.log(
      this.titulo +
        "\n" +
        this.dataPublicacao +
        "\n" +
        this.autor +
        "\n" +
        this.isbn +
        "\n" +
        this.paginas +
        "\n" +
        this.genero
    );
  }
  constructor(
    titulo: string,
    dataPublicacao: Date,
    autor: string,
    isbn: number,
    paginas: number,
    genero: string
  ) {
    super(titulo, dataPublicacao);
    this.autor = autor;
    this.isbn = isbn;
    this.paginas = paginas;
    this.genero = genero;
  }
}

class Revista extends ItensBiblioteca {
  editor: string;
  issn: number;
  nEdicoes: number;
  obterInformacoes() {
    console.log(
      this.titulo +
        "\n" +
        this.dataPublicacao +
        "\n" +
        this.editor +
        "\n" +
        this.issn +
        "\n" +
        this.nEdicoes
    );
  }
  constructor(
    titulo: string,
    dataPublicacao: Date,
    editor: string,
    issn: number,
    nEdicoes: number
  ) {
    super(titulo, dataPublicacao);
    this.editor = editor;
    this.issn = issn;
    this.nEdicoes = nEdicoes;
  }
}

class Usuario {
  nome: string;
  matricula: string;
  tipo: tipo;
  listaEmprestimos: [Emprestimo];
  obterInformacoes() {
    console.log(this.nome + "\n" + this.matricula + "\n" + this.tipo);
  }
  constructor(nome: string, matricula: string, tipo: tipo) {
    this.nome = nome;
    this.matricula = matricula;
    this.tipo = tipo;
  }
}

class Emprestimo {
  dataEmprestimo: Date;
  dataDevolução: Date;
  usuario: Usuario;
  item: ItensBiblioteca;
  obterInformacoes() {
    console.log(
      this.dataEmprestimo +
        "\n" +
        this.dataDevolução +
        "\n" +
        this.usuario +
        "\n" +
        this.item
    );
  }
  constructor(
    data1: Date,
    data2: Date,
    usuario: Usuario,
    item: ItensBiblioteca
  ) {
    this.dataEmprestimo = data1;
    this.dataDevolução = data2;
    this.usuario = usuario;
    this.item = item;
  }
}

let book = new Livro(
  "titulo",
  new Date("2024-1-15"),
  "autor",
  112233,
  200,
  "genero"
);
book.obterInformacoes();
enum tipo {
  "aluno",
  "professor",
  "funcionario",
}

const lista = ["livros", "revistas", "usuarios", "emprestimos"];
const acao = ["criar", "listar", "apagar"];
let final = [
  [
    function () {
      let foo = rl
        .question(
          "preencha os dados do livro separados por virgula\n(titulo, data de publicacao, autor, ISBN, numero de paginas e genero) >"
        )
        .split(",");
      return new Livro(
        foo[0],
        new Date(foo[1]),
        foo[2],
        Number(foo[3]),
        Number(foo[4]),
        foo[5]
      );
    },
    Object.keys(Biblioteca.livros),
    function () {
      Biblioteca.livros.splice(
        Biblioteca.livros.indexOf(
          eval(rl.question("Qual livro gostaria de apagar? "))
        ),
        1
      );
    },
  ],
  [
    function () {
      let foo = rl
        .question(
          "preencha os dados da revista separados por virgula\n(titulo, data de publicacao, editor, ISSN e numero de edicoes) >"
        )
        .split(",");
      return new Revista(
        foo[0],
        new Date(foo[1]),
        foo[2],
        Number(foo[3]),
        Number(foo[4])
      );
    },
    Object.keys(Biblioteca.revistas),
    function () {
      Biblioteca.revistas.splice(
        Biblioteca.revistas.indexOf(
          eval(rl.question("Qual revista gostaria de apagar? "))
        ),
        1
      );
    },
  ],
  [
    function () {
      let foo = rl
        .question(
          "preencha os dados do usuario separados por virgula\n(nome, matricula, tipo(0=aluno, 1=prefessor ou 2=funcionario)) >"
        )
        .split(",");
      return new Usuario(foo[0], foo[1], tipo[foo[2]]);
    },
    Object.keys(Biblioteca.usuarios),
    function () {
      Biblioteca.usuarios.splice(
        Biblioteca.usuarios.indexOf(
          eval(rl.question("Qual usuario gostaria de apagar? "))
        ),
        1
      );
    },
  ],
  [
    function () {
      let foo = rl
        .question(
          "preencha os dados do emprestimo separados por virgula\n(data de emprestimo, data de devolucao, usuario e item retirado) >"
        )
        .split(",");
      return new Emprestimo(
        new Date(foo[0]),
        new Date(foo[1]),
        eval(foo[2]),
        eval(foo[3])
      );
    },
    Object.keys(Biblioteca.emprestimos),
    function () {
      Biblioteca.emprestimos.splice(
        Biblioteca.emprestimos.indexOf(
          eval(rl.question("Qual emprestimo gostaria de apagar? "))
        ),
        1
      );
    },
  ],
];
let x = rl.keyInSelect(lista, "com qual entrada gostaria de interagir? ");
let y = rl.keyInSelect(acao, `o que gostaria de fazer com ${lista[x]}? `);
final[x][y];
