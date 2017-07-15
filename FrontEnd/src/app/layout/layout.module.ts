import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SubNavComponent } from './header/sub-nav/sub-nav.component';
import { BsDropdownModule, TooltipModule, PaginationModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    PaginationModule.forRoot(),
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    SubNavComponent
  ],
  exports: [
    HeaderComponent,
    SubNavComponent
  ]
})
export class LayoutModule { }
