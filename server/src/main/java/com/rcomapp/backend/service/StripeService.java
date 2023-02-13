package com.rcomapp.backend.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.rcomapp.backend.model.CheckoutItem;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;
import com.stripe.model.Customer;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import com.stripe.param.checkout.SessionCreateParams.LineItem;

@Service
public class StripeService {
	
	
	 
    

    public Customer createCustomer(String token, String email) throws Exception {
        Map<String, Object> customerParams = new HashMap<String, Object>();
        customerParams.put("email", email);
        customerParams.put("source", token);
        return Customer.create(customerParams);
    }

    private Customer getCustomer(String id) throws Exception {
        return Customer.retrieve(id);
    }

    public Charge chargeNewCard(String token, double amount) throws Exception {
        Map<String, Object> chargeParams = new HashMap<String, Object>();
        chargeParams.put("amount", (int)(amount * 100));
        chargeParams.put("currency", "USD");
        chargeParams.put("source", token);
        Charge charge = Charge.create(chargeParams);

        return charge;
    }

    public Charge chargeCustomerCard(String customerId, int amount) throws Exception {
        String sourceCard = getCustomer(customerId).getDefaultSource();
        Map<String, Object> chargeParams = new HashMap<String, Object>();
        chargeParams.put("amount", amount);
        chargeParams.put("currency", "USD");
        chargeParams.put("customer", customerId);
        chargeParams.put("source", sourceCard);
        Charge charge = Charge.create(chargeParams);
        return charge;
    }
    
    
    public Session handleCheckout(List<CheckoutItem> checkoutItemList) throws StripeException {
    	
    	
    	Stripe.apiKey = "sk_test_51HN1SDDnSY2xnLBJol5Ha7ocX7JBcGWsmhdRzLjRfKz69qUbZoG0TDNgcxFLhTJRo3oMMruu2dCqRYioeN0uwg9d00BhEPkRTt";
    	
    	 String YOUR_DOMAIN = "http://localhost:3000";
    	 
    	 List<SessionCreateParams.LineItem> sessionItemList= new ArrayList<>();
    	 
    	 for(CheckoutItem checkoutItem : checkoutItemList ) {
    		 sessionItemList.add(createSessionLineItem(checkoutItem) );
    	 }
         
    	 SessionCreateParams params =
           SessionCreateParams.builder()
           .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
             .setMode(SessionCreateParams.Mode.PAYMENT)
             .setSuccessUrl(YOUR_DOMAIN + "/success")
             .setCancelUrl(YOUR_DOMAIN + "/canceled")
             .addAllLineItem(sessionItemList)
             .build();
         
       return Session.create(params);

    
    }
    
    
    
  private LineItem createSessionLineItem(CheckoutItem checkoutItem) {
		
		return SessionCreateParams.LineItem.builder()
				.setPriceData(createPriceData(checkoutItem))
				.setQuantity(Long.parseLong(String.valueOf(checkoutItem.getQuantity())))
                 .build();
				
	}
	
	
	private LineItem.PriceData createPriceData(CheckoutItem checkoutItem) {
		
		
		return SessionCreateParams.LineItem.PriceData.builder()
				.setCurrency("usd")
				.setUnitAmount((long)checkoutItem.getPrice()*100 )
				.setProductData(
						
						SessionCreateParams.LineItem.PriceData.ProductData.builder()
						.setName(checkoutItem.getProductName()).build()
						).build();
	}
	

}
