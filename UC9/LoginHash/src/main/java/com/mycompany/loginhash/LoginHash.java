/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */
package com.mycompany.loginhash;

import com.mycompany.loginhash.dao.UsuarioDAO;
import com.mycompany.loginhash.database.ConexaoSQL;
import com.mycompany.loginhash.model.Usuario;

/**
 *
 * @author HENRIQUEMICHEL
 */
public class LoginHash {

    public static void main(String[] args) {
        ConexaoSQL.conectar();
        Usuario meuUsuario = new Usuario("usuario@email.com", "112234");
//        if (UsuarioDAO.registrarUsuario(meuUsuario)) {
//            System.out.println("usuario registrado com sucesso");
//        }
        if (UsuarioDAO.validarLogin(meuUsuario)) {
            System.out.println("senha correta");
        }
    }
}
