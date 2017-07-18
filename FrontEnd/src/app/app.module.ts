import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { LayoutModule } from './layout/layout.module';
import { UiComponentsModule } from './ui-components/ui-components.module';
import { SharedModule } from './shared/shared.module';
import { Routing } from './app.routing'
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './shared/effects/user';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import reducer from './shared/reducers/index';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { LandingpageComponent } from './landingpage.component';
import {AuthConfig, AuthHttp } from 'angular2-jwt';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, 'http://demo-redux-vadimn92.c9users.io/i18n/', '-lang.json');
}

//angular2-jwt configurations
export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({headerPrefix: 'JWT'}), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    PagesModule,
    UiComponentsModule,
    Routing,
    EffectsModule,
    EffectsModule.run(UserEffects),
    StoreModule.provideStore( reducer ),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

