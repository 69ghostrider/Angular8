import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core.module';
import { Sharedmodule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@NgModule({
  declarations: [      // Modules,pipes and sirectives can be declared only in one module
    AppComponent,
    HeaderComponent   //removed dropdown directive,loading spinner and added Shared module in import
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // RecipesModule,   Removed coz we have added lazy loading
    // ShoppingListModule,  //Removed coz we have added lazy loading
    Sharedmodule,
    CoreModule,
    // AuthModule   Removed coz we have added lazy loading
  ], 
  //providers are put in the core.module.ts
  bootstrap: [AppComponent]
})
export class AppModule {}
