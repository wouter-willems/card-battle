import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PlayingFieldComponent} from './playing-field/playing-field.component';
import {CardComponent} from './card/card.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import { DrawPileComponent } from './draw-pile/draw-pile.component';
import { DiscardPileComponent } from './discard-pile/discard-pile.component';
import { ShopComponent } from './shop/shop.component';
import { HpCounterComponent } from './hp-counter/hp-counter.component';
import {ShopSecretComponent} from "./shop-secret/shop-secret.component";
import {MatDialogModule} from "@angular/material/dialog";
import { CardHoldSpaceComponent } from './card-hold-space/card-hold-space.component';
import { HandComponent } from './hand/hand.component';
import { DbComponent } from './db/db.component';

@NgModule({
    declarations: [
        AppComponent,
        PlayingFieldComponent,
        CardComponent,
        DrawPileComponent,
        DiscardPileComponent,
        ShopComponent,
        HpCounterComponent,
        ShopSecretComponent,
        CardHoldSpaceComponent,
        HandComponent,
        DbComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DragDropModule,
        MatDialogModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
