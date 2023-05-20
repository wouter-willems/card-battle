import { Attribute } from "../cardsDB2";

export type OmitFunctions<T> = Omit<T, { [K in keyof T]: T[K] extends Function ? K : never }[keyof T]>;


function generateRandomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

type CardAttrs = OmitFunctions<Card>;

export class Card {
    public id;
    public type: 'mana' | 'creature' | 'spell' | 'trap';
    public creatureType: 'skeleton' | 'winged' | 'beast' | 'humanoid' | 'ghoul' | 'monstrosity';
    public name: string;
    public costToBuy : number;
    public costToPlay: number;
    public mana: number;
    public description: string;
    public description2: string;
    public power: number;
    public attack: number;
    public defense: number;
    public move: number;
    public artSrc: string;
    public attributes: Array<Attribute>;
    public isHidden: boolean;
    public activated: boolean;
    public ts: number;

    constructor(data: Partial<CardAttrs>) {
        this.id = generateRandomString(30);
        this.type = data.type;
        this.creatureType = data.creatureType;
        this.name = data.name;
        this.costToBuy = data.costToBuy;
        this.mana = data.mana;
        this.costToPlay = data.costToPlay;
        this.description = data.description;
        this.description2 = data.description2;
        this.power = data.power;
        this.attack = data.attack;
        this.defense = data.defense;
        this.move = data.move;
        this.artSrc = data.artSrc?.length > 0 ? data.artSrc : 'https://static.invenglobal.com/upload/image/2019/07/02/o1562078753250134.jpeg';
        this.attributes = data.attributes;
        this.isHidden = data.isHidden ?? false;
        this.activated = data.activated ?? true;
        this.ts = new Date().getTime();
    }

    static copy(card: Card): Card {
        return new Card(card);
    }
}
