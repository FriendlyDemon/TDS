import mysql from "mysql2/promise";

export const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "meu_backend",
});

export async function connect() {
  try {
    const conn = await connection.getConnection();
    console.log("Conexão ao banco de dados estabelecida com sucesso!");
    conn.release();
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  }
}

connect().catch((error) => {
  console.error("Erro ao conectar ao banco de dados:", error);
});
