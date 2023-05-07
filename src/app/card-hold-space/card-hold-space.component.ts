import {Component, ElementRef, Input} from '@angular/core';
import {Card} from "../models/card";
import {GameService} from "../game.service";

@Component({
  selector: 'app-card-hold-space',
  templateUrl: './card-hold-space.component.html',
  styleUrls: ['./card-hold-space.component.scss']
})
export class CardHoldSpaceComponent {
  @Input() tpl;
  @Input() dest;
  public cards: Array<Card> = [];

  get nativeElement() {
    return this.elementRef.nativeElement;
  }

  constructor(private elementRef: ElementRef, private gameServ: GameService) {
    this.gameServ.addMoveListener(() => {
      this.cards = this.gameServ.getCardsFromDest(this.dest);
    })
  }


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
