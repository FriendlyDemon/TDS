/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */
package com.mycompany.loginhash;

import com.mycompany.loginhash.database.ConexaoSQL;
import com.mycompany.loginhash.view.TelaLogin;

/**
 *
 * @author HENRIQUEMICHEL
 */
public class LoginHash {

    public static void main(String[] args) {
        ConexaoSQL.conectar();

        new TelaLogin().setVisible(true);
    }
}
