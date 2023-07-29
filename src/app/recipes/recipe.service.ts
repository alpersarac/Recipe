import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";


@Injectable()
export class RecipeService{
  recipesChanged = new Subject<Recipe[]>();
  constructor(private shoppingListService:ShoppingListService) { }


  private recipes:Recipe[] = [
    new Recipe('Lahmacun',
    'kıyma, domates',
    'https://cdn.yemek.com/uploads/2020/06/tembel-lahamacunu-yemekcom.jpg',
    [
      new Ingredient("Flour",1),
      new Ingredient("Groundmeat",1)
    ]),
    new Recipe('Turta',
    'şeker, un',
    'https://www.bilgiustam.com/resimler/2015/11/elma.jpg',
    [

      new Ingredient("elma",1),
      new Ingredient("şeker",1)
    ])
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index:number){
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index]= newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
