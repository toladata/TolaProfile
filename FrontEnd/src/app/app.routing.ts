import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LandingpageComponent } from "./landingpage.component";
import { TaskComponent } from "./pages/task/task.component";
import { LoginComponent } from "./pages/userprofile/login/login.component";
import { RegisterComponent } from "./pages/userprofile/register/register.component";
import { UserprofileComponent } from "./pages/userprofile/userprofile.component";


const appRoutes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'home', component: LandingpageComponent },
  { path: 'task', component: TaskComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: UserprofileComponent }
];

export const Routing = RouterModule.forRoot(appRoutes);
