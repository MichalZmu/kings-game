import {Component, Injectable, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  gameStarted = false;
  cardType: any;
  selectedLanguage: any;

  constructor(private _translateService: TranslateService) { }

  ngOnInit(): void {
    this.selectedLanguage = this._translateService.currentLang;
    this._translateService.onLangChange.subscribe(data => {
      this.selectedLanguage = data.lang;
    });
  }

  cardTypeCatcher(ev): void {
    this.cardType = ev.split(' - ', 1);
  }

  selectLanguage(lang: string): void {
    this._translateService.use(lang);
  }

}
