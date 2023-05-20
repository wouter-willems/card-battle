import { Component } from '@angular/core';
import {Card} from "../models/card";
import {allCards} from "../cardsDB2";

@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.scss']
})
export class DbComponent {

  public allCards: Array<Card> = [];
  public basics: Array<Card> = [];
  public creatures: Array<Card> = [];
  public spells: Array<Card> = [];

  constructor() {
    this.allCards = Object.entries(allCards).map(([key, val]) => {
      return val;
    });
    console.log(this.allCards)
    this.basics = this.allCards.filter(e => e.type === 'mana');
    this.creatures = this.allCards.filter(e => e.type === 'follower');
    this.spells = this.allCards.filter(e => e.type === 'spell');
  }
}
