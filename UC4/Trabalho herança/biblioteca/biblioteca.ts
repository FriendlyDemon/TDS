import * as rl from "readline-sync";
let Biblioteca= {
  livros:[]
}
class ItensBiblioteca {
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
  tipo: string;
  listaEmprestimos: [Emprestimos];
  obterInformacoes() {
    console.log(this.nome + "\n" + this.matricula + "\n" + this.tipo);
  }
}

class Emprestimos {
  dataEmprestimo: Date;
  dataDevolução: Date;
  usuario: Usuario;
  item: Livro | Revista;
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
}

let book = new Livro("titulo", new Date(), "autor", 112233, 200, "genero");
book.obterInformacoes();
const lista = ["livros", "revistas", "usuarios", "emprestimos"];
const acao = ["criar", "listar", "apagar"];
let final = [
  [
    function () {
      let foo = rl
        .question(
          "preencha os dados do livro separados por virgula\n (titulo, data de publicacao, autor, ISBN, numero de paginas e genero) >"
        )
        .split(",");
      return new Livro(foo[0],new Date(foo[1]),foo[2],Number(foo[3]),Number(foo[4]),foo[5]);
    },Biblioteca.livros
  ],
  [],
  [],
  [],
];
let x = rl.keyInSelect(lista, "com qual entrada gostaria de interagir? ");
let y = rl.keyInSelect(acao, `o que gostaria de fazer com ${lista[x]}? `);
final[x][y];
