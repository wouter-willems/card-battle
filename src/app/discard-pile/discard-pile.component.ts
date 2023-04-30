import {Component, EventEmitter, Output} from '@angular/core';
import {Card} from "../models/card";

@Component({
  selector: 'app-discard-pile',
  templateUrl: './discard-pile.component.html',
  styleUrls: ['./discard-pile.component.scss']
})
export class DiscardPileComponent {
  public discardedCards: Array<Card> = [];
  @Output() onDiscardRequest = new EventEmitter<void>;

  public insert(card) {
    this.discardedCards.push(card);
  }
  public emptyDiscardPile(): Array<Card> {
    const allCards = [...this.discardedCards];
    this.discardedCards = [];
    return allCards;
  }
}
