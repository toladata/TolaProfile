import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from 'app/shared/footer/footer.component';
import {TaskComponent} from 'app/task/task.component';
import {CreateTaskComponent} from 'app/task/createTask.component';

const appRoutes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    TaskComponent,
    CreateTaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [Validators],
})
export class UserprofileModule { }
