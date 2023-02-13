package com.rcomapp.backend.controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


import com.rcomapp.backend.model.Product;
import com.rcomapp.backend.model.ResponseProduct;

import com.rcomapp.backend.repository.productRepository;
import com.rcomapp.backend.service.ProductService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/")
public class ProductController {

	@Autowired
	private productRepository productrepositry;

	@Autowired
	private ProductService productService;

	@PostMapping("/add")
	public Product addProduct(@RequestParam("file") MultipartFile file, @RequestParam("price") double price,
			@RequestParam("rating") double rating , @RequestParam("description") String description,
			@RequestParam("category") String category, @RequestParam("title") String title) {

		try {
			return productService.addProduct(file, price, rating, description, category, title);
		} catch (Exception e) {
			return null;
		}

	}


	
	 @GetMapping("/products")
	  public ResponseEntity<List<ResponseProduct>> getListFiles() {
	    List<ResponseProduct> products = productService.getAllProducts().map(product -> {
	      String fileDownloadUri = ServletUriComponentsBuilder
	          .fromCurrentContextPath()
	          .path("/products/")
	          .path(product.getId())
	          .toUriString();

	      return new ResponseProduct(
	    		  product.getId(),
	    		  product.getTitle(),
	    		  product.getCategory(),
	    		  product.getDescription(),
	    		  product.getPrice(),
	    		  product.getType(),
	              fileDownloadUri,
	              product.getRating()
	         
	       );
	    }).collect(Collectors.toList());

	    return ResponseEntity.status(HttpStatus.OK).body(products);
	  }
	 
	 
	 @GetMapping("/product/{id}")
	  public ResponseEntity<ResponseProduct> getProduct(@PathVariable String id) {
	    Product product = productService.getProduct(id);
	    
	      String fileDownloadUri = ServletUriComponentsBuilder
	          .fromCurrentContextPath()
	          .path("/products/")
	          .path(product.getId())
	          .toUriString();
	      
	      
	      ResponseProduct responseProduct= new ResponseProduct(
	    		  product.getId(),
	    		  product.getTitle(),
	    		  product.getCategory(),
	    		  product.getDescription(),
	    		  product.getPrice(),
	    		  product.getType(),
	              fileDownloadUri,
	              product.getRating()
	         
	       );
	   

	    return ResponseEntity.status(HttpStatus.OK).body(responseProduct);
	  }
	 

	
	
	 @GetMapping("products/{id}")
	  public ResponseEntity<byte[]> getFile(@PathVariable String id) {
	    Product product = productService.getProduct(id);

	    return ResponseEntity.ok()
	        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + product.getTitle() + "\"")
	        .body(product.getImage());
	  }

	

}
