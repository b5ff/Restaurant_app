package com.example.rest;

public class AppResponse {
	public static final String ERROR = "error";
	public String status;
	public String message;
	public Object payload;
	
	public AppResponse(){
		this.status = "success";
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Object getPayload() {
		return payload;
	}
	public void setPayload(Object payload) {
		this.payload = payload;
	}
	
}
