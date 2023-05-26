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
        const otherEffects = [];
        if(this.cardData.attributes?.includes(Attribute.RUSH)) {
            otherEffects.push({
                proc: Proc.WHILE_IN_PLAY,
                effect: 'Move 2 spaces instead of 1'
            });
        }
        if(this.cardData.attributes?.includes(Attribute.STATIONARY)) {
            otherEffects.push({
                proc: Proc.WHILE_IN_PLAY,
                effect: 'Can not move or be moved'
            });
        }
        return [...this.cardData.effects ?? [], ...otherEffects];
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
            case Proc.ON_ENEMY_ENCOUNTER:
                return 'On Enemy Encounter';
            case Proc.ON_ENEMY_LAND:
                return 'On Enemy Land';
            case Proc.ON_OWN_LAND:
                return 'On Own Land';
            case Proc.WHILE_IN_PLAY:
                return 'While in Play';
            case Proc.ON_DEATH:
                return 'On Death';
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
