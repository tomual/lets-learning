package com.company;

import java.io.*;
import java.sql.*;
import java.util.Properties;

public class Main {

    private static String database;
    private static String dbuser;
    private static String dbpassword;

    public static void main(String[] args) throws ClassNotFoundException, SQLException {
        loadConfig();
        Class.forName("com.mysql.jdbc.Driver");
        Connection connection = DriverManager.getConnection(database, dbuser, dbpassword);
        System.out.println(connection.getCatalog());

        insertUser(connection, "Tom Test", "tom", "tom@mail.com");
        selectUser(connection, "tom");
        updateUser(connection, 1, "Tom Test 2", "tom2", "tom2@mail.com");
        deleteUser(connection, 10);
    }

    private static void deleteUser(Connection connection, int userid) throws SQLException {
        String query = "DELETE FROM users WHERE userid = ?";

        PreparedStatement preparedStatement = connection.prepareStatement(query);
        preparedStatement.setInt(1, userid);

        preparedStatement.execute();
    }

    private static void updateUser(Connection connection, int userid, String name, String username, String email) throws SQLException {
        String query = "UPDATE users SET name = ?, username = ?, email = ? WHERE userid = ?";

        PreparedStatement preparedStatement = connection.prepareStatement(query);
        preparedStatement.setString(1, name);
        preparedStatement.setString(2, username);
        preparedStatement.setString(3, email);
        preparedStatement.setInt(4, userid);

        preparedStatement.execute();
    }

    private static void selectUser(Connection connection, String username) throws SQLException {
        String query = "SELECT * FROM users WHERE username = ?";

        PreparedStatement preparedStatement = connection.prepareStatement(query);
        preparedStatement.setString(1, username);

        ResultSet resultSet = preparedStatement.executeQuery();

        while (resultSet.next()) {
            int userid = resultSet.getInt("userid");
            String name = resultSet.getString("name");
            username = resultSet.getString("username");
            String email = resultSet.getString("email");

            // print the results
            System.out.format("%s, %s, %s, %s\n", userid, name, username, email);
        }
        preparedStatement.close();
    }

    public static void insertUser(Connection connection, String name, String username, String email) throws SQLException {

        String query = "INSERT INTO users (name, username, email) values (?, ?, ?)";

        PreparedStatement preparedStatement = connection.prepareStatement(query);
        preparedStatement.setString(1, name);
        preparedStatement.setString(2, username);
        preparedStatement.setString(3, email);

        preparedStatement.execute();
    }

    public static void loadConfig() {
        Properties prop = new Properties();
        InputStream input = null;

        try {
            input = new FileInputStream("config.properties");

            prop.load(input);

            database = prop.getProperty("database");
            dbuser = prop.getProperty("dbuser");
            dbpassword = prop.getProperty("dbpassword");

        } catch (IOException ex) {
            ex.printStackTrace();
        } finally {
            if (input != null) {
                try {
                    input.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
