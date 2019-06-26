import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';

const appRoutes : Routes = [
    { path: 'users' , component: UsersComponent , children:[
      { path: ':id/:name' , component: UserComponent},
    ]},             //localhost:8084/users  (dont add /)
    { path: '' , component: HomeComponent} ,
    { path: 'servers' , component: ServersComponent, children:[
        { path: ':id/edit' , component: EditServerComponent},
        { path: ':id' , component: ServerComponent}
    ]},
    { path : 'not-found', component : PageNotFoundComponent},
    { path : '**', redirectTo : '/not-found' ,pathMatch: 'full'}  //has to be the last one in the array of routes (wild card route)
    //   
  //   { path: 'servers/:id/edit' , component: EditServerComponent},
  //   { path: 'servers/:id' , component: ServerComponent}    //putting these as children of servers routes
  ];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppLicationRoutingModule{
    

}