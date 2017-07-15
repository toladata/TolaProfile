import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgxDatatableComponent } from './ui-components/tables/ngx-datatable/ngx-datatable.component';
import { BootstrapFormComponent } from './pages/forms/bootstrap-form/bootstrap-form.component';
import { EnketoFormComponent } from './pages/forms/enketo-form/enketo-form.component';
import { MaterialFormComponent } from './pages/forms/material-form/material-form.component';
import { Ng2DragulaComponent } from './ui-components/sorting/ng2-dragula/ng2-dragula.component';
import { StyleGuideComponent } from './pages/style-guide/style-guide.component';
import { DemoPageComponent } from './pages/demo-page/demo-page.component';
import {ListComponent} from './pages/list/list.component';


const appRoutes: Routes = [
  {path: '', component: EnketoFormComponent},
  {path: 'form-enketo', component: EnketoFormComponent},
  {path: 'form-bootstrap', component: BootstrapFormComponent},
  {path: 'form-material', component: MaterialFormComponent},
  {path: 'table-ngx-datatable', component: NgxDatatableComponent},
  {path: 'sorting-dragula', component: Ng2DragulaComponent},
  {path: 'style-guide', component: StyleGuideComponent},
  {path: 'demo', component: DemoPageComponent},
  {path: 'list', component: ListComponent}
];

export const Routing = RouterModule.forRoot(appRoutes);
