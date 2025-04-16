/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.loginhash.controller;

import com.mycompany.loginhash.dao.UsuarioDAO;
import com.mycompany.loginhash.model.Usuario;

/**
 *
 * @author HENRIQUEMICHEL
 */
public class UsuarioController {

    public static boolean registrarUsuario(String email, char[] senha) {

        String senhaS = new String(senha);
        Usuario usuario = new Usuario(email, senhaS);
        return UsuarioDAO.registrarUsuario(usuario);
    }

    public static Usuario validarLogin(String email, char[] senha) {

        String senhaS = new String(senha);
        Usuario usuario = new Usuario(email, senhaS);

        if (UsuarioDAO.validarLogin(usuario)) {
            usuario = UsuarioDAO.buscarUsuarioPorEmail(email);
        } else {
            usuario = null;
        }

        return usuario;
    }

    public static Usuario buscarUsuarioPorEmail(String email) {
        return UsuarioDAO.buscarUsuarioPorEmail(email);
    }
}
