package com.ShoppingApp.rest.webservices.restfulwebservices.item;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class ItemHardcodedService {
	
	private static List<Item> items = new ArrayList<>();
	private static long idCounter = 0;
	
	
	public List<Item> findAll() {
		return items;
	}

	public Item save(Item item) {
		if(item.getId()==-1 || item.getId()==0) {
			item.setId(++idCounter);
			items.add(item);
		} else {
			deleteById(item.getId());
			items.add(item);
		}
		return item;
	}
	
	public Item deleteById(long id) {
		Item item = findById(id);
		
		if(item==null) return null;
		
		if(items.remove(item)) {
			return item;
		}
		
		return null;
	}

	public Item findById(long id) {
		for(Item item:items) {
			if(item.getId() == id) {
				return item;
			}
		}
		
		return null;
	}
	
}
