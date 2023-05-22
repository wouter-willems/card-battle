import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from "../models/card";
import {Attribute, Proc} from "../cardsDB2";
import {GameService} from "../game.service";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
    @Input() cardData: Card;
    @Input() selected: boolean = false;
    @Input() hideCard: boolean = false;
    @Output() onSelect = new EventEmitter<Card>();
    @Output() onShow = new EventEmitter<Card>();
    @Output() onActivate = new EventEmitter<Card>();
    @Input() bigMode = false;

    constructor(private gameService: GameService) {
    }

    ngOnInit() {

    }

    getEffects() {
        if(this.cardData.attributes?.includes(Attribute.RUSH)) {
            return [{
                proc: Proc.WHILE_ON_FIELD,
                effect: 'Move 2 spaces instead of 1'
            }, ...(this.cardData.effects ?? [])];
        }
        return this.cardData.effects ?? [];
    }

    hasAttack() {
        return Number.isFinite(this.cardData.attack) || Number.isFinite(this.cardData.power)
    }

    hasDefense() {
        return Number.isFinite(this.cardData.defense) || Number.isFinite(this.cardData.move)
    }

    showType() {
        return this.cardData.type === 'trap';
    }

    showAttributes() {
        return false;
        return this.cardData.attributes?.length > 0;
    }

    getProcText(prod: Proc) {
        switch (prod) {
            case Proc.ON_PLAY:
                return 'On Play';
            case Proc.ON_BATTLE:
                return 'On Battle';
            case Proc.ON_ATTACK:
                return 'On Attack';
            case Proc.ON_DEFEND:
                return 'On Defend';
            case Proc.WHILE_ON_FIELD:
                return 'While on Field';
        }
        return 'No proc';
    }

    setHover() {
        this.gameService.setBigViewCard(this.cardData);
    }
    undoHover() {
        this.gameService.setBigViewCard(null);
    }
}
