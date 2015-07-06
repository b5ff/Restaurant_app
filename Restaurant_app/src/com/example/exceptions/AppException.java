package com.example.exceptions;

public class AppException extends Exception {
	
	private static final long serialVersionUID = -2199188813993959099L;
	public AppException(String msg){
		super(msg);
	}
	public AppException(String msg, Throwable cause){
		super(msg, cause);
	}
}
