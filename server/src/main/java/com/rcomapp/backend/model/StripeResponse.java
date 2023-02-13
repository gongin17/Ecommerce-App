package com.rcomapp.backend.model;

public class StripeResponse {
	
	
	 private String id;
	 private String status;
	    private String message;
	    
	    

	    public String getId() {
			return id;
		}

		public void setId(String id) {
			this.id = id;
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

	    public StripeResponse(String status, String message) {
	        this.status = status;
	        this.message = message;
	    }

	public StripeResponse(String id) {
		this.id=id;
	}

}
