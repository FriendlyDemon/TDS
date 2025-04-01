package com.mycompany.bancodedados;

import java.sql.Connection;

public class BancoDeDados {

    public static void main(String[] args) {
        Connection conexao = ConexaoSQLite.conectar();
        CriarTabela.criarTabelaUsuarios(conexao);
        //InserirUsuario.inserirUsuario(conexao, "leo", "leo@senac.com", "hue");
        //AtualizarUsuario.atualizarUsuario(conexao, 1, "Cleiton", "cleitin@gmail.com");
        //DeletarUsuario.deletarUsuario(conexao, 2);
        //System.out.println(ListarUsuarios.listarUsuarios(conexao));
        new TelaLogin(conexao).setVisible(true);
    }
}
