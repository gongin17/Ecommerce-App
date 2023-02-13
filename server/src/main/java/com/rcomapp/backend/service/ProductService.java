package com.rcomapp.backend.service;

import java.io.IOException;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import com.rcomapp.backend.model.Product;
import com.rcomapp.backend.repository.productRepository;

@Service
public class ProductService  {
	
	@Autowired
	private productRepository productrepository ;
	
	public Product addProduct(MultipartFile file,double price,double rating,String description,String category,String title) 
			throws IOException{
		
		Product product=new Product();
		 product.setImage(file.getBytes());
		 product.setType(file.getContentType());
		 product.setCategory(category);
		 product.setDescription(description);
		 product.setTitle(title);
		 product.setPrice(price);
		 product.setRating(rating);
	
		return productrepository.save(product);
	}
	
	  public Product  getProduct(String id) {
		  
		 
				return  productrepository.findById(id).get();
			
		 
		  }
		  
		  public Stream<Product > getAllProducts() {
		    return  productrepository.findAll().stream();
		  }
	
	

}
