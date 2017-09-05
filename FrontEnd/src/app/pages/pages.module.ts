import { NgModule } from '@angular/core';
import { UiComponentsModule } from '../ui-components/ui-components.module';
import { FooterComponent } from '../layout/footer/footer.component';
import { TaskComponent } from './task/task.component';
import { TaskItemComponent } from "./task/taskItem.component";
import { UserprofileComponent } from './userprofile/userprofile.component';
import { LoginComponent } from './userprofile/login/login.component';
import { UserprofileService } from './userprofile/userprofile.service';
import { RegisterComponent } from './userprofile/register/register.component';
import { SharedModule } from "../shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import {NgxPaginationModule} from 'ngx-pagination';
import { ModalModule,CollapseModule, AccordionModule, DatepickerModule, AlertModule } from 'ngx-bootstrap';
import {SelectModule} from 'ng2-select';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';


/* Import prismjs core for code hughlits */
//import 'prismjs/prism';
/* Import the language you need to highlight */
//import 'prismjs/components/prism-markup';
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
    AlertModule.forRoot(),
    SelectModule,
    NgxMyDatePickerModule.forRoot()

  ],
  declarations: [
    FooterComponent,
    TaskComponent,
    TaskItemComponent,
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
    PrismComponent,

  ]
})
export class PagesModule {}
