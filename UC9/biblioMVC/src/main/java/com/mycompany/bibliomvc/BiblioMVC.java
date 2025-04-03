/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */
package com.mycompany.bibliomvc;

import com.mycompany.bibliomvc.dao.BooksDAO;
import com.mycompany.bibliomvc.model.Book;
import com.mycompany.bibliomvc.database.*;
import java.sql.Connection;

/**
 *
 * @author HENRIQUEMICHEL
 */
public class BiblioMVC {

    public static void main(String[] args) {
        Book newBook = new Book("Book 1", "new Writer", 100.00, 1999);
        Connection connection = Connect.connect();
        CreateTables.createTables(connection);
        BooksDAO.addBook(connection, newBook);
    }
}
