import { ShoppingListComponent } from './shopping-list.component';

import {  RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
const routes: Routes = [
  { path: '', component: ShoppingListComponent }  //shopping-list module present in app-routing
]
@NgModule({
imports:[RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ShoppingListRoutingModule {

}