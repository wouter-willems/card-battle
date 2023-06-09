import {ChangeDetectorRef, Injectable, NgZone} from '@angular/core';
import {Card} from "./models/card";
import {allCards} from "./cardsDB2";
import {WsServiceService} from "./ws-service.service";
import {firstValueFrom, Subject} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class GameService {

	private cardsById = {};
	private cardsWithDestination = {};
	private moveListeners = [];
	public player: number;
	private bigViewCard: Card;

	constructor(private ws: WsServiceService) {

	}

	async init() {
		const standards = Object.values(allCards)
		.filter(e => e.type === 'creature' || e.type === 'spell')
		.filter(e => e.buyable)
		;
		let i = 0;
		for (const e of standards.sort(() => Math.random() - 0.5)) {
			await new Promise((resolve, reject) => {
				setTimeout(resolve, 10);
			});
			this.moveCard(e, 'standardShop', standards.length - 1 === i);
			i++;
		}
	}

	public setPlayer(p: number) {
		this.player = p;
	}

	public connectWs(): Promise<boolean> {
		const connectSub = new Subject<boolean>();
		this.ws.connect((msg) => {
			if (msg === 'connected') {
				connectSub.next(true);
				return;
			}
			const json = JSON.parse(msg);
			if (json.type === 'cards') {
				Object.entries(json.data).forEach(e => {
					this.cardsById[e[0]] = e[1];
				});
				this.fireMoveListeners();
				return;
			}
			if (json.type === 'dest') {
				Object.entries(json.data).forEach(e => {
					this.cardsWithDestination[e[0]] = e[1];
				});
				console.log(this.cardsWithDestination);
				console.log(this.cardsById);
				this.fireMoveListeners();
				return;
			}
		})
		return firstValueFrom(connectSub.asObservable());
	}

	public fireMoveListeners() {
		this.moveListeners.forEach(e => e());
	}

	public addMoveListener(fn) {
		this.moveListeners.push(fn);
	}

	public moveCard(card: Card, dest: string, sendGameState = true) {
		card.ts = new Date().getTime();
		const sendAllCards = !this.cardsById[card.id];
		this.cardsById[card.id] = card;
		this.cardsWithDestination[card.id] = dest;
		this.fireMoveListeners();
		if (sendGameState && sendAllCards) {
			this.sendCardsById();
			this.sendCardsDestinations();
			return;
		}
		if (sendGameState) {
			this.sendCardsDestinations(card.id);
		}
	}

	public trashCard(card: Card) {
		this.moveCard(card, 'trash');
	}

	public getDiscarded(): Array<Card> {
		return this.getCardsFromDest('discard' + this.player)
	}

	public getHand() {
		return this.getCardsFromDest('hand' + this.player)
	}

	public getDraw() {
		return this.getCardsFromDest('draw' + this.player)
	}

	public getCardsFromDest(dest: string) {
		return Object.entries(this.cardsWithDestination).filter(([key, val]) => {
			return val === dest;
		}).map(([key, val]) => this.cardsById[key]).sort((a, b) => {
			return a.ts > b.ts ? 1 : -1;
		});
	}

	public sendCardsById() {
		this.ws.send({type: 'cards', data: this.cardsById});
	}

	private sendCardsDestinations(cardId = null) {
		if (cardId) {
			this.ws.send({
				type: 'dest', data: {
					[cardId]: this.cardsWithDestination[cardId]
				}
			});
			return;
		}
		this.ws.send({type: 'dest', data: this.cardsWithDestination});
	}

	public shuffleShop() {

	}


	getBigViewCard(): Card {
		return this.bigViewCard;
	}

	setBigViewCard(c: Card) {
		this.bigViewCard = c;
	}
}
