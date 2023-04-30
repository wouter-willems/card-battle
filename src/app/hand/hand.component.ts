import {Component, Input} from '@angular/core';
import {Card} from "../models/card";

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent {
  @Input() tpl;

  public cards: Array<Card> = [];

  public insert(card: Card) {
    this.cards = [...this.cards, card];
  }
  public remove(card: Card) {
    this.cards = this.cards.filter((e) => card !== e);
  }
}
