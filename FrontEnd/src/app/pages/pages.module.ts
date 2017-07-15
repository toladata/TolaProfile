import { NgModule } from '@angular/core';
import { UiComponentsModule } from '../ui-components/ui-components.module';
import { BootstrapFormComponent } from './forms/bootstrap-form/bootstrap-form.component';
import { EnketoFormComponent } from './forms/enketo-form/enketo-form.component';
import { MaterialFormComponent } from './forms/material-form/material-form.component';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { SharedModule } from "../shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";
import { Ng2PageScrollModule } from 'ng2-page-scroll';
/* Import prismjs core for code hughlits */
import 'prismjs/prism';
/* Import the language you need to highlight */
import 'prismjs/components/prism-markup';
import { PrismComponent } from 'angular-prism';
import { PositionHelper } from '../shared/helpers/postion.helper';
import { ColorsComponent } from './style-guide/colors/colors.component';
import { ButtonsComponent } from './style-guide/buttons/buttons.component';
import { SidebarComponent } from './style-guide/sidebar/sidebar.component';
import { BasicFormComponent } from './style-guide/basic-form/basic-form.component';



@NgModule({
  imports:[
    UiComponentsModule,
    SharedModule,
    TranslateModule,
    Ng2PageScrollModule.forRoot()
  ],
  declarations: [
    BootstrapFormComponent,
    EnketoFormComponent,
    MaterialFormComponent,
    DemoPageComponent,
    StyleGuideComponent,
    PrismComponent,
    ColorsComponent,
    ButtonsComponent,
    SidebarComponent,
    BasicFormComponent
  ],
  providers: [
    PositionHelper
  ],
  exports: [
    BootstrapFormComponent,
    EnketoFormComponent,
    MaterialFormComponent,
    DemoPageComponent,
    StyleGuideComponent,
    PrismComponent
  ]
})
export class PagesModule {}
