
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
  ingredientChanged = new Subject<Ingredient[]>();
  startedEditting = new Subject<number>();
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
  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredient:Ingredient[]){
    this.ingredients.push(...ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }
  getIngredients(index:number){
    return this.ingredients[index];
  }
  updateIngredient(index:number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }
  deleteIngredient(index:number){
    this.ingredients.splice(index,1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
