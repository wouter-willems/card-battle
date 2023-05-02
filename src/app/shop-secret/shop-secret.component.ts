import {Component, EventEmitter, Input, Output, TemplateRef, ViewChild} from '@angular/core';
import {Card} from "../models/card";
import {MatDialog} from "@angular/material/dialog";

@Component({
    selector: 'app-shop-secret',
    templateUrl: './shop-secret.component.html',
    styleUrls: ['./shop-secret.component.scss']
})
export class ShopSecretComponent {
    @Input() possibleCards: Array<Card>;
    @Output() onBuy = new EventEmitter<{bought: Card, possible: Array<Card>}>();
    @ViewChild('dialog') dialogRef = {} as TemplateRef<any>;
    public options: Array<Card>;
    private bought = false;

    constructor(public dialog: MatDialog) {
    }

    public buy() {
        this.bought = false;
        this.options = [];
        for (let i = 0; i < 3 && this.possibleCards.length > 0; i++) {
            this.options.push(this.possibleCards.pop());
        }
        this.dialog.open(this.dialogRef).afterClosed().subscribe(e => {
            if (!this.bought) {
                this.possibleCards.push(...this.options);
            }
        });

    }

    buyCard(option: Card) {
        this.bought = true;
        this.dialog.closeAll();
        this.options.forEach(e => {
            if (e.name !== option.name) {
                this.possibleCards.push(e);
            }
        });
        this.onBuy.emit({bought:option, possible: this.possibleCards});
    }
}
