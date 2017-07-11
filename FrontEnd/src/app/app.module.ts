import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
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
import {SharedService} from './shared/services/shared.service';

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
    ReactiveFormsModule,
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
    SharedService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
