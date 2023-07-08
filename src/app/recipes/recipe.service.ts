import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";


@Injectable()
export class RecipeService{

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
}
