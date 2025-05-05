/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.cadastrocomcep.dao;

import com.mycompany.cadastrocomcep.database.ConexaoSQL;
import com.mycompany.cadastrocomcep.model.Endereco;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author HENRIQUEMICHEL
 */
public class EnderecoDAO {

    public static boolean registrarEndereco(Endereco endereco) {
        String sql = "INSERT INTO endereco (cep, rua, bairro, cidade, estado) VALUES (?, ?, ?, ?, ?)";

        try (Connection conn = ConexaoSQL.conectar(); PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setString(1, endereco.getCep());
            stmt.setString(2, endereco.getRua());
            stmt.setString(3, endereco.getBairro());
            stmt.setString(4, endereco.getCidade());
            stmt.setString(5, endereco.getEstado());
            stmt.executeUpdate();
            return true;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
            return false;
        }
    }

    public static Endereco buscarEndereco(String cep) {
        String sql = "SELECT * FROM endereco WHERE cep = ?";

        try (Connection conn = ConexaoSQL.conectar(); PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setString(1, cep);
            ResultSet rs = stmt.executeQuery();

            if (rs.next()) {
                Endereco endereco = new Endereco(rs.getString("cep"), rs.getString("rua"), rs.getString("bairro"), rs.getString("cidade"), rs.getString("estado"));
                return endereco;
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return null;
    }
}
