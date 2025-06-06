package com.mycompany.bancodedados;

import java.sql.Connection;
import java.sql.Statement;

public class CriarTabela {

    public static void criarTabelaUsuarios(Connection conexao) {
        String sql = "CREATE TABLE IF NOT EXISTS usuarios ("
                + "id INTEGER PRIMARY KEY AUTOINCREMENT, "
                + "nome VARCHAR(255) NOT NULL, "
                + "email VARCHAR(255) NOT NULL UNIQUE, "
                + "senha VARCHAR(255) NOT NULL)";
        try (Statement stmt = conexao.createStatement()) {
            stmt.execute(sql);
            System.out.println("Tabela 'usuarios' criada ou já existente.");
        } catch (Exception e) {
            System.out.println("Erro ao criar tabela: " + e.getMessage());
        }
    }
}
