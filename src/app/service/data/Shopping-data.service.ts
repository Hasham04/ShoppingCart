import { ShoppingList_JPA_API_URL } from '../../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../../list-items/list-items.component';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllItems(username) {
    return this.http.get<Item[]>(`${ShoppingList_JPA_API_URL}/users/${username}/items`);
   
  }

  deleteItem(username, id){
    return this.http.delete(`${ShoppingList_JPA_API_URL }/users/${username}/items/${id}`);
  }

  retrieveItem(username, id){
    return this.http.get<Item>(`${ShoppingList_JPA_API_URL }/users/${username}/items/${id}`);
  }

  updateItem(username, id, item){
    return this.http.put(
          `${ShoppingList_JPA_API_URL }/users/${username}/items/${id}`
                , item);
  }

  createItem(username, item){
    return this.http.post(
              `${ShoppingList_JPA_API_URL}/users/${username}/items`
                , item);
  }

}
