/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.bibliomvc.dao;

import com.mycompany.bibliomvc.model.Book;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javax.swing.JOptionPane;
import javax.swing.table.DefaultTableModel;

/**
 *
 * @author HENRIQUEMICHEL
 */
public class BooksDAO {

    public static void addBook(Connection connection, Book book) {
        String sql = "INSERT INTO books (title,author,price,year) values (?,?,?,?)";

        try (PreparedStatement dakka = connection.prepareStatement(sql)) {
            dakka.setString(1, book.getTitle());
            dakka.setString(2, book.getAuthor());
            dakka.setDouble(3, book.getPrice());
            dakka.setInt(4, book.getYear());

            dakka.executeUpdate();
            System.out.println("Sucess");

        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, e.getMessage());
        }
    }

    public static void addBook(Connection connection, String title, String author, double price, int year) {
        String sql = "INSERT INTO books (title,author,price,year) values (?,?,?,?)";

        try (PreparedStatement dakka = connection.prepareStatement(sql)) {
            dakka.setString(1, title);
            dakka.setString(2, author);
            dakka.setDouble(3, price);
            dakka.setInt(4, year);

            dakka.executeUpdate();
            System.out.println("Sucess");

        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, e.getMessage());
        }
    }

    public static void updateBook(Connection connection, int id, String title, String author, double price, int year) {
        String sql = "UPDATE books SET title=?, author=?, price=?, year=? WHERE id=?";
        try (PreparedStatement dakka = connection.prepareStatement(sql)) {
            dakka.setString(1, title);
            dakka.setString(2, author);
            dakka.setDouble(3, price);
            dakka.setInt(4, year);
            dakka.setInt(5, id);

            dakka.executeUpdate();

        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void deleteBook(Connection connection, int id) {
        String sql = "DELETE FROM books WHERE id = ?";
        try (PreparedStatement dakka = connection.prepareStatement(sql)) {
            dakka.setInt(1, id);
            dakka.executeUpdate();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void listBooks(Connection connection, DefaultTableModel model) {
        String sql = "SELECT * FROM books";
        try (Statement dakka = connection.createStatement(); ResultSet rs = dakka.executeQuery(sql)) {
            while (rs.next()) {
                model.addRow(new Object[]{rs.getString("title"), rs.getString("author"), rs.getDouble("price"), rs.getInt("year"), rs.getInt("id")});
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void searchBooks(Connection connection, String search, DefaultTableModel model) {
        String sql = "SELECT * FROM books WHERE ";
        try {
            Statement dakka = connection.createStatement();
            ResultSet rs = dakka.executeQuery(sql + search);
            while (rs.next()) {
                model.addRow(new Object[]{rs.getString("title"), rs.getString("author"), rs.getDouble("price"), rs.getInt("year"), rs.getInt("id")});
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public static Book searchBook(Connection connection, int search) {
        String sql = "SELECT * FROM books WHERE id = ?";
        try {
            PreparedStatement dakka = connection.prepareStatement(sql);

            dakka.setInt(1, search);
            ResultSet rs = dakka.executeQuery();
            return new Book(rs.getString("title"), rs.getString("author"), rs.getDouble("price"), rs.getInt("year"), rs.getInt("id"));
        } catch (SQLException e) {
            System.out.println(e.getMessage());
            return null;
        }
    }
}
