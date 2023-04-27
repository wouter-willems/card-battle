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

@NgModule({
    declarations: [
        AppComponent,
        PlayingFieldComponent,
        CardComponent,
        DrawPileComponent,
        DiscardPileComponent,
        ShopComponent,
        HpCounterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DragDropModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
