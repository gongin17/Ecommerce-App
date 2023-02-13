package com.rcomapp.backend.model;

public class CheckoutItem {
	
	private long price;
	private String productid;
	private String quantity;
	private String productName;
	
	

	public CheckoutItem() {
		super();
	}

    

	public long getPrice() {
		return price;
	}



	public void setPrice(long price) {
		this.price = price;
	}



	public String getProductid() {
		return productid;
	}



	public void setProductid(String productid) {
		this.productid = productid;
	}



	public String getQuantity() {
		return quantity;
	}



	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}



	public String getProductName() {
		return productName;
	}



	public void setProductName(String productName) {
		this.productName = productName;
	}



	

}
