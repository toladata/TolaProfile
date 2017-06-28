import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { TaskComponent } from "app/task/task.component";
import {UserprofileModule} from "app/userprofile/userprofile.module";
import {LandingpageComponent} from "app/landingpage.component";

const appRoutes: Routes = [

  { path: 'task', component: TaskComponent },
  {path: 'home', component: LandingpageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    UserprofileModule,
    CommonModule
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class RoutingModule { }
