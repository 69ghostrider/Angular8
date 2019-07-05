import { Sharedmodule } from './../shared/shared.module';
import { RecipesRoutingModule } from './recipes-routing.module';

import { RecipesComponent } from "./recipes.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent      //CommonModule replaced with shared module in imports
  ],
  imports :[RouterModule,Sharedmodule, ReactiveFormsModule,RecipesRoutingModule],  //to get access to routing and form elements like ngIf
  exports: [                                                  // need to add all the modules we need in the components 
                                                            //Although its present in app.module.ts
    RecipesComponent,                                        //Common module for ngIf ngFor etc
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,        //whatever is declared must be exported
    RecipeEditComponent          //Dont need to export if we are using it only with the recipes folder
  ]                              //if we remove exports array it will also work
})
export class RecipesModule {}
