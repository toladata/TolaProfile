import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RoutingModule} from './router/router.module';
import {RouterModule, Routes} from '@angular/router';
import {TaskModule} from './task/task.module';
import { provideAuth }    from 'angular2-jwt';

import { AppComponent } from './app.component';
import { LandingpageComponent } from "./landingpage.component";
import { UserprofileComponent } from './userprofile/userprofile.component';
import { HeaderComponent } from './shared/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    UserprofileComponent,
    HeaderComponent,
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    TaskModule,
    
  ],
  providers: [
    provideAuth({
      headerPrefix: 'JWT'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
