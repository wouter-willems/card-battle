import {Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {DiscardPileComponent} from "../discard-pile/discard-pile.component";
import {DrawPileComponent} from "../draw-pile/draw-pile.component";
import {Card} from "../models/card";
import {allCards} from "../cardsDB2";
import {CardHoldSpaceComponent} from "../card-hold-space/card-hold-space.component";
import {HandComponent} from "../hand/hand.component";
import {WsServiceService} from "../ws-service.service";
import {GameService} from "../game.service";


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
    firstShopBatch: Array<Card> = [];
    secondShopBatch: Array<Card> = [];
    thirdShopBatch: Array<Card> = [];

    public player: number;
    public otherPlayerManaStack: Array<Card>;

    @ViewChild('discardPile', {read: ElementRef}) discardPileRef: ElementRef;
    @ViewChild('discardPile', {read: DiscardPileComponent}) discardPile: DiscardPileComponent;
    @ViewChildren(CardHoldSpaceComponent, {read: CardHoldSpaceComponent}) holds: QueryList<CardHoldSpaceComponent>;
    @ViewChild('manaStack', {read: CardHoldSpaceComponent}) manaStack: CardHoldSpaceComponent;
    @ViewChild('drawPile', {read: DrawPileComponent}) drawPile: DrawPileComponent;
    @ViewChild('trash', {read: ElementRef}) trashRef: ElementRef;
    @ViewChild('bigViewRef', {read: ElementRef}) bigViewRef: ElementRef;
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

    constructor(private ws: WsServiceService, private gameServ: GameService) {
        this.permanentShopCards.push(...Object.values(allCards).filter(e => e.type === 'mana'));
        // for (let i = 0; i < 6 && allAvailableStandardCards.length > 0; i++) {
        //     this.standardShopCards.push(allAvailableStandardCards.pop());
        // }
        document.addEventListener("keyup", (event) => {
            if (event.key === 'm') {
                this.putCard('mana' + this.player);
            }
            if (event.key === 'a') {
                this.drawPile.drawCard();
            }
            if(event.key === 'd') {
                this.discardCard();
            }
        });

        document.addEventListener('mousemove', e => {
            if (this.bigViewRef?.nativeElement) {
                this.bigViewRef.nativeElement.style.top = `${Math.max(0, Math.min(e.clientY - 120, document.body.clientHeight - 320))}px`;
                this.bigViewRef.nativeElement.style.left = `${e.clientX + 10}px`;
            }
        })
    }

    ngOnInit () {
        // this.playerChosen(1);
    }

    async playerChosen(p: number) {
        this.player = p;
        this.gameServ.setPlayer(p);
        await this.gameServ.connectWs();
        console.log('connected');

        this.gameServ.addMoveListener(() => {
            const c = this.gameServ.getCardsFromDest('standardShop');
            this.firstShopBatch = [
                c[0],
                c[1],
                c[2],
            ].filter(Boolean);

            this.secondShopBatch = [
                c[3],
                c[4],
                c[5],
            ].filter(Boolean)

            this.thirdShopBatch = [
                c[6],
                c[7],
                c[8],
            ].filter(Boolean)
        })

        if (this.player === 1) {
            this.gameServ.init();
            // this.gameServ.moveCard(Card.copy(allCards.manaPebble), 'discard'+this.player);
            // this.gameServ.moveCard(Card.copy(allCards.manaCrystal), 'discard'+this.player);
            // this.gameServ.moveCard(Card.copy(allCards.manaBigCrystal), 'discard'+this.player);
            this.gameServ.shuffleShop();
        }


        // this.ws.connect(newState => {
        //     if (newState === 'connected') {
        //         return;
        //     }
        //     const parsed: GameState = JSON.parse(JSON.parse(newState));
        //
        //     this.standardShopCards = parsed.standardShopCards;
        //     // allAvailableStandardCards = parsed.allAvailableStandardCards;
        //
        //     this.trapShopCards = parsed.trapShopCards;
        //
        //     this.battle1.setCards(parsed.battle1);
        //     this.battle2.setCards(parsed.battle2);
        //     this.battle3.setCards(parsed.battle3);
        //     this.battle4.setCards(parsed.battle4);
        //     this.battle5.setCards(parsed.battle5);
        //     this.battle6.setCards(parsed.battle6);
        //     this.battle7.setCards(parsed.battle7);
        //     this.battle8.setCards(parsed.battle8);
        //
        //     this.station1.setCards(parsed.station1);
        //     this.station2.setCards(parsed.station2);
        //     this.station3.setCards(parsed.station3);
        //     this.station4.setCards(parsed.station4);
        //     this.station5.setCards(parsed.station5);
        //     this.station6.setCards(parsed.station6);
        //     this.station7.setCards(parsed.station7);
        //     this.station8.setCards(parsed.station8);
        //
        //     if (this.player === 1) {
        //         this.manaStack.setCards(parsed.player1Mana ?? []);
        //         this.otherPlayerManaStack = parsed.player2Mana ?? [];
        //     }
        //     if (this.player === 2) {
        //         this.otherPlayerManaStack = parsed.player1Mana ?? [];
        //         this.manaStack.setCards(parsed.player2Mana ?? []);
        //     }
        // });
    }

    spawnPermanentCard(card: Card) {
        this.gameServ.moveCard(card, 'discard'+this.gameServ.player);
    }

    putCardInHand(card: Card) {
        this.gameServ.moveCard(card, 'hand'+this.gameServ.player);
        this.selectedCard = null;
    }

    spawnStandardCard(card: Card) {
        this.gameServ.moveCard(card, 'discard'+this.gameServ.player);
    }

    spawnTrapCard($event: any) {
        this.putCardInHand($event.bought);
        this.trapShopCards = $event.possible;
    }

    discardPileToDraw() {
        this.discardPile.discardToDraw();
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
            this.gameServ.moveCard(this.selectedCard, 'discard'+this.player);
            this.selectedCard = null;
        }
    }

    putCard(dest: string) {
        if (this.selectedCard) {
            this.gameServ.moveCard(this.selectedCard, dest);
            this.selectedCard = null;
        }
    }

    trashCard() {
        if (this.selectedCard) {
            this.gameServ.moveCard(this.selectedCard, 'trash');
            this.selectedCard = null;
        }
    }

    getOtherPlayerManaStack() {
        const  manaDest = 'mana' + (this.player === 1 ? '2' : '1');
        const otherStack = this.gameServ.getCardsFromDest(manaDest)
        return (otherStack ?? []).map(e => e.mana ?? 1)
    }
    getOtherPlayerHand() {
        const dest = 'hand' + (this.player === 1 ? '2' : '1');
        const otherStack = this.gameServ.getCardsFromDest(dest);
        return otherStack.length;
        // return (otherStack ?? []).map(e => e.mana ?? 1)
    }

    showCard(card: Card) {
        card.isHidden = false;
    }
    activateCard(card: Card) {
        card.activated = true;
    }

    public isOnline() {
        return this.ws.isOnline();
    }

    getManaDest() {
        return 'mana' + this.player;
    }

    getBigViewCard() {
        return this.gameServ.getBigViewCard();
    }
}
