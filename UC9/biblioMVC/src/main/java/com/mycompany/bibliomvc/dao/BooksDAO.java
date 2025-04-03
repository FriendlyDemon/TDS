/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.bibliomvc.dao;

import com.mycompany.bibliomvc.model.Book;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import javax.swing.JOptionPane;

/**
 *
 * @author HENRIQUEMICHEL
 */
public class BooksDAO {

    public static void addBook(Connection connection, Book book) {
        String sql = "INSERT INTO books (title,author,price,year) values (?,?,?,?)";
        
        try (PreparedStatement dakka = connection.prepareStatement(sql)) {
            dakka.setString(1, book.getAuthor());
            dakka.setString(2, book.getAuthor());
            dakka.setDouble(3, book.getPrice());
            dakka.setInt(4, book.getYear());
            
            dakka.executeUpdate();

        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, e.getMessage());
        }
    }
}
