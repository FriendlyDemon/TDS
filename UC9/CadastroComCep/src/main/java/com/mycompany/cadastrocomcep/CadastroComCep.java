/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */
package com.mycompany.cadastrocomcep;

import com.mycompany.cadastrocomcep.database.ConexaoSQL;
import com.mycompany.cadastrocomcep.view.Login;

/**
 *
 * @author HENRIQUEMICHEL
 */
public class CadastroComCep {

    public static void main(String[] args) {
        ConexaoSQL.conectar();
        new Login().setVisible(true);
    }
}
