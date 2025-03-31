/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */
package com.mycompany.bancodedados;

import java.sql.Connection;
import java.sql.Statement;

/**
 *
 * @author HENRIQUEMICHEL
 */
public class BancoDeDados {

    public static void main(String[] args) {
        Connection conexao = ConexaoSQLite.conectar();
        CriarTabela.criarTabelaUsuarios(conexao);
    }
}
