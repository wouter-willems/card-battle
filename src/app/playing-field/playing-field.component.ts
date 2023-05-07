import {Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {CdkDragEnd, CdkDragMove, CdkDragStart} from "@angular/cdk/drag-drop";
import {DiscardPileComponent} from "../discard-pile/discard-pile.component";
import {DrawPileComponent} from "../draw-pile/draw-pile.component";
import {Card} from "../models/card";
import {allCards} from "../cardsDB";
import {CardHoldSpaceComponent} from "../card-hold-space/card-hold-space.component";
import {HandComponent} from "../hand/hand.component";
import {GameState} from "../gameState";
import {WsServiceService} from "../ws-service.service";

let allAvailableStandardCards = Object.values(allCards).filter(e => e.type === 'follower' || e.type === 'spell').sort(() => Math.random() - 0.5);
console.log(Object.keys(allCards).length);
@Component({
    selector: 'app-playing-field',
    templateUrl: './playing-field.component.html',
    styleUrls: ['./playing-field.component.scss']
})
export class PlayingFieldComponent {
    zIndexCounter = 100;

    selectedCard: Card;
    permanentShopCards: Array<Card> = [];
    standardShopCards: Array<Card> = [];
    trapShopCards: Array<Card> = Object.values(allCards).filter(e => e.type === 'trap').sort(() => Math.random() - 0.5);

    public player: number;
    public otherPlayerManaStack: Array<Card>;

    @ViewChild('discardPile', {read: ElementRef}) discardPileRef: ElementRef;
    @ViewChild('discardPile', {read: DiscardPileComponent}) discardPile: DiscardPileComponent;
    @ViewChildren(CardHoldSpaceComponent, {read: CardHoldSpaceComponent}) holds: QueryList<CardHoldSpaceComponent>;
    @ViewChild('manaStack', {read: CardHoldSpaceComponent}) manaStack: CardHoldSpaceComponent;
    @ViewChild('drawPile', {read: DrawPileComponent}) drawPile: DrawPileComponent;
    @ViewChild('trash', {read: ElementRef}) trashRef: ElementRef;
    @ViewChild(HandComponent, {read: HandComponent}) handRef: HandComponent;

    @ViewChild('battle1', {read: CardHoldSpaceComponent}) battle1: CardHoldSpaceComponent;
    @ViewChild('battle2', {read: CardHoldSpaceComponent}) battle2: CardHoldSpaceComponent;
    @ViewChild('battle3', {read: CardHoldSpaceComponent}) battle3: CardHoldSpaceComponent;
    @ViewChild('battle4', {read: CardHoldSpaceComponent}) battle4: CardHoldSpaceComponent;
    @ViewChild('battle5', {read: CardHoldSpaceComponent}) battle5: CardHoldSpaceComponent;
    @ViewChild('battle6', {read: CardHoldSpaceComponent}) battle6: CardHoldSpaceComponent;
    @ViewChild('battle7', {read: CardHoldSpaceComponent}) battle7: CardHoldSpaceComponent;
    @ViewChild('battle8', {read: CardHoldSpaceComponent}) battle8: CardHoldSpaceComponent;

    @ViewChild('station1', {read: CardHoldSpaceComponent}) station1: CardHoldSpaceComponent;
    @ViewChild('station2', {read: CardHoldSpaceComponent}) station2: CardHoldSpaceComponent;
    @ViewChild('station3', {read: CardHoldSpaceComponent}) station3: CardHoldSpaceComponent;
    @ViewChild('station4', {read: CardHoldSpaceComponent}) station4: CardHoldSpaceComponent;
    @ViewChild('station5', {read: CardHoldSpaceComponent}) station5: CardHoldSpaceComponent;
    @ViewChild('station6', {read: CardHoldSpaceComponent}) station6: CardHoldSpaceComponent;
    @ViewChild('station7', {read: CardHoldSpaceComponent}) station7: CardHoldSpaceComponent;
    @ViewChild('station8', {read: CardHoldSpaceComponent}) station8: CardHoldSpaceComponent;

    constructor(private ws: WsServiceService) {
        this.permanentShopCards.push(...Object.values(allCards).filter(e => e.type === 'mana'));
        for (let i = 0; i < 6 && allAvailableStandardCards.length > 0; i++) {
            this.standardShopCards.push(allAvailableStandardCards.pop());
        }
        document.addEventListener("keyup", (event) => {
            if (event.key === 'Control') {
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
            this.discardPile.insert(Card.copy(allCards.manaPebble));
            this.discardPile.insert(Card.copy(allCards.manaPebble));
            this.discardPile.insert(Card.copy(allCards.manaPebble));
            this.discardPile.insert(Card.copy(allCards.manaPebble));
            this.discardPile.insert(Card.copy(allCards.manaPebble));
            this.discardPile.insert(Card.copy(allCards.manaPebble));
            this.discardPile.insert(Card.copy(allCards.manaPebble));
            this.discardPile.insert(Card.copy(allCards.manaPebble));
        }, 500);

        this.ws.connect(newState => {
            if (newState === 'connected') {
                return;
            }
            const parsed: GameState = JSON.parse(JSON.parse(newState));

            this.standardShopCards = parsed.standardShopCards;
            allAvailableStandardCards = parsed.allAvailableStandardCards;

            this.trapShopCards = parsed.trapShopCards;

            this.battle1.setCards(parsed.battle1);
            this.battle2.setCards(parsed.battle2);
            this.battle3.setCards(parsed.battle3);
            this.battle4.setCards(parsed.battle4);
            this.battle5.setCards(parsed.battle5);
            this.battle6.setCards(parsed.battle6);
            this.battle7.setCards(parsed.battle7);
            this.battle8.setCards(parsed.battle8);

            this.station1.setCards(parsed.station1);
            this.station2.setCards(parsed.station2);
            this.station3.setCards(parsed.station3);
            this.station4.setCards(parsed.station4);
            this.station5.setCards(parsed.station5);
            this.station6.setCards(parsed.station6);
            this.station7.setCards(parsed.station7);
            this.station8.setCards(parsed.station8);

            if (this.player === 1) {
                this.manaStack.setCards(parsed.player1Mana ?? []);
                this.otherPlayerManaStack = parsed.player2Mana ?? [];
            }
            if (this.player === 2) {
                this.otherPlayerManaStack = parsed.player1Mana ?? [];
                this.manaStack.setCards(parsed.player2Mana ?? []);
            }
        });
    }

    spawnPermanentCard($event: Card) {
        this.discardPile.insert($event);
        this.sendGameState();
    }

    putCardInHand(card: Card) {
        this.handRef.insert(card);
        this.selectedCard = null;
        this.sendGameState();
    }

    spawnStandardCard($event: any) {
        this.discardPile.insert($event);
        this.standardShopCards = this.standardShopCards.filter(e => e.name !== $event.name);
        if (allAvailableStandardCards.length > 0) {
            this.standardShopCards.push(allAvailableStandardCards.pop());
        }
        this.sendGameState();
    }

    spawnTrapCard($event: any) {
        this.putCardInHand($event.bought);
        this.trapShopCards = $event.possible;
        console.log($event.possible);
        this.sendGameState();
    }

    discardPileToDraw() {
        const cards = this.discardPile.emptyDiscardPile();
        this.drawPile.addCards(cards.sort(() => Math.random() - 0.5));
        this.sendGameState();
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
            this.sendGameState();
        }
    }

    private removeCardFromAnyHold() {
        this.handRef.remove(this.selectedCard);
        this.holds.forEach(e => {
            e.remove(this.selectedCard);
            this.sendGameState();
        });
    }

    putCard(stack: CardHoldSpaceComponent) {
        if (this.selectedCard) {
            this.removeCardFromAnyHold();
            stack.insert(this.selectedCard);
            this.selectedCard = null;
            this.sendGameState();
        }
    }

    trashCard() {
        this.removeCardFromAnyHold();
        this.selectedCard = null;
        this.sendGameState();
    }

    sendGameState() {
        const state = new GameState();
        if (this.player === 1) {
            state.player1Mana = this.manaStack.getCards();
            state.player2Mana = this.otherPlayerManaStack;
        }
        if (this.player === 2) {
            state.player1Mana = this.otherPlayerManaStack;
            state.player2Mana = this.manaStack.getCards();
        }
        state.standardShopCards = this.standardShopCards;
        state.allAvailableStandardCards = allAvailableStandardCards;
        state.trapShopCards = this.trapShopCards;

        state.battle1 = this.battle1.getCards();
        state.battle2 = this.battle2.getCards();
        state.battle3 = this.battle3.getCards();
        state.battle4 = this.battle4.getCards();
        state.battle5 = this.battle5.getCards();
        state.battle6 = this.battle6.getCards();
        state.battle7 = this.battle7.getCards();
        state.battle8 = this.battle8.getCards();

        state.station1 = this.station1.getCards();
        state.station2 = this.station2.getCards();
        state.station3 = this.station3.getCards();
        state.station4 = this.station4.getCards();
        state.station5 = this.station5.getCards();
        state.station6 = this.station6.getCards();
        state.station7 = this.station7.getCards();
        state.station8 = this.station8.getCards();

        const stateString = JSON.stringify(state);
        this.ws.send(stateString);
    }

    getOtherPlayerManaStack() {
        return (this.otherPlayerManaStack ?? []).map(e => e.mana ?? 1)
    }

    showCard(card: Card) {
        card.isHidden = false;
        this.sendGameState();
    }
    activateCard(card: Card) {
        card.activated = true;
        this.sendGameState();
    }

    public isOnline() {
        return this.ws.isOnline();
    }
}
