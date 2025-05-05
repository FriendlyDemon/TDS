/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.cadastrocomcep.controller;

import com.mycompany.cadastrocomcep.dao.UsuarioDAO;
import com.mycompany.cadastrocomcep.model.Usuario;

/**
 *
 * @author HENRIQUEMICHEL
 */
public class UsuarioController {

    public static boolean emailValido(String email) {
        String regex = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$";
        return email.matches(regex);
    }

    public static boolean registrarUsuario(String nome, String email, char[] senha, String cep, String numero) {

        String senhaS = new String(senha);
        Usuario usuario = new Usuario(nome, email, senhaS, cep, numero);
        return UsuarioDAO.registrarUsuario(usuario);
    }

    public static Usuario validarLogin(String email, char[] senha) {

        String senhaS = new String(senha);
        Usuario usuario = new Usuario(email, "", senhaS, "", "");

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
