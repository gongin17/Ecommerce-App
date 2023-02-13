package com.rcomapp.backend.model;

import javax.persistence.Lob;

public class ResponseProduct {

	
	
	private String id;
	private String title;
	private String category;
	private String description;
	private double price;
	
	private String type;
	
	private String url;
	private double rating;
	
	
	
	
	
	public ResponseProduct() {
		super();
	}





	public ResponseProduct(String id,String title, String category, String description, double price, String type, String url,
			double rating) {
		super();
		this.id=id;
		this.title = title;
		this.category = category;
		this.description = description;
		this.price = price;
		this.type = type;
		this.url = url;
		this.rating = rating;
	}





	public String getId() {
		return id;
	}





	public void setId(String id) {
		this.id = id;
	}





	public String getTitle() {
		return title;
	}





	public void setTitle(String title) {
		this.title = title;
	}





	public String getCategory() {
		return category;
	}





	public void setCategory(String category) {
		this.category = category;
	}





	public String getDescription() {
		return description;
	}





	public void setDescription(String description) {
		this.description = description;
	}





	public double getPrice() {
		return price;
	}





	public void setPrice(double price) {
		this.price = price;
	}





	public String getType() {
		return type;
	}





	public void setType(String type) {
		this.type = type;
	}





	public String getUrl() {
		return url;
	}





	public void setUrl(String url) {
		this.url = url;
	}





	public double getRating() {
		return rating;
	}





	public void setRating(double rating) {
		this.rating = rating;
	}


 



	
	
	
	
	
	
	
}
