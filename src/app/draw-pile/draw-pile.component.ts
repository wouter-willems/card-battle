import {Component, EventEmitter, Output} from '@angular/core';
import {Card} from "../models/card";

@Component({
    selector: 'app-draw-pile',
    templateUrl: './draw-pile.component.html',
    styleUrls: ['./draw-pile.component.scss']
})
export class DrawPileComponent {
    public cardsToDraw: Array<Card> = [];
    @Output() onDraw = new EventEmitter<Card>;
    @Output() requestNewPile = new EventEmitter<void>;

    constructor() {

    }

    drawCard() {
        const card = this.cardsToDraw.pop();
        this.onDraw.emit(card);
    }

    addCards(cards: Array<Card>) {
        this.cardsToDraw.push(...cards);
        console.log(cards)
    }
}
