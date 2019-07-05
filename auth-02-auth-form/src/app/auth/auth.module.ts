import { AuthRoutingModule } from './auth-routing.module';
import { Sharedmodule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations:[AuthComponent],  //componenets in folder
    imports:[RouterModule,FormsModule,Sharedmodule,AuthRoutingModule],  //what we need in component
    exports:[AuthComponent]  //what we want to use in other folder
})
export class AuthModule{

}