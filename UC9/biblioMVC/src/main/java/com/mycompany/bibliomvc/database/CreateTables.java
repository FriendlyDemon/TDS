/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.bibliomvc.database;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

/**
 *
 * @author HENRIQUEMICHEL
 */
public class CreateTables {

    public static void createTables(Connection connection) {
        String sql = "CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(255) NOT NULL, author VARCHAR(255) NOT NULL, price REAL NOT NULL, year INTEGER NOT NULL)";
        try (Statement dakka = connection.createStatement()){
            dakka.execute(sql);
        } catch (SQLException e) {
            
        }
    }
}
