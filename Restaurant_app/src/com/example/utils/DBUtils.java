package com.example.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DBUtils {
	public static final String URL = "jdbc:mysql://localhost:3306/customerdb";
	public static final String USER = "root";
	public static final String PASSWORD = "";

	static {
		try {
			Class.forName("com.mysql.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}

	public static Connection connectToDB() {
		Connection con = null;

		try {
			con = DriverManager.getConnection(URL, USER, PASSWORD);
			System.out.println("connection successful");
		} catch (SQLException e) {
			e.printStackTrace();
			System.out.println("Error in establishing connection" + e.getMessage());
		}

		return con;
	}

	public static void closeResources(ResultSet rs, PreparedStatement ps, Connection con) {
		try {
			if (rs != null) {
				rs.close();
			}
			if (ps != null) {
				ps.close();
			}
			if (con != null) {
				con.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public static void main(String[] args) {
		DBUtils.connectToDB();
	}
}
