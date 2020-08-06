import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CardPickerComponent } from './components/card-picker/card-picker.component';
import {TranslateModule} from '@ngx-translate/core';



@NgModule({
  declarations: [
    HeaderComponent,
    CardPickerComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    HeaderComponent,
    CardPickerComponent
  ]
})
export class SharedModule { }
