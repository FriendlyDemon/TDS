/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */
package com.mycompany.bibliomvc;

import com.mycompany.bibliomvc.database.*;
import com.mycompany.bibliomvc.view.LibraryFrame;
import java.sql.Connection;

/**
 *
 * @author HENRIQUEMICHEL
 */
public class BiblioMVC {

    public static void main(String[] args) {

        Connection connection = Connect.connect();
        CreateTables.createTables(connection);
        new LibraryFrame(connection).setVisible(true);
    }
}
