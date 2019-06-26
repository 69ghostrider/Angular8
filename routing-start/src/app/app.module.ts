import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
const appRoutes : Routes = [
  { path: 'users' , component: UsersComponent , children:[
    { path: ':id/:name' , component: UserComponent},
  ]},             //localhost:8084/users  (dont add /)
  { path: '' , component: HomeComponent} ,
  { path: 'servers' , component: ServersComponent, children:[
      { path: ':id/edit' , component: EditServerComponent},
      { path: ':id' , component: ServerComponent}
  ]},
  //   
//   { path: 'servers/:id/edit' , component: EditServerComponent},
//   { path: 'servers/:id' , component: ServerComponent}    //putting these as children of servers routes
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
