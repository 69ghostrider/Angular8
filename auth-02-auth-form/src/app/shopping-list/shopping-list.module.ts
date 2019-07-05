import { Sharedmodule } from './../shared/shared.module';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent      //Replaced Common Module with Shared module in imports as its is shared across
      ],
    //   imports :[RouterModule,CommonModule, FormsModule ,ShoppingListRoutingModule],
      imports :[RouterModule,Sharedmodule, FormsModule ,ShoppingListRoutingModule],  //to get access to routing and form elements like ngIf
      exports: [                                                                 // need to add all the modules we need in the components 
        ShoppingListComponent,
        ShoppingEditComponent                                                       //Although its present in app.module.ts
                                                                            //Dont need to export if we are using it only with the recipes folder
      ]                                                                   //if we remove exports array it will also work
})

export class ShoppingListModule{

}