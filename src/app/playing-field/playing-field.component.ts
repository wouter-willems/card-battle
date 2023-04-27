import {Component, ElementRef, ViewChild} from '@angular/core';
import {CdkDragEnd, CdkDragStart} from "@angular/cdk/drag-drop";
import {DiscardPileComponent} from "../discard-pile/discard-pile.component";
import {DrawPileComponent} from "../draw-pile/draw-pile.component";
import {Card} from "../models/card";
import {allCards} from "../cardsDB";

const allAvailableStandardCards = Object.values(allCards).filter(e => e.type === 'follower' || e.type === 'spell').sort(() => Math.random() - 0.5);
const allAvailableTrapCards = Object.values(allCards).filter(e => e.type === 'trap').sort(() => Math.random() - 0.5);

@Component({
    selector: 'app-playing-field',
    templateUrl: './playing-field.component.html',
    styleUrls: ['./playing-field.component.scss']
})
export class PlayingFieldComponent {
    zIndexCounter = 0;
    byIndex = (i) => i;
    cards: Array<Card> = [];
    permanentShopCards: Array<Card> = [];
    standardShopCards: Array<Card> = [];
    trapShopCards: Array<Card> = [];

    @ViewChild('discardPile', {read: ElementRef}) discardPileRef: ElementRef;
    @ViewChild('discardPile', {read: DiscardPileComponent}) discardPile: DiscardPileComponent;
    @ViewChild('drawPile', {read: DrawPileComponent}) drawPile: DrawPileComponent;
    @ViewChild('trash', {read: ElementRef}) trashRef: ElementRef;

    constructor() {
        this.permanentShopCards.push(...Object.values(allCards).filter(e => e.type === 'mana'));
        for (let i = 0; i < 6 && allAvailableStandardCards.length > 0; i++) {
            this.standardShopCards.push(allAvailableStandardCards.pop());
        }
        for (let i = 0; i < 3 && allAvailableTrapCards.length > 0; i++) {
            this.trapShopCards.push(allAvailableTrapCards.pop());
        }
    }

    onDragStart($event: CdkDragStart) {
        this.zIndexCounter++;
        ($event.event.target as any).parentElement.parentElement.style.zIndex = String(this.zIndexCounter);
    }

    spawnPermanentCard($event: any) {
        this.cards = [...this.cards, $event];
    }

    spawnStandardCard($event: any) {
        this.cards = [...this.cards, $event];
        this.standardShopCards = this.standardShopCards.filter(e => e.name !== $event.name);
        if (allAvailableStandardCards.length > 0) {
            this.standardShopCards.push(allAvailableStandardCards.pop());
        }
    }
    spawnTrapCard($event: any) {
        this.cards = [...this.cards, $event];
        // this.trapShopCards = this.trapShopCards.filter(e => e.name !== $event.name);
        // if (allAvailableStandardCards.length > 0) {
        //     this.trapShopCards.push(allAvailableTrapCards.pop());
        // }
    }


    onDragEnd($event: CdkDragEnd, card) {
        const cardZone = ($event.event.target as HTMLElement).getBoundingClientRect();
        const dropZone = this.discardPileRef.nativeElement.getBoundingClientRect();
        const trashZone = this.trashRef.nativeElement.getBoundingClientRect();
        // dropZone.
        if (cardZone.left > dropZone.left && cardZone.right < dropZone.right && cardZone.top > dropZone.top && cardZone.bottom < dropZone.bottom) {
            // @ts-ignore
            this.discardPile.insert(card);
            this.cards = this.cards.filter(e => e !== card);
            return;
        }
        if (cardZone.top > trashZone.top && cardZone.right < trashZone.right) {
            this.cards = this.cards.filter(e => e !== card);
            return;
        }
    }

    discardPileToDraw() {
        const cards = this.discardPile.emptyDiscardPile();
        this.drawPile.addCards(cards.sort(() => Math.random() - 0.5));
    }
}
