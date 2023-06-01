import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes:Recipe[] = [
    new Recipe('Lahmacun','kıyma, domates','https://cdn.yemek.com/uploads/2020/06/tembel-lahamacunu-yemekcom.jpg')
  ];
  constructor() {

  }
  ngOnInit(){

  }
}
