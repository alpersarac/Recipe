import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  subscription: Subscription;
  editMode=false;
  editedItemIndex:number;
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(){
    this.subscription= this.shoppingListService.startedEditting
    .subscribe(
      (index:number)=>{
        this.editMode=true;
        this.editedItemIndex=index;
      }
    );
  }

  onAddItem(form:NgForm){
    const value = form.value;

    const newIngredient = new Ingredient(value.name,value.amount);
    this.shoppingListService.addShoppingList(newIngredient);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
