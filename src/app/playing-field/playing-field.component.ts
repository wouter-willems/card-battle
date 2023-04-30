import {Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {CdkDragEnd, CdkDragMove, CdkDragStart} from "@angular/cdk/drag-drop";
import {DiscardPileComponent} from "../discard-pile/discard-pile.component";
import {DrawPileComponent} from "../draw-pile/draw-pile.component";
import {Card} from "../models/card";
import {allCards} from "../cardsDB";
import {CardHoldSpaceComponent} from "../card-hold-space/card-hold-space.component";
import {HandComponent} from "../hand/hand.component";

const allAvailableStandardCards = Object.values(allCards).filter(e => e.type === 'follower' || e.type === 'spell').sort(() => Math.random() - 0.5);
const allAvailableTrapCards = Object.values(allCards).filter(e => e.type === 'trap').sort(() => Math.random() - 0.5);

@Component({
    selector: 'app-playing-field',
    templateUrl: './playing-field.component.html',
    styleUrls: ['./playing-field.component.scss']
})
export class PlayingFieldComponent {
    zIndexCounter = 100;
    byIndex = (i) => i;
    cards: Array<Card> = [];
    selectedCard: Card;
    permanentShopCards: Array<Card> = [];
    standardShopCards: Array<Card> = [];
    trapShopCards: Array<Card> = [];

    @ViewChild('discardPile', {read: ElementRef}) discardPileRef: ElementRef;
    @ViewChild('discardPile', {read: DiscardPileComponent}) discardPile: DiscardPileComponent;
    @ViewChildren(CardHoldSpaceComponent, {read: CardHoldSpaceComponent}) holds: QueryList<CardHoldSpaceComponent>;
    @ViewChild('manaStack', {read: CardHoldSpaceComponent}) manaStack: CardHoldSpaceComponent;
    @ViewChild('drawPile', {read: DrawPileComponent}) drawPile: DrawPileComponent;
    @ViewChild('trash', {read: ElementRef}) trashRef: ElementRef;
    @ViewChild(HandComponent, {read: HandComponent}) handRef: HandComponent;

    constructor() {
        this.permanentShopCards.push(...Object.values(allCards).filter(e => e.type === 'mana'));
        for (let i = 0; i < 6 && allAvailableStandardCards.length > 0; i++) {
            this.standardShopCards.push(allAvailableStandardCards.pop());
        }
        for (let i = 0; i < 3 && allAvailableTrapCards.length > 0; i++) {
            this.trapShopCards.push(allAvailableTrapCards.pop());
        }
        document.addEventListener("keyup", (event) => {
            if (event.key === 'Control') {
                console.log(this.manaStack);
                this.putCard(this.manaStack);
            }
            if (event.key === ' ') {
                this.drawPile.drawCard();
            }
            if(event.key === 'd') {
                this.discardCard();
            }
        });
    }

    ngOnInit() {
        setTimeout(() => {
            this.putCardInHand(Card.copy(allCards.manaPebble));
            this.putCardInHand(Card.copy(allCards.manaCrystal));
            this.putCardInHand(Card.copy(allCards.manaDrake));
        }, 500);
    }

    onDragStart($event: CdkDragStart) {
        this.zIndexCounter++;
        // ($event.event.target as any).style.position = 'fixed';
        // ($event.event.target as any).style.transform = `translate3d(${($event.event as any).clientX}px, ${($event.event as any).clientY}px, 0px)`;
        ($event.event.target as any).style.zIndex = String(this.zIndexCounter);
    }

    onDragMove($event: CdkDragMove) {
        const target = ($event.event.target as HTMLElement);
        if (target.tagName.toLowerCase() !== 'app-card') {
            return;
        }
        const cardZone = target.getBoundingClientRect();

        this.holds.map(e => e.nativeElement.getBoundingClientRect()).forEach(e => {
            if (
                Math.abs(cardZone.left - e.left) < 30 &&
                Math.abs(cardZone.right - e.right) < 30 &&
                Math.abs(cardZone.top - e.top) < 30 &&
                Math.abs(cardZone.bottom - e.bottom) < 30
            ) {
                target.style.transform = `translate3d(${e.x}px, ${e.y}px, 0px)`;
            }
        });

        const discardDropZone = this.discardPileRef.nativeElement.getBoundingClientRect();
        if (Math.abs(cardZone.x - discardDropZone.x) < 20 && Math.abs(cardZone.y - discardDropZone.y) < 20) {
            target.style.transform = `translate3d(${discardDropZone.x}px, ${discardDropZone.y}px, 0px)`;
        }
    }

    spawnPermanentCard($event: Card) {
        this.discardPile.insert($event);
    }

    putCardInHand(card: Card) {
        this.handRef.insert(card);
        this.selectedCard = null;
    }

    spawnStandardCard($event: any) {
        this.discardPile.insert($event);
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
        const discardDropZone = this.discardPileRef.nativeElement.getBoundingClientRect();
        const trashZone = this.trashRef.nativeElement.getBoundingClientRect();
        if (
            Math.abs(cardZone.left - discardDropZone.left) < 10 &&
            Math.abs(cardZone.right - discardDropZone.right) < 10 &&
            Math.abs(cardZone.top - discardDropZone.top) < 10 &&
            Math.abs(cardZone.bottom - discardDropZone.bottom) < 10
        ) {
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

    getFirstStandCardsBatch() {
        return [
            this.standardShopCards[0],
            this.standardShopCards[1],
            this.standardShopCards[2],
        ].filter(Boolean)
    }

    getSecondStandCardsBatch() {
        return [
            this.standardShopCards[3],
            this.standardShopCards[4],
            this.standardShopCards[5],
        ].filter(Boolean)
    }

    getOffset(card: Card, index: number) {
        return `left: ${index * 40}px; z-index: ${card === this.selectedCard ? 100 : index};`;
    }
    getOffsetVert(card: Card, index: number) {
        return `bottom: ${index * 30}px; z-index: ${card === this.selectedCard ? 100 : index};`;
    }

    selectCard($event: Card) {
        if (this.selectedCard === $event) {
            this.selectedCard = null;
        } else {
            this.selectedCard = $event;
        }
    }

    discardCard() {
        if (this.selectedCard) {
            this.removeCardFromAnyHold();
            this.discardPile.insert(this.selectedCard);
            this.selectedCard = null;
        }
    }

    private removeCardFromAnyHold() {
        this.handRef.remove(this.selectedCard);
        this.holds.forEach(e => {
            e.remove(this.selectedCard);
        });
    }

    putCard(stack: CardHoldSpaceComponent) {
        if (this.selectedCard) {
            this.removeCardFromAnyHold();
            stack.insert(this.selectedCard);
            this.selectedCard = null;
        }
    }

    trashCard() {
        this.removeCardFromAnyHold();
        this.selectedCard = null;
    }
}
