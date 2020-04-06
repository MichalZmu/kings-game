import {Component, OnInit} from '@angular/core';
import {CardOptions} from './card-options';

@Component({
  selector: 'app-card-picker',
  templateUrl: './card-picker.component.html',
  styleUrls: ['./card-picker.component.scss']
})
export class CardPickerComponent implements OnInit {
  cardOptions = CardOptions;
  card: string;
  tempCardList = this.cardOptions;


  constructor() {
  }

  ngOnInit(): void {
  }

  chooseRandomCard(): void {
    if (this.tempCardList.length === 0) {
      this.card = 'no more cards';
    } else {
      const index = Math.floor(Math.random() * this.cardOptions.length);
      this.card = this.tempCardList[index].name + ' ' + this.tempCardList[index].type;
      this.tempCardList.splice(index, 1);
    }
  }
}
