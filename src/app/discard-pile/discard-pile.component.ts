import {Component, EventEmitter, Output, TemplateRef, ViewChild} from '@angular/core';
import {Card} from "../models/card";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-discard-pile',
  templateUrl: './discard-pile.component.html',
  styleUrls: ['./discard-pile.component.scss']
})
export class DiscardPileComponent {
  public discardedCards: Array<Card> = [];
  @Output() onDiscardRequest = new EventEmitter<void>;
  @Output() onHandRequest = new EventEmitter<Card>;
  @ViewChild('dialog') dialogRef = {} as TemplateRef<any>;

  constructor(public dialog: MatDialog) {
  }

  public insert(card) {
    this.discardedCards.push(card);
  }
  public emptyDiscardPile(): Array<Card> {
    const allCards = [...this.discardedCards];
    this.discardedCards = [];
    return allCards;
  }

  openPile() {
    this.dialog.open(this.dialogRef);
  }

  toHand(card: Card) {
    this.discardedCards = this.discardedCards.filter(e => e !== card);
    this.onHandRequest.emit(card);
  }
}
