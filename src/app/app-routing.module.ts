import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { MainDashboardComponent } from './modules/main-dashboard/main-dashboard.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children:[{
    path: '',
    component: MainDashboardComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
