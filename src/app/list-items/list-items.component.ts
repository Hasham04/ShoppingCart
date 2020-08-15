import { ShoppingListDataService } from '../service/data/Shopping-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

// In this component we are implementing the ability to add, refresh, delete, save items we also create public attributes for each item

export class Item {
  constructor(
    public id: number,
    public name : string,
    public quantity: number,
    public price : number,
    public category: string,
    public discount: number,
  ){
  }
}

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListShoppingComponent implements OnInit {

  items: Item[]
  
  total=0
  message: string
  AllPrices=[]
  numItems=0

  constructor(
    private ShoppingService:ShoppingListDataService,
    private router : Router
  ) { }

  ngOnInit() {
    
    this.refreshItems();
    this.getTotalPrice()
    this.GetPrice(this.total,this.AllPrices)

    
    
  }

  refreshItems(){
    this.ShoppingService.retrieveAllItems('Hasham').subscribe(
      response => {
        /* console.log(response); */
        this.items = response;
        this.numItems=this.items.length
      }
    )
  }

  getTotalPrice(){
    this.ShoppingService.retrieveAllItems('Hasham')
    .subscribe(
      response => {
        /* console.log(response); */
        this.items=response;
        this.AllPrices=this.items.map(items => (items.price*items.quantity)-(items.price*items.quantity*(items.discount/100)) );
      }  
    )
  }

  GetPrice(total,AllPrices){
    
    var i;
    for (i in AllPrices){
      total=total+AllPrices[i]
      
    }
    return total
    
  }
  
  

  deleteItem(id) {
    this.ShoppingService.deleteItem('Hasham', id).subscribe (
      response => {
        console.log(response);
        this.message = `Delete of Item ${id} Successful!`;
        this.refreshItems();
      }
    )
  }

  updateItem(id) {
  
    this.router.navigate(['items',id])
  }

  addItem() {
    this.router.navigate(['items',-1])
  }

}
