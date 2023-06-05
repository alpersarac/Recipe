import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSeleceted = new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe('Lahmacun','kıyma, domates','https://cdn.yemek.com/uploads/2020/06/tembel-lahamacunu-yemekcom.jpg'),
    new Recipe('Elma','şeker, un','https://www.bilgiustam.com/resimler/2015/11/elma.jpg')
  ];
  constructor() {

  }
  ngOnInit(){

  }
  onRecipeSelected(recipe:Recipe){
    console.log(recipe);
    this.recipeWasSeleceted.emit(recipe);

  }
}
