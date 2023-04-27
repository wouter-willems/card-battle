import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Card} from "../models/card";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  @Input() cardData: Card;
  @Output() onBuy = new EventEmitter<Card>();

  public buy() {
    this.onBuy.emit(Card.copy(this.cardData))
  }
}
