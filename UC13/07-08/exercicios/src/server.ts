import express, { Application, NextFunction, Request, Response } from "express";

const app: Application = express(); // Tipando 'app' como 'Application'
const PORT: number = 3000; // Tipagem da porta como número

// Middleware para permitir que o Express interprete JSON
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  const date: Date = new Date();
  // pega a hora atual

  if (date.getHours() > 6) {
    console.log("Requisição feita em: " + date);
    next();
    // se for depois das 6h deixa passar
  } else {
    res.status(403).json({ mensagem: "Acesso permitido apenas após as 6h" });
    // se for antes das 6h bloqueia
  }
});
class Comentario {
  nome: string;
  comentario: string;
  constructor(nome: string, comentario: string) {
    this.nome = nome;
    this.comentario = comentario;
  }
}
// criação da classe Comentario para armazenar os comentários

const comment: Array<Comentario> = [];
// Array para armazenar os comentários

app.get("/sobre", (req: Request, res: Response): void => {
  const eu: { nome: string; idade: number; descricao: string } = {
    nome: "Henrique",
    idade: 30,
    descricao: "cansado",
  };
  // cria objeto com minhas informações
  res.send(eu);
  // envia o objeto como resposta
});

app.post("/comentarios", (req: Request, res: Response) => {
  const { nome, comentario } = req.body;
  // pega o corpo da requisição

  const comentario1 = new Comentario(nome, comentario);
  // constroi um novo objeto comentario

  if (comentario != "") {
    comment.push(comentario1);
    res.status(201).json({
      mensagem: `Comentário de ${nome} recebido com sucesso!`,
      comentario,
    });
    // se o comentario não for vazio adiciona ao array e retorna sucesso
  } else {
    res.status(400).json({ mensagem: "Comentário não pode ser vazio!" });
    // se for vazio retorna erro
  }
});

app.delete("/comentarios/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  // pega o id dos parâmetros da requisição

  try {
    const comment_ = comment[Number(id)];
    comment.splice(Number(id), 1);
    res.status(204);
    // tenta remover o comentário do array
  } catch {
    res
      .status(404)
      .json({ mensagem: `Comentário de ID ${id} não encontrado!` });
    // se der erro retorna que não encontrou
  }
});

app.use((req: Request, res: Response): void => {
  // Retorna uma resposta com status HTTP 404 (Não Encontrado)
  // E envia um JSON com a mensagem personalizada
  res.status(404).json({ mensagem: "Rota não encontrada!" });
});

// Iniciando o servidor
app.listen(PORT, (): void => {
  console.log(`🔥 Servidor rodando em http://localhost:${PORT}`);
});
