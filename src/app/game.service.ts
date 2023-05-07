import {Injectable} from '@angular/core';
import {Card} from "./models/card";
import {allCards} from "./cardsDB";

@Injectable({
    providedIn: 'root'
})
export class GameService {

    private cardsById = {};
    private cardsWithDestination = {};
    private moveListeners = [];
    constructor() {
        Object.values(allCards).filter(e => e.type === 'follower' || e.type === 'spell').sort(() => Math.random() - 0.5).forEach(e => {
            this.moveCard(e, 'standardShop');
        })
    }

    public addMoveListener(fn) {
        this.moveListeners.push(fn);
    }
    public moveCard(card: Card, dest: string) {
        card.ts = new Date().getTime()
        this.cardsById[card.id] = card;
        this.cardsWithDestination[card.id] = dest;
        this.moveListeners.forEach(e => e());
    }
    public trashCard(card: Card) {
        this.moveCard(card, 'trash');
    }
    public getDiscarded(): Array<Card> {
        return this.getCardsFromDest('discard1')
    }
    public getHand() {
        return this.getCardsFromDest('hand1')
    }
    public getDraw() {
        return this.getCardsFromDest('draw1')
    }

    public getCardsFromDest(dest: string) {
        return Object.entries(this.cardsWithDestination).filter(([key, val]) => {
            return val === dest;
        }).map(([key, val]) => this.cardsById[key]).sort((a, b)=>{
            return a.ts > b.ts ? 1 : -1;
        });
    }

    public shuffleShop() {

    }
}
