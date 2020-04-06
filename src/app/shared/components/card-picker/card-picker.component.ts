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

  constructor() {
  }

  ngOnInit(): void {
  }

  chooseRandomCard(): void {
    // todo: deal when there is no more cards
    let tempCardList = this.cardOptions;
    const index = Math.floor(Math.random() * this.cardOptions.length);
    this.card = tempCardList[index].name + ' ' + tempCardList[index].type;
    console.log(this.card);
    tempCardList.splice(index, 1);
    console.log('tempCardList: ', tempCardList);
  }
}
