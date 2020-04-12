import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  gameStarted = false;
  cardType: any;

  constructor() { }

  ngOnInit(): void {
  }

  cardTypeCatcher(ev): void {
    this.cardType = ev.split(' - ', 1);
  }

}
