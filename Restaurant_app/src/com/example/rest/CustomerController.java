package com.example.rest;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.example.dao.CustomerDAO;
import com.example.exceptions.AppException;
import com.example.model.Customer;

@Path("/reservation")
public class CustomerController {

	@GET
	@Path("/all")
	@Produces(MediaType.APPLICATION_JSON)
	public AppResponse getAllReservations() {
		AppResponse appresp = new AppResponse();

		try {
			CustomerDAO dao = new CustomerDAO();
			List<Customer> custList = dao.getAll();
			appresp.setPayload(custList);
		} catch (AppException e) {
			e.printStackTrace();
			appresp.setStatus(AppResponse.ERROR);
			appresp.setMessage(e.getMessage());
		}
		return appresp;
	}

	@GET
	@Path("/get/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public AppResponse getCustomerReservation(@PathParam("id") int custid) {
		AppResponse appresp = new AppResponse();

		try {
			CustomerDAO dao = new CustomerDAO();
			Customer cust = dao.getCustomer(custid);
			appresp.setPayload(cust);
		} catch (AppException e) {
			e.printStackTrace();
			appresp.setStatus(AppResponse.ERROR);
			appresp.setMessage(e.getMessage());
		}
		return appresp;
	}

	@POST
	@Path("/add")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public AppResponse addCustomerReservation(Customer cust) {
		AppResponse appresp = new AppResponse();

		try {
			CustomerDAO dao = new CustomerDAO();
			cust = dao.addCustomer(cust);
			appresp.setMessage("New reservation is created");
			appresp.setPayload(cust);
		} catch (AppException e) {
			e.printStackTrace();
			appresp.setStatus(AppResponse.ERROR);
			appresp.setMessage(e.getMessage());
		}
		return appresp;
	}
	
	@POST
	@Path("/update")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public AppResponse updateCustomerReservation(Customer cust) {
		AppResponse appresp = new AppResponse();

		try {
			CustomerDAO dao = new CustomerDAO();
			cust = dao.updateCustomerReservation(cust);
			appresp.setMessage("Reservation updated");
			appresp.setPayload(cust);
		} catch (AppException e) {
			e.printStackTrace();
			appresp.setStatus(AppResponse.ERROR);
			appresp.setMessage(e.getMessage());
		}
		return appresp;
	}
	
	@GET
	@Path("/delete/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public AppResponse deleteCustomerReservation(@PathParam("id") int reservationId) {
		AppResponse appresp = new AppResponse();

		try {
			CustomerDAO dao = new CustomerDAO();
			Customer cust = dao.deleteCustomerReservation(reservationId);
			appresp.setMessage("Deleted Successfully");
//			appresp.setPayload(cust);
		} catch (AppException e) {
			e.printStackTrace();
			appresp.setStatus(AppResponse.ERROR);
			appresp.setMessage(e.getMessage());
		}
		return appresp;
	}

}
