import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Card} from "../models/card";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() cardData: Card;
    @Input() selected: boolean = false;
    @Input() hideCard: boolean = false;
    @Output() onSelect = new EventEmitter<Card>();
    @Output() onShow = new EventEmitter<Card>();
    @Output() onActivate = new EventEmitter<Card>();

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
        return this.cardData.attributes?.length > 0;
    }
}
