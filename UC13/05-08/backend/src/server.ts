import express, { Application, Request, Response } from "express";

const app: Application = express(); // Tipando 'app' como 'Application'
const PORT: number = 3000; // Tipagem da porta como número

// Middleware para permitir que o Express interprete JSON
app.use(express.json());

// Rota GET para a raiz
app.get("/", (req: Request, res: Response): void => {
  res.send("🚀 Servidor TypeScript rodando!");
});

app.get("/nome", (req: Request, res: Response): void => {
  res.send("Olá, Henrique!");
});

app.get("/saudacao", (req: Request, res: Response): void => {
  res.send("Olá, jovem padawan!");
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
