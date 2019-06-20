import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]  = [
    new Recipe('Test Recipe', 'This is simple a test', 'https://tinyurl.com/y3vysn2h'),
    new Recipe('Test Recipe', 'This is simple a test', 'https://tinyurl.com/y3vysn2h')
  ];
  constructor() { }

  ngOnInit() {
  }

}
