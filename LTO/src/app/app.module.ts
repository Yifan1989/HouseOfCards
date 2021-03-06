import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { HomeComponent } from './home/home.component';
import { LoginService } from '../services/login.service';
import { NavBottomComponent } from './nav-bottom/nav-bottom.component';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AccountComponent } from './account/account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavTopComponent,
    HomeComponent,
    NavBottomComponent,
    NavLeftComponent,
    CreateUserComponent,
    AccountComponent,
    DashboardComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavTopComponent
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
app.module.ts
app.module.serve.ts
app.module.browser.ts
app.module.shared.ts
*/
