import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './button/button.component';
import { Ng2DragulaComponent } from './sorting/ng2-dragula/ng2-dragula.component';
import { NgxDatatableComponent } from './tables/ngx-datatable/ngx-datatable.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DragulaModule } from 'ng2-dragula';
import { SelectModule } from 'ng-select';
import { MdCheckboxModule} from '@angular/material';
import { SelectComponent } from './select/select.component';
import { InputInlineComponent } from './input-inline/input-inline.component';
import { SelectInlineComponent } from './select-inline/select-inline.component';
import { CheckboxInlineComponent } from './checkbox-inline/checkbox-inline.component';
import { RadioInlineComponent } from './radio-inline/radio-inline.component';
import { TextHelper } from '../shared/helpers/text.helper';
import { SubmitInlineComponent } from './submit-inline/submit-inline.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ButtonComponent,
    Ng2DragulaComponent,
    NgxDatatableComponent,
    SelectComponent,
    InputInlineComponent,
    SelectInlineComponent,
    CheckboxInlineComponent,
    RadioInlineComponent,
    SubmitInlineComponent
  ],
  providers: [
    TextHelper
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgxDatatableModule,
    DragulaModule,
    MdCheckboxModule,
    SelectModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonComponent,
    Ng2DragulaComponent,
    NgxDatatableComponent,
    NgxDatatableModule,
    DragulaModule,
    MdCheckboxModule,
    SelectComponent,
    InputInlineComponent,
    SelectInlineComponent,
    CheckboxInlineComponent,
    RadioInlineComponent,
    SubmitInlineComponent,
    ReactiveFormsModule
  ]
})
export class UiComponentsModule { }



