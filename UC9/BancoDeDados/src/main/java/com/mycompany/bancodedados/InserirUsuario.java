/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.bancodedados;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import javax.swing.JOptionPane;

/**
 *
 * @author HENRIQUEMICHEL
 */
public class InserirUsuario {

    public static void inserirUsuario(Connection conexao, String nome, String email, String senha) {

        String sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";

        try (PreparedStatement pstmt = conexao.prepareStatement(sql)) {

            // O método setString substitui os "?" no comando SQL pelos valores passados como parâmetros para o método.
            // O primeiro parâmetro é a posição do "?", e o segundo é o valor a ser atribuído.
            pstmt.setString(1, nome);
            pstmt.setString(2, email);
            pstmt.setString(3, senha);

            pstmt.executeUpdate();

            System.out.println("Usuário inserido com sucesso!");
            JOptionPane.showMessageDialog(null, "Usuário inserido com sucesso!");

            // O bloco catch captura qualquer exceção que ocorra durante a execução do código dentro do try.
            // Se algo der errado (por exemplo, erro de conexão ou comando SQL inválido), a mensagem de erro será exibida.
        } catch (SQLException e) {
            System.out.println("Erro ao inserir usuário: " + e.getMessage());  // Exibe a mensagem de erro.
        }
    }
}
