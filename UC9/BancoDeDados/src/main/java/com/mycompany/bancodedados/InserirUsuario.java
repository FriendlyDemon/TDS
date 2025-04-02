package com.mycompany.bancodedados;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import javax.swing.JOptionPane;

public class InserirUsuario {

    public static String inserirUsuario(Connection conexao, String nome, String email, String senha) {

        String sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";

        if (ListarUsuarios.buscarUsuarioEmail(conexao, email) == null) {
            try (PreparedStatement pstmt = conexao.prepareStatement(sql)) {

                pstmt.setString(1, nome);
                pstmt.setString(2, email);
                pstmt.setString(3, senha);

                pstmt.executeUpdate();

                JOptionPane.showMessageDialog(null, "Usuário inserido com sucesso!");
                return "Usuário inserido com sucesso!";
            } catch (SQLException e) {
                System.out.println("Erro ao inserir usuário: " + e.getMessage());
                return e.getMessage();
            }
        } else {
            return "Email já está em uso";
        }
    }
}
