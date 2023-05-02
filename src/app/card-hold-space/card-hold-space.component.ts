import {Component, ElementRef, Input} from '@angular/core';
import {Card} from "../models/card";

@Component({
  selector: 'app-card-hold-space',
  templateUrl: './card-hold-space.component.html',
  styleUrls: ['./card-hold-space.component.scss']
})
export class CardHoldSpaceComponent {
  @Input() tpl;

  get nativeElement() {
    return this.elementRef.nativeElement;
  }

  constructor(private elementRef: ElementRef) {}

  public cards: Array<Card> = [];

  public insert(card: Card) {
    this.cards = [...this.cards, card];
  }
  public remove(card: Card) {
    this.cards = this.cards.filter((e) => card !== e);
  }
  public getCards() {
    return this.cards;
  }
  public setCards(cards: Array<Card>) {
    this.cards = cards;
  }
}
