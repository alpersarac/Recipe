import { Ingredient } from "../shared/ingredient.model";

export class Recipe{
  public name:string;
  public description:string;
  public imagePath:string;
  public ingredients: Ingredient[];

  constructor(name:string, desc:string, imagePath:string, inredients:Ingredient[]) {
    this.name=name;
    this.description=desc;
    this.imagePath=imagePath;
    this.ingredients=inredients;
  }
}
