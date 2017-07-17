import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {Routing} from './app.routing';
import {AuthConfig, AuthHttp } from 'angular2-jwt';
import { PagesModule } from './pages/pages.module';
import { LayoutModule } from "./layout/layout.module";
import { UiComponentsModule } from './ui-components/ui-components.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from "./landingpage.component";
import {AuthGuard} from './auth-guard';
import {SharedService} from './shared/services/shared.service';
import {ListComponent} from './pages/list/list.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({headerPrefix: 'JWT'}), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LandingpageComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    PagesModule,
    LayoutModule,
    UiComponentsModule,
    Routing,
    Routing,

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
