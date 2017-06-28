import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RoutingModule} from './router/router.module';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LandingpageComponent } from "./landingpage.component";
import { UserprofileComponent } from './userprofile/userprofile.component';
import { TaskComponent } from './task/task.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    UserprofileComponent,
    TaskComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
