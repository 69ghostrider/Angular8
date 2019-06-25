import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService{
   public recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[]  = [
        new Recipe('Test Recipe 1', 'This is simple a test 1', 'https://tinyurl.com/y3vysn2h',[
            new Ingredient('french fries',20)
        ]),
        new Recipe('Test Recipe 2', 'This is simple a test 2', 'https://tinyurl.com/y3vysn2h',[
            new Ingredient('chips',40),new Ingredient('coke',50)
        ]),
      ];
      constructor(private slService: ShoppingListService){}
      getRecipes(){
          return this.recipes.slice();  //returns a copy of the array as we dont want original array to be modified
      }
      
      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

}