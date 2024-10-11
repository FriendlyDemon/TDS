class Sessao {
  id: number;
  filme: Filme;
  sala: Sala;
  data: Date;
}
class Reservas {
  id: number;
  cliente: Cliente;
  sessao: Sessao;
}
class Relatorio {
  id: number;
  data: Date;
  reservas: Array<Reservas>;
}
//
class Cliente {
  id: number;
  nome: string;
  endereco: object;
  historico: Array<Sessao>;
}
class Filme {
  id: number;
  nome: string;
  duracao: number;
  diretor: string;
}
enum Sala {
  "sala 1",
  "sala 2",
  "sala 3",
}
