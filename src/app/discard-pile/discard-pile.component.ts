import {Component, EventEmitter, Output, TemplateRef, ViewChild} from '@angular/core';
import {Card} from "../models/card";
import {MatDialog} from "@angular/material/dialog";
import {GameService} from "../game.service";

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

  constructor(public dialog: MatDialog, private gameServ: GameService) {
    this.gameServ.addMoveListener(() => {
      this.discardedCards = this.gameServ.getDiscarded();
    })
  }

  public insert(card) {
    this.discardedCards.push(card);
  }
  public discardToDraw() {
    this.discardedCards.forEach(e => {
      this.gameServ.moveCard(e, 'draw'+this.gameServ.player);
    })
  }

  openPile() {
    this.dialog.open(this.dialogRef);
  }

  toHand(card: Card) {
    this.discardedCards = this.discardedCards.filter(e => e !== card);
    this.onHandRequest.emit(card);
  }
}
