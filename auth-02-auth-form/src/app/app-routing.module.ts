import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  { path: "recipes", loadChildren: "./recipes/recipes.module#RecipesModule" }, //lazyloading
  {
    path: "shopping-list",
    loadChildren: "./shopping-list/shopping-list.module#ShoppingListModule"
  },
  { path: "auth", loadChildren: "./auth/auth.module#AuthModule" },
]; //put path and #class name

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy: PreloadAllModules})],  
  exports: [RouterModule]   //PreloadAllModules preload lazy loaded modules
})
export class AppRoutingModule {}
