import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('f') slForm:NgForm;
  subscription: Subscription;
  editMode=false;
  editedItemIndex:number;
  editedItem: Ingredient
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(){
    this.subscription= this.shoppingListService.startedEditting
    .subscribe(
      (index:number)=>{
        this.editMode=true;
        this.editedItemIndex=index;
        this.editedItem = this.shoppingListService.getIngredients(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }
  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  onClear(){
    this.slForm.reset();
    this.editMode=false;
  }
  onSubmit(form:NgForm){
    const value = form.value;

    const newIngredient = new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex,newIngredient);
    }else{
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode=false;
    form.reset();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
