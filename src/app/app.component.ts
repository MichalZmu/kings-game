import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kings-game';

  constructor(private _translateService: TranslateService) {
    this._translateService.addLangs(['en', 'pl']);
    this._translateService.use('en');
  }
}
