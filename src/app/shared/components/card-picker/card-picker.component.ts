import {Component, OnInit} from '@angular/core';
import {CardOptions} from './card-options';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-card-picker',
  templateUrl: './card-picker.component.html',
  styleUrls: ['./card-picker.component.scss']
})
export class CardPickerComponent implements OnInit {
  cardOptions = CardOptions;
  card: string;
  rule: string;
  description: string;
  tempCardList = JSON.parse(JSON.stringify(this.cardOptions));
  imageIndex: string;
  cardsLeft: number;
  showHelp = false;
  newGame = false;
  currentLang: string;

  constructor(private _translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.currentLang = this._translateService.currentLang;
    this.chooseRandomCard();
  }

  chooseRandomCard(): void {
    this.showHelp = false;
    if (this.tempCardList.cardTypes.length === 0) {
      this.rule = 'No more cards!';
      this.newGame = true;
    } else {
      const index = Math.floor(Math.random() * this.tempCardList.cardTypes.length);
      this.card = this.tempCardList.cardTypes[index].name + '-' + this.tempCardList.cardTypes[index].type;
      this.imageIndex = 'assets/img/cards/' + this.card + '.png';
      this.tempCardList.cardTypes.splice(index, 1);
      this.getRule(this.card);
      this.cardsLeftCounter();
    }
  }

  getRule(card): void {
    const ruleIndex = card.split('-', 1);
    this.rule = this.cardOptions.cardRules.find(el => el.number === ruleIndex[0]).rule;
    this.description = this.cardOptions.cardRules.find(el => el.number === ruleIndex[0]).description[this.currentLang];
  }

  cardsLeftCounter(): void {
    this.cardsLeft = this.tempCardList.cardTypes.length;
  }

  startNewGame(): void {
    this.tempCardList = JSON.parse(JSON.stringify(this.cardOptions));
    this.chooseRandomCard();
    this.newGame = false;
  }
}
