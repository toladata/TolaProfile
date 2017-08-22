import { NgModule } from '@angular/core';
import { UiComponentsModule } from '../ui-components/ui-components.module';
import { FooterComponent } from '../layout/footer/footer.component';
import { TaskComponent } from './task/task.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { LoginComponent } from './userprofile/login/login.component';
import { UserprofileService } from './userprofile/userprofile.service';
import { RegisterComponent } from './userprofile/register/register.component';
import { SharedModule } from "../shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import {NgxPaginationModule} from 'ngx-pagination';
import { ModalModule,CollapseModule, AccordionModule, DatepickerModule } from 'ngx-bootstrap';

/* Import prismjs core for code hughlits */
import 'prismjs/prism';
/* Import the language you need to highlight */
import 'prismjs/components/prism-markup';
import { PrismComponent } from 'angular-prism';
import { PositionHelper } from '../shared/helpers/postion.helper';
import { SortItemsPipe } from "app/shared/helpers/sort.pipe";
import { SearchItemsPipe } from "app/shared/helpers/search.pipe";
import { FilterItemsPipe } from "app/shared/helpers/filter.pipe";



@NgModule({
  imports:[
    UiComponentsModule,
    SharedModule,
    TranslateModule,
    Ng2PageScrollModule.forRoot(),
    NgxPaginationModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    DatepickerModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  declarations: [
    FooterComponent,
    TaskComponent,
    LoginComponent,
    RegisterComponent,
    UserprofileComponent,
    PrismComponent,
    SearchItemsPipe,
    FilterItemsPipe,
    SortItemsPipe,
  ],
  providers: [
    PositionHelper,
    UserprofileService
  ],
  exports: [
    TaskComponent,
    LoginComponent,
    RegisterComponent,
    UserprofileComponent,
    PrismComponent
  ]
})
export class PagesModule {}
