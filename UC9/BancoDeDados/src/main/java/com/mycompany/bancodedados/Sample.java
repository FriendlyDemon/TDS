package com.mycompany.bancodedados;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Sample {

    public static void test(Connection connection) {
        try (
                Statement statement = connection.createStatement();) {
            statement.setQueryTimeout(30);

            statement.executeUpdate("insert into usuarios (nome, email) values('leo', 'leo@mail.com')");
            statement.executeUpdate("insert into usuarios (nome, email) values('yui', 'yui@mail.com')");
            ResultSet rs = statement.executeQuery("select * from usuarios");
            while (rs.next()) {
                System.out.println("nome = " + rs.getString("nome"));
                System.out.println("email = " + rs.getString("email"));
            }
        } catch (SQLException e) {
            e.printStackTrace(System.err);
        }
    }
}
