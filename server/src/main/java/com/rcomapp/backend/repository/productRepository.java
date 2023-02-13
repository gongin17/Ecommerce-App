package com.rcomapp.backend.repository;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.rcomapp.backend.model.Product;


@Repository
public interface productRepository extends JpaRepository<Product,String>{
	
	


}
