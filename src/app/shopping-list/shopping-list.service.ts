
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
  ingredientChanged = new Subject<Ingredient[]>();

  ingredients : Ingredient[]= [
    new Ingredient('Flour',5),
    new Ingredient('Tomatoes',10)
  ];
  getShoppingList(){
    return this.ingredients.slice();
  }
  addShoppingList(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredient:Ingredient[]){
    this.ingredients.push(...ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
