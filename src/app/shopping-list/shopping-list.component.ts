import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
ingredients : Ingredient[];
private igChanged: Subscription;

constructor(private shoppingListService:ShoppingListService) { }

ngOnInit(){
  this.ingredients=this.shoppingListService.getShoppingList();
  this.igChanged=this.shoppingListService.ingredientChanged
    .subscribe((ingredients:Ingredient[]) =>{
      this.ingredients=ingredients;
    });
}
ngOnDestroy(): void {
 this.igChanged.unsubscribe();
}

}
