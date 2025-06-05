/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.projeto_test.dao;

import com.mycompany.projeto_test.database.DatabaseConnection;
import com.mycompany.projeto_test.model.Usuario;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 *
 * @author HENRIQUEMICHEL
 */
public class UsuarioDAO {

    public static void criarTabela() throws SQLException {
        String sql = "create table if not exists usuarios(id int primary key auto_increment, nome varchar(255) not null, email varchar(255) unique not null)";
        try (Statement stmt = DatabaseConnection.getConnection().createStatement()) {
            stmt.execute(sql);
        }
    }

    public static void inserir(Usuario usuario) throws SQLException {
        String sql = "insert into usuarios(nome,email)values(?,?)";
        String sqlSelect = "select id from usuarios where email = ?";
        try (Connection conn = DatabaseConnection.getConnection()) {
            try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
                pstmt.setString(1, usuario.getName());
                pstmt.setString(2, usuario.getEmail());
                pstmt.executeUpdate();
            }
            try (PreparedStatement pstmt = conn.prepareStatement(sqlSelect)) {
                pstmt.setString(1, usuario.getEmail());
                try (ResultSet rs = pstmt.executeQuery()) {
                    if (rs.next()) {
                        usuario.setId(rs.getInt("id"));
                    }
                }
            }
        }
    }

    public static Usuario buscarUsuario(int id) throws SQLException {
        String sql = "select * from usuarios where id =?";
        try (PreparedStatement pstmt = DatabaseConnection.getConnection().prepareStatement(sql)) {
            pstmt.setInt(1, id);
            try (ResultSet rs = pstmt.executeQuery()) {
                if (rs.next()) {
                    return new Usuario(
                            rs.getInt("id"),
                            rs.getString("nome"),
                            rs.getString("email")
                    );
                }
            }
        }
        return null;
    }

    public static int updateNome(int id, String novoNome) throws SQLException {
        String sql = "update usuarios set nome = ? where id = ?";
        try (PreparedStatement pstmt = DatabaseConnection.getConnection().prepareStatement(sql)) {
            pstmt.setString(1, novoNome);
            pstmt.setInt(2, id);
            return pstmt.executeUpdate();
        }
    }

    public static int updateEmail(int id, String novoEmail) throws SQLException {
        String sql = "update usuarios set email = ? where id = ?";
        try (PreparedStatement pstmt = DatabaseConnection.getConnection().prepareStatement(sql)) {
            pstmt.setString(1, novoEmail);
            pstmt.setInt(2, id);
            return pstmt.executeUpdate();
        }
    }

    public static boolean apagar(int id) throws SQLException {
        String sql = "delete from usuarios where id = ?";
        try (PreparedStatement pstmt = DatabaseConnection.getConnection().prepareStatement(sql)) {
            pstmt.setInt(1, id);
            return pstmt.executeUpdate() > 0;
        }
    }
}
