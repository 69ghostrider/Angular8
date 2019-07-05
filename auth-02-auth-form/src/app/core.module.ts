import { LoggingService } from './logging.service';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AuthIntercepting } from './auth/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from "@angular/core";

@NgModule({
  providers: [
    ShoppingListService,   //services dont have to be exported as they are by default at root level
    RecipeService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthIntercepting, multi: true },
    LoggingService
  ]
})
export class CoreModule {}
