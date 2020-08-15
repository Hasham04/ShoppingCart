package com.ShoppingApp.rest.webservices.restfulwebservices.item;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemJpaRepository extends JpaRepository<Item, Long>{
	List<Item> findByUsername(String username);
}
