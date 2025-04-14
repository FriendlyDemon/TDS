/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.bibliomvc.controller;

import com.mycompany.bibliomvc.dao.BooksDAO;
import com.mycompany.bibliomvc.database.Connect;
import com.mycompany.bibliomvc.model.Book;
import java.sql.Connection;
import javax.swing.JOptionPane;
import javax.swing.table.DefaultTableModel;

/**
 *
 * @author HENRIQUEMICHEL
 */
public class BookController {

    public static String search(String title, String author, String price, String year, DefaultTableModel model) {
        Connection connection = Connect.connect();
        String search = "SELECT * FROM books WHERE ";
        if ("".equals(title) && "".equals(author) && "".equals(price) && "".equals(year)) {
            search = null;
        } else if ("".equals(author) && "".equals(price) && "".equals(year)) {
            search += "UPPER(title) LIKE UPPER('%" + title.trim() + "%')";
        } else if ("".equals(title) && "".equals(price) && "".equals(year)) {
            search += "UPPER(author) LIKE UPPER('%" + author.trim() + "%')";
        } else if ("".equals(title) && "".equals(author) && "".equals(year)) {
            search += "price = '" + price.trim() + "'";
        } else if ("".equals(title) && "".equals(author) && "".equals(price)) {
            search += "year = '" + year.trim() + "'";
        } else if ("".equals(price) && "".equals(year)) {
            search += "UPPER(title) LIKE UPPER('%" + title.trim() + "%') AND UPPER(author) LIKE UPPER('%" + author.trim() + "%')";
        } else if ("".equals(author) && "".equals(year)) {
            search += "UPPER(title) LIKE UPPER(%'" + title.trim() + "%') AND price = '" + price.trim() + "'";
        } else if ("".equals(author) && "".equals(price)) {
            search += "UPPER(title) LIKE UPPER('%" + title.trim() + "%') AND year = '" + year.trim() + "'";
        } else if ("".equals(title) && "".equals(year)) {
            search += "UPPER(author) LIKE UPPER('%" + author.trim() + "%') AND price = '" + price.trim() + "'";
        } else if ("".equals(title) && "".equals(price)) {
            search += "UPPER(author) LIKE UPPER('%" + author.trim() + "%') AND year = '" + year.trim() + "'";
        } else if ("".equals(title) && "".equals(author)) {
            search += "price = '" + price.trim() + "' AND year = '" + year.trim() + "'";
        } else if ("".equals(year)) {
            search += "UPPER(title) LIKE UPPER('%" + title.trim() + "%') AND UPPER(author) LIKE UPPER('%" + author.trim() + "%') AND price = '" + price.trim() + "'";
        } else if ("".equals(price)) {
            search += "UPPER(title) LIKE UPPER('%" + title.trim() + "%') AND UPPER(author) LIKE UPPER('%" + author.trim() + "%') AND year = '" + year.trim() + "'";
        } else if ("".equals(author)) {
            search += "UPPER(title) LIKE UPPER('%" + title.trim() + "%') AND price = '" + price.trim() + "' AND year = '" + year.trim() + "'";
        } else if ("".equals(title)) {
            search += "UPPER(author) LIKE UPPER('%" + author.trim() + "%') AND price = '" + price.trim() + "' AND year = '" + year.trim() + "'";
        } else {
            search += "UPPER(title) LIKE UPPER('%" + title.trim() + "%') AND UPPER(author) LIKE UPPER('%" + author.trim() + "%') AND price = '" + price.trim() + "' AND year = '" + year.trim() + "'";
        }

        if (search != null) {
            BooksDAO.searchBooks(connection, search, model);
        }
        Connect.disconnect(connection);
        return search;
    }

    public static void search(String search, DefaultTableModel model) {
        Connection connection = Connect.connect();
        BooksDAO.searchBooks(connection, search, model);
        Connect.disconnect(connection);
    }

    public static void add(String title, String author, String price, String year) {
        Connection connection = Connect.connect();

        if (title != null && author != null && price != null && year != null) {
            try {
                double priceDou = Double.parseDouble(price);
                try {
                    int yearInt = Integer.parseInt(year);

                    Book book = new Book(title, author, priceDou, yearInt);
                    BooksDAO.addBook(connection, book);
                } catch (java.lang.NumberFormatException e) {
                    JOptionPane.showMessageDialog(null, "year not number");
                }
            } catch (java.lang.NumberFormatException ep) {
                JOptionPane.showMessageDialog(null, "price not number");
                try {
                    Integer.parseInt(year);
                } catch (java.lang.NumberFormatException ey) {
                    JOptionPane.showMessageDialog(null, "year not number");
                }
            }
        }
        Connect.disconnect(connection);
    }

    public static void delete(int id) {
        Connection connection = Connect.connect();
        BooksDAO.deleteBook(connection, id);
        Connect.disconnect(connection);
    }

    public static void update(String title, String author, String price, String year, int id) {
        Connection connection = Connect.connect();
        Book book = BooksDAO.searchBook(connection, id);
        boolean ok = true;

        if (!"".equals(title)) {
            book.setTitle(title);
        }
        if (!"".equals(author)) {
            book.setAuthor(author);
        }
        if (!"".equals(price)) {
            try {
                double priceD = Double.parseDouble(price);
                book.setPrice(priceD);
            } catch (java.lang.NumberFormatException e) {
                JOptionPane.showMessageDialog(null, "price not number");
                ok = false;
            }
        }
        if (!"".equals(year)) {
            try {
                int yearI = Integer.parseInt(year);
                book.setYear(yearI);
            } catch (java.lang.NumberFormatException e) {
                JOptionPane.showMessageDialog(null, "year not number");
                ok = false;
            }
        }
        if (ok) {
            BooksDAO.updateBook(connection, book);
        }
        Connect.disconnect(connection);
    }

    public static void list(DefaultTableModel model) {
        Connection connection = Connect.connect();
        BooksDAO.listBooks(connection, model);
        Connect.disconnect(connection);
    }
}
