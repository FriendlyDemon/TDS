import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT: number = Number(process.env.PORT) || 3000;

app.use(express.json());

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Rota não encontrada" });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
