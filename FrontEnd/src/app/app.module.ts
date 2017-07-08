import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import {RoutingModule} from './router/router.module';
import {RouterModule, Routes} from '@angular/router';
import {TaskModule} from './task/task.module';
import {AuthConfig, AuthHttp } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { LandingpageComponent } from "./landingpage.component";
import { UserprofileComponent } from './userprofile/userprofile.component';
import { HeaderComponent } from './shared/header/header.component';
import {AuthGuard} from './auth-guard';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({headerPrefix: 'JWT'}), http, options);
}

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
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    },
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
