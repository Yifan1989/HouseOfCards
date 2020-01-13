import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AccountComponent } from './account/account.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "createUser", component: CreateUserComponent},
    { path: "account", component: AccountComponent },
    { path: "contact", component: ContactComponent },
    { path: "dashboard", component: DashboardComponent }
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
