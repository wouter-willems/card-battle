import {Component, EventEmitter, Output} from '@angular/core';
import {Card} from "../models/card";
import {GameService} from "../game.service";

@Component({
    selector: 'app-draw-pile',
    templateUrl: './draw-pile.component.html',
    styleUrls: ['./draw-pile.component.scss']
})
export class DrawPileComponent {
    public cardsToDraw: Array<Card> = [];
    @Output() requestNewPile = new EventEmitter<void>;

    constructor(private gameServ: GameService) {
        this.gameServ.addMoveListener(() => {
            this.cardsToDraw = this.gameServ.getDraw();
        })
    }

    drawCard() {
        if (this.cardsToDraw.length === 0) {
            this.requestNewPile.emit();
            return;
        }
        const card = this.cardsToDraw.pop();
        this.gameServ.moveCard(card, 'hand'+this.gameServ.player);
    }

    addCards(cards: Array<Card>) {
        this.cardsToDraw.push(...cards);
        console.log(cards)
    }
}
