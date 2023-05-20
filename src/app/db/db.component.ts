import { Component } from '@angular/core';
import {Card} from "../models/card";
import {allCards} from "../cardsDB2";

export function removeDuplicatesFromArray(array: Array<any>) {
  return array.filter((c, i) => {
    const firstOccurrenceIndex = array.findIndex((c2) => c2 === c);
    return i === firstOccurrenceIndex;
  });
}

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
  public amountPerType: any;

  constructor() {
    this.allCards = Object.entries(allCards).map(([key, val]) => {
      return val;
    });
    const types = removeDuplicatesFromArray(this.allCards.map(e => e.creatureType));
    this.amountPerType = types.reduce((acc, cur) => {
      return {...acc, [cur]: 0};
    }, {});
    this.allCards.forEach(e => {
      this.amountPerType[e.creatureType]++;
    });

    console.log(this.amountPerType)
    this.basics = this.allCards.filter(e => e.type === 'mana');
    this.creatures = this.allCards.filter(e => e.type === 'creature');
    this.spells = this.allCards.filter(e => e.type === 'spell');
  }
}
