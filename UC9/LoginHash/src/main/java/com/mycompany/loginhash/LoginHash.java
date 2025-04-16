/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */
package com.mycompany.loginhash;

import com.mycompany.loginhash.dao.UsuarioDAO;
import com.mycompany.loginhash.database.ConexaoSQL;
import com.mycompany.loginhash.model.Usuario;
import com.mycompany.loginhash.view.TelaLogin;

/**
 *
 * @author HENRIQUEMICHEL
 */
public class LoginHash {

    public static void main(String[] args) {
        ConexaoSQL.conectar();
        Usuario meuUsuario = new Usuario("usuario@email.com", "112233");
//        if (UsuarioDAO.registrarUsuario(meuUsuario)) {
//            System.out.println("usuario registrado com sucesso");
//        }
//        if (UsuarioDAO.validarLogin(meuUsuario)) {
//            System.out.println("senha correta");
//        }
//
//        String lista = "";
//
//        for (Usuario usuarios : UsuarioDAO.listarUsuarios()) {
//            lista += "email: " + usuarios.getEmail() + " id: " + usuarios.getId() + "\n";
//        }
//
//        System.out.println(lista);

        new TelaLogin().setVisible(true);
    }
}
