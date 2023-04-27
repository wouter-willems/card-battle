import {Component, Input} from '@angular/core';
import {Card} from "../models/card";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() cardData: Card;

    hasAttack() {
        return Number.isFinite(this.cardData.attack)
    }

    hasDefense() {
        return Number.isFinite(this.cardData.defense)
    }

    showType() {
        return this.cardData.type === 'trap';
    }

    showAttributes() {
        return this.cardData.attributes?.length > 0;
    }
}
