import {Card} from "./models/card";

export class GameState {
    player1Mana: Array<Card>;
    player2Mana: Array<Card>;
    standardShopCards: Array<Card>;
    allAvailableStandardCards: Card[];
    battle1: Array<Card>;
    battle2: Array<Card>;
    battle3: Array<Card>;
    battle4: Array<Card>;
    battle5: Array<Card>;
    battle6: Array<Card>;
    battle7: Array<Card>;
    battle8: Array<Card>;

    station1: Array<Card>;
    station2: Array<Card>;
    station3: Array<Card>;
    station4: Array<Card>;
    station5: Array<Card>;
    station6: Array<Card>;
    station7: Array<Card>;
    station8: Array<Card>;
}
