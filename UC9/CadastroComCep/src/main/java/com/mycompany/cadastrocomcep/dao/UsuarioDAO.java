/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.cadastrocomcep.dao;

import com.mycompany.cadastrocomcep.database.ConexaoSQL;
import com.mycompany.cadastrocomcep.model.Usuario;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import org.mindrot.jbcrypt.BCrypt;

/**
 *
 * @author HENRIQUEMICHEL
 */
public class UsuarioDAO {

    public static boolean registrarUsuario(Usuario usuario) {
        String sql = "INSERT INTO usuarios (nome, email, senha, cep, numero) VALUES (?, ?, ?, ?, ?)";
        String senhaHash = BCrypt.hashpw(usuario.getSenha(), BCrypt.gensalt());

        try (Connection conn = ConexaoSQL.conectar(); PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setString(1, usuario.getNome());
            stmt.setString(2, usuario.getEmail());
            stmt.setString(3, senhaHash);
            stmt.setString(4, usuario.getCep());
            stmt.setString(5, usuario.getNumero());
            stmt.executeUpdate();
            return true;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
            return false;
        }
    }

    public static boolean validarLogin(Usuario usuario) {
        String sql = "SELECT senha FROM usuarios WHERE email = ?";

        try (Connection conn = ConexaoSQL.conectar(); PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setString(1, usuario.getEmail());
            ResultSet rs = stmt.executeQuery();

            if (rs.next()) {
                String senhaHash = rs.getString("senha");
                boolean login = BCrypt.checkpw(usuario.getSenha(), senhaHash);
                if (!login) {
                    System.out.println("senha errada");
                }
                return login;
            } else {
                System.out.println("usuario não existe");
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return false;
    }

    public static Usuario buscarUsuarioPorEmail(String email) {
        String sql = "SELECT id, nome, email, cep, numero FROM usuarios WHERE email = ?";

        try (Connection conn = ConexaoSQL.conectar(); PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setString(1, email);
            ResultSet rs = stmt.executeQuery();

            if (rs.next()) {
                Usuario usuario = new Usuario(rs.getInt("id"), rs.getString("nome"), rs.getString("email"), "", rs.getString("cep"), rs.getString("numero"));
                return usuario;
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

    public static boolean atualizarSenha(String email, String novaSenha) {
        String sql = "UPDATE usuarios SET senha = ? WHERE email = ?";
        String senhaHash = BCrypt.hashpw(novaSenha, BCrypt.gensalt());

        try (Connection conn = ConexaoSQL.conectar(); PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setString(1, senhaHash);
            stmt.setString(2, email);
            return stmt.executeUpdate() > 0;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
            return false;
        }
    }

    public static List<Usuario> listarUsuarios() {
        List<Usuario> usuarios = new ArrayList<>();
        String sql = "SELECT email, id FROM usuarios";

        try (Connection conn = ConexaoSQL.conectar(); Statement stmt = conn.createStatement()) {

            ResultSet rs = stmt.executeQuery(sql);
            while (rs.next()) {
                Usuario usuario = new Usuario(rs.getInt("id"), rs.getString("nome"), rs.getString("email"), "", "", "");
                usuarios.add(usuario);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return usuarios;
    }

    public static void excluirUsuario(int id) {
        String sql = "DELETE FROM usuario WHERE id = ?";
        try (Connection conn = ConexaoSQL.conectar(); PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, id);
            if (stmt.execute()) {
                System.out.println("Usuario deletado");
            } else {
                System.out.println("Usuario não encontrado");
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }
}
