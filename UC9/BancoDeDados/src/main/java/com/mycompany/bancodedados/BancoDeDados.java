/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */
package com.mycompany.bancodedados;

import java.sql.Connection;

/**
 *
 * @author HENRIQUEMICHEL
 */
public class BancoDeDados {

    public static void main(String[] args) {
        Connection conexao = ConexaoSQLite.conectar();
        CriarTabela.criarTabelaUsuarios(conexao);
        //InserirUsuario.inserirUsuario(conexao, "leo", "leo@senac.com");
        //AtualizarUsuario.atualizarUsuario(conexao, 1, "Cleiton", "cleitin@gmail.com");
        //DeletarUsuario.deletarUsuario(conexao, 2);
        System.out.println(ListarUsuarios.listarUsuarios(conexao));
    }
}
