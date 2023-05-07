import {Component, Input} from '@angular/core';
import {Card} from "../models/card";
import {MatDialog} from "@angular/material/dialog";
import {GameService} from "../game.service";

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent {
  @Input() tpl;
  public cards: Array<Card> = [];

  constructor(private gameServ: GameService) {
    this.gameServ.addMoveListener(() => {
      this.cards = this.gameServ.getHand();
    })
  }


  public insert(card: Card) {
    if (card.type === 'trap') {
      card.isHidden = true;
      card.activated = false;
    }
    this.cards = [...this.cards, card];
  }
  public remove(card: Card) {
    this.cards = this.cards.filter((e) => card !== e);
  }
}
