import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { MainDashboardComponent } from 'src/app/modules/main-dashboard/main-dashboard.component';
import {TranslateModule} from '@ngx-translate/core';



@NgModule({
  declarations: [DefaultComponent,
  MainDashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    TranslateModule
  ]
})
export class DefaultModule { }
