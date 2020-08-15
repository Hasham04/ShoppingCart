import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingListDataService } from '../service/data/Shopping-data.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../list-items/list-items.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

// we route to this component when when the user wants to add a new item we also create the save function
export class ItemComponent implements OnInit {

  id:number
  item: Item

  constructor(
    private ShoppingService: ShoppingListDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    
    this.id = this.route.snapshot.params['id'];
    
    this.item = new Item(this.id,'',0,0,"",0);
    
    if(this.id!=-1) {
      this.ShoppingService.retrieveItem('Hasham', this.id)
          .subscribe (
            data => this.item = data
          )
    }
  }

  saveItem() {
    if(this.id == -1) { //=== ==
      this.ShoppingService.createItem('Hasham', this.item)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['items'])
            }
          )
    } else {
      this.ShoppingService.updateItem('Hasham', this.id, this.item)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['items'])
            }
          )
    }
  }

}
