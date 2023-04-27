export class Card {
    public type;
    public name;
    public costToBuy;
    public costToPlay;
    public description;
    public attack;
    public defense;
    public artSrc;

    constructor(data: any) {
        this.type = data.type;
        this.name = data.name;
        this.costToBuy = data.costToBuy;
        this.costToPlay = data.costToPlay;
        this.description = data.description;
        this.attack = data.attack;
        this.defense = data.defense;
        this.artSrc = data.artSrc;
    }

    static copy(card: Card): Card {
        return new Card(card);
    }
}
