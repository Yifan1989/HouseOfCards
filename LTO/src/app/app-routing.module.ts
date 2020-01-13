import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { CreateUserComponent } from './create-user/create-user.component';


const routes: Routes = [
    { path: "home", component: HomeComponent},
    { path: "createUser", component: CreateUserComponent}
];

@NgModule({
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [
    
  ]
})

export class AppRoutingModule { }
