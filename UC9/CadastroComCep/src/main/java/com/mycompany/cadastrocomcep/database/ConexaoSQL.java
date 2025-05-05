/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.cadastrocomcep.database;

import io.github.cdimascio.dotenv.Dotenv;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

/**
 *
 * @author HENRIQUEMICHEL
 */
public class ConexaoSQL {

    private static final Dotenv dotenv = Dotenv.load();

    private static Connection connection;

    private static final String URL = dotenv.get("DB_URL");
    private static final String DB_USER = dotenv.get("DB_USER");
    private static final String DB_PASSWORD = dotenv.get("DB_PASSWORD");

    public static Connection conectar() {
        try {

            if (connection == null || connection.isClosed()) {
                connection = DriverManager.getConnection(URL, DB_USER, DB_PASSWORD);
                criarTabelaUse();
                criarTabelaEnd();
            }
        } catch (SQLException error) {
            System.out.println("Erro na conexão com o banco de dados\n" + error.getMessage());
        }
        return connection;
    }

    private static void criarTabelaUse() {
        String sql = "CREATE TABLE IF NOT EXISTS usuarios ("
                + "id INT AUTO_INCREMENT PRIMARY KEY, "
                + "nome VARCHAR(255) NOT NULL, "
                + "email VARCHAR(255) NOT NULL UNIQUE, "
                + "senha VARCHAR(255) NOT NULL, "
                + "cep INT NOT NULL)";
        try (Statement stmt = connection.createStatement()) {
            stmt.execute(sql);
        } catch (SQLException e) {
            System.out.println("Erro ao criar a tabela" + e.getMessage());
        }
    }

    private static void criarTabelaEnd() {
        String sql = "CREATE TABLE IF NOT EXISTS endereco ("
                + "cep INT PRIMARY KEY, "
                + "rua VARCHAR(255) NOT NULL, "
                + "bairro VARCHAR(255), "
                + "cidade VARCHAR(255) NOT NULL, "
                + "estado VARCHAR(100) NOT NULL)";
        try (Statement stmt = connection.createStatement()) {
            stmt.execute(sql);
        } catch (SQLException e) {
            System.out.println("Erro ao criar a tabela" + e.getMessage());
        }
    }
}
