import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter <Recipe>();
  recipes: Recipe[]  = [
    new Recipe('Test Recipe 1', 'This is simple a test 1', 'https://tinyurl.com/y3vysn2h'),
    new Recipe('Test Recipe 2', 'This is simple a test 2', 'https://tinyurl.com/y3vysn2h')
  ];
  constructor() { }

  ngOnInit() {
  }
  
  onRecipeSelected(recipele :Recipe){
  this.recipeWasSelected.emit(recipele)
  }
}
