import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http/http";
import { CommonModule } from "@angular/common";
import { UiComponentsModule } from '../ui-components/ui-components.module';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BootstrapFormComponent } from './forms/bootstrap-form/bootstrap-form.component';
import { EnketoFormComponent } from './forms/enketo-form/enketo-form.component';
import { MaterialFormComponent } from './forms/material-form/material-form.component';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { TaskComponent } from './task/task.component'
import { UserprofileComponent } from './userprofile/userprofile.component'
import { LoginComponent } from './userprofile/login/login.component';
import { RegisterComponent } from './userprofile/register/register.component';
import { FooterComponent } from 'app/shared/footer/footer.component';
import { SharedModule } from "../shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import {NgxPaginationModule} from 'ngx-pagination';

/* Import prismjs core for code hughlits */
import 'prismjs/prism';
/* Import the language you need to highlight */
import 'prismjs/components/prism-markup';
import { PrismComponent } from 'angular-prism';
import { PositionHelper } from '../shared/helpers/postion.helper';
import { FilterPipe } from '../shared/helpers/filter.pipe';
import { SortItemsPipe } from '../shared/helpers/sort.pipe';
import { ColorsComponent } from './style-guide/colors/colors.component';
import { ButtonsComponent } from './style-guide/buttons/buttons.component';
import { SidebarComponent } from './style-guide/sidebar/sidebar.component';
import { BasicFormComponent } from './style-guide/basic-form/basic-form.component';

@NgModule({
  imports:[
    UiComponentsModule,
    SharedModule,
    TranslateModule,
    Ng2PageScrollModule.forRoot(),
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule
  ],
  declarations: [
    BootstrapFormComponent,
    EnketoFormComponent,
    MaterialFormComponent,
    DemoPageComponent,
    StyleGuideComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent,
    TaskComponent,
    UserprofileComponent,
    PrismComponent,
    ColorsComponent,
    ButtonsComponent,
    SidebarComponent,
    BasicFormComponent
  ],
  providers: [
    PositionHelper,
    FilterPipe,
    SortItemsPipe,
    Validators
  ],
  exports: [
    BootstrapFormComponent,
    EnketoFormComponent,
    MaterialFormComponent,
    DemoPageComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    StyleGuideComponent,
    TaskComponent,
    UserprofileComponent,
    PrismComponent
  ]
})
export class PagesModule {}
