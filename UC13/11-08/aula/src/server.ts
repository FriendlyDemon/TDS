import express, { Application, Request, Response, NextFunction } from "express";
import userRoutes from "./routes/UserRoutes";
import produtoRoutes from "./routes/ProdutoRoutes";

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());
app.use((req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (id && isNaN(Number(id))) {
    return res.status(400).json({ message: "ID inválido" + id });
  } else {
    next();
  }
});

app.use(userRoutes);
app.use(produtoRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Rota não encontrada" });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
