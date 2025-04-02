package com.mycompany.bancodedados;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class AtualizarUsuario {

    public static String atualizarNomeUsuario(Connection conexao, int id, String novoNome) {

        String sql = "UPDATE usuarios SET nome = ? WHERE id = ?";

        try (PreparedStatement pstmt = conexao.prepareStatement(sql)) {

            pstmt.setString(1, novoNome);

            pstmt.setInt(2, id);

            int rowsUpdated = pstmt.executeUpdate();
            if (rowsUpdated > 0) {
                System.out.println("Usuário atualizado com sucesso!");
                return "Nome alterado com sucesso";
            } else {
                System.out.println("Nenhum usuário encontrado com o ID fornecido.");
                return "Não foi encontrado usuario com id fornecido";
            }
        } catch (SQLException e) {
            System.out.println("Erro ao conectar ou executar SQL: " + e.getMessage());
            return e.getMessage();
        } catch (Exception e) {
            System.out.println("Erro ao atualizar usuário: " + e.getMessage());
            return e.getMessage();
        }
    }

    public static String atualizarEmailUsuario(Connection conexao, int id, String novoEmail) {

        String sql = "UPDATE usuarios SET email = ? WHERE id = ?";

        try (PreparedStatement pstmt = conexao.prepareStatement(sql)) {

            pstmt.setString(1, novoEmail);

            pstmt.setInt(2, id);

            int rowsUpdated = pstmt.executeUpdate();
            if (rowsUpdated > 0) {
                System.out.println("Usuário atualizado com sucesso!");
                return "Email alterado com sucesso";
            } else {
                System.out.println("Nenhum usuário encontrado com o ID fornecido.");
                return "Não foi encontrado usuario com id fornecido";
            }
        } catch (SQLException e) {
            System.out.println("Erro ao conectar ou executar SQL: " + e.getMessage());
            return e.getMessage();
        } catch (Exception e) {
            System.out.println("Erro ao atualizar usuário: " + e.getMessage());
            return e.getMessage();
        }
    }

    public static String atualizarSenhaUsuario(Connection conexao, int id, String novaSenha) {

        String sql = "UPDATE usuarios SET senha = ? WHERE id = ?";

        try (PreparedStatement pstmt = conexao.prepareStatement(sql)) {

            pstmt.setString(1, novaSenha);

            pstmt.setInt(2, id);

            int rowsUpdated = pstmt.executeUpdate();
            if (rowsUpdated > 0) {
                System.out.println("Usuário atualizado com sucesso!");
                return "Senha alterada com sucesso";
            } else {
                System.out.println("Nenhum usuário encontrado com o ID fornecido.");
                return "Não foi encontrado usuario com id fornecido";
            }
        } catch (SQLException e) {
            System.out.println("Erro ao conectar ou executar SQL: " + e.getMessage());
            return e.getMessage();
        } catch (Exception e) {
            System.out.println("Erro ao atualizar usuário: " + e.getMessage());
            return e.getMessage();
        }
    }

}
