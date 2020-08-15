package com.ShoppingApp.rest.webservices.restfulwebservices.item;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Item {
	
	@Id
	@GeneratedValue
	private Long id;
	
	private String username;
	private String name;
	private Integer quantity;
	private Integer price;
	private String category;
	private Integer discount;
	
	protected Item() {
		
	}
	
	public Item(long id, String username, String description, Integer quantity, Integer price, String category,Integer discount ) {
		super();
		this.id = id;
		this.username = username;
		this.name = description;
		this.quantity = quantity;
		this.price=price;
		this.category=category;
		this.discount=discount;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name= name;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	
	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer	price) {
		this.price = price;
	}
	
	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}
	public Integer getDiscount() {
		return discount;
	}

	public void setDiscount(Integer discount) {
		this.discount = discount;
	}



	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Item other = (Item) obj;
		if (id != other.id)
			return false;
		return true;
	}

	
}
