import "reflect-metadata";
import express, { Application } from "express";
import router from "./routes";
import { AppDataSource } from "./config/data-source";

const app: Application = express();
const PORTA: number = 3000;

app.use(express.json());

AppDataSource.initialize()
    .then(() => {
        console.log("📦 Banco conectado com sucesso");
        app.use(router);

        app.listen(PORTA, () => {
            console.log(`🚀 Servidor rodando na porta ${PORTA}`);
        });
    })
    .catch((err) => console.error("❌ Erro ao conectar no banco:", err));