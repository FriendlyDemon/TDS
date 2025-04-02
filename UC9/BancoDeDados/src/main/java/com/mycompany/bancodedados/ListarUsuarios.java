package com.mycompany.bancodedados;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javax.swing.JOptionPane;

public class ListarUsuarios {

    public static String listarUsuarios(Connection conexao) {

        String textoUsuarios = "";

        String sql = "SELECT * FROM usuarios";

        try (Statement stmt = conexao.createStatement(); ResultSet rs = stmt.executeQuery(sql)) {

            textoUsuarios += "ID | Nome | Email\n";
            textoUsuarios += "----------------------\n";

            while (rs.next()) {
                int id = rs.getInt("id");
                String nome = rs.getString("nome");
                String email = rs.getString("email");
                textoUsuarios += id + " | " + nome + " | " + email + "\n";
            }
        } catch (Exception e) {
            textoUsuarios += "Erro ao listar usuários: " + e.getMessage();
        }

        return textoUsuarios;
    }

    public static Usuario buscarUsuario(Connection conexao, String email, String senha) {
        String nome = null;
        int id = 0;
        String sql = "SELECT nome,id FROM usuarios WHERE email = ? AND senha = ?";
        try (PreparedStatement pstmt = conexao.prepareStatement(sql)) {
            pstmt.setString(1, email);
            pstmt.setString(2, senha);

            ResultSet rs = pstmt.executeQuery();
            if (rs.next()) {
                nome = rs.getString("nome");
                id = rs.getInt("id");
                System.out.println("Usuario encontrado");
            } else {
                System.out.println("Usuario nao encontrado");
            }
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, e.getMessage());
        }

        return new Usuario(id, nome, email);
    }

    public static String buscarUsuarioEmail(Connection conexao, String email) {
        String nome = null;
        String sql = "SELECT nome FROM usuarios WHERE email = ?";
        try (PreparedStatement pstmt = conexao.prepareStatement(sql)) {
            pstmt.setString(1, email);

            ResultSet rs = pstmt.executeQuery();
            if (rs.next()) {
                nome = rs.getString("nome");
            }
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, e.getMessage());
            
        }
        return nome;
    }

    public static Usuario buscarUsuarioId(Connection conexao, int id) {
        String nome = null;
        String email = null;
        String sql = "SELECT nome,email FROM usuarios WHERE id = ?";
        try (PreparedStatement pstmt = conexao.prepareStatement(sql)) {
            pstmt.setInt(1, id);

            ResultSet rs = pstmt.executeQuery();
            if (rs.next()) {
                nome = rs.getString("nome");
                email = rs.getString("email");
                System.out.println("Usuario encontrado");
            } else {
                System.out.println("Usuario nao encontrado");
            }
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, e.getMessage());
        }

        return new Usuario(id, nome, email);
    }
}
