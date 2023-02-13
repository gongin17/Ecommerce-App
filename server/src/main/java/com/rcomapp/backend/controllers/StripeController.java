package com.rcomapp.backend.controllers;

import com.rcomapp.backend.service.StripeService;
import com.rcomapp.backend.model.StripeResponse;
import com.rcomapp.backend.model.CheckoutItem;

import com.stripe.model.Charge;
import com.stripe.model.checkout.Session;
import com.stripe.exception.StripeException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.file.Paths;
import java.util.List;



@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/payment")

public class StripeController {
	
	 

	    @Autowired
	    private StripeService stripeService;
	
	
	
	
	@PostMapping("/create-checkout-session")
	public ResponseEntity<StripeResponse> checkout(@RequestBody List<CheckoutItem> checkoutItemList ) throws StripeException{
		
		
		Session session =stripeService.handleCheckout(checkoutItemList);
		StripeResponse stripeResponse= new StripeResponse(session.getId());
		
		return new ResponseEntity<>(stripeResponse,HttpStatus.OK);
		
	}
	
    
	

}
