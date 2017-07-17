import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from "app/landingpage.component";
import { TaskComponent } from "app/pages/task/task.component";
import { AuthGuard } from "app/auth-guard";
import { RegisterComponent } from "app/pages/userprofile/register/register.component";
import { LoginComponent } from "app/pages/userprofile/login/login.component";
import { UserprofileComponent } from "app/pages/userprofile/userprofile.component";

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'task', component: TaskComponent, canActivate: [AuthGuard] },
  {path: 'home', component: LandingpageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: UserprofileComponent },
];

export const Routing = RouterModule.forRoot(appRoutes);
