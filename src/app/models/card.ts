export class Card {
    public type;
    public name;
    public costToBuy;
    public costToPlay;
    public mana;
    public description;
    public description2;
    public attack;
    public defense;
    public artSrc;
    public attributes;

    constructor(data: any) {
        this.type = data.type;
        this.name = data.name;
        this.costToBuy = data.costToBuy;
        this.mana = data.mana;
        this.costToPlay = data.costToPlay;
        this.description = data.description;
        this.description2 = data.description2;
        this.attack = data.attack;
        this.defense = data.defense;
        this.artSrc = data.artSrc;
        this.attributes = data.attributes;
    }

    static copy(card: Card): Card {
        return new Card(card);
    }
}
