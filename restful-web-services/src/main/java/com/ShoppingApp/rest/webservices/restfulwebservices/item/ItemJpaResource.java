package com.ShoppingApp.rest.webservices.restfulwebservices.item;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.ShoppingApp.rest.webservices.restfulwebservices.item.Item;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class ItemJpaResource {
	
	@Autowired
	private ItemHardcodedService ShoppingService;

	@Autowired
	private ItemJpaRepository itemJpaRepository;

	
	@GetMapping("/jpa/users/{username}/items")
	public List<Item> getAllItems(@PathVariable String username){
		return itemJpaRepository.findByUsername(username);
		
	}

	@GetMapping("/jpa/users/{username}/items/{id}")
	public Item getItem(@PathVariable String username, @PathVariable long id){
		return itemJpaRepository.findById(id).get();
	
	}

	
	@DeleteMapping("/jpa/users/{username}/items/{id}")
	public ResponseEntity<Void> deleteItem(
			@PathVariable String username, @PathVariable long id){
		
		
		itemJpaRepository.deleteById(id);
		
		return ResponseEntity.noContent().build();
		//return ResponseEntity.notFound().build();
	}
	

	
	@PutMapping("/jpa/users/{username}/items/{id}")
	public ResponseEntity<Item> updateItem(
			@PathVariable String username,
			@PathVariable long id, @RequestBody Item item){
		
	
		Item itemUpdated = itemJpaRepository.save(item);
		
		return new ResponseEntity<Item>(item, HttpStatus.OK);
	}
	
	@PostMapping("/jpa/users/{username}/items")
	public ResponseEntity<Void> createTodo(
			@PathVariable String username, @RequestBody Item item){
		
		
		item.setUsername(username);
		Item createdItem = itemJpaRepository.save(item);
		

		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(createdItem.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
		
}
