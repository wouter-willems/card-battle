import {Card} from "./models/card";

export enum Attribute {
    SINGLE_USE = 'Single use',
    TRAMPLE = 'Trample'
}

export const allCards = {
    manaPebble: new Card({
        type: 'mana',
        name: 'Mana Pebble',
        costToBuy: 1,
        mana: 1,
        artSrc: 'https://cdnb.artstation.com/p/assets/images/images/011/555/085/large/tommy-hojbjerg-mana.jpg?1530177481'
    }),
    manaCrystal: new Card({
        type: 'mana',
        name: 'Mana Crystal',
        costToBuy: 3,
        mana: 2,
        artSrc: 'https://wow.zamimg.com/uploads/screenshots/normal/518006-ancient-mana-crystal-found-around-suramar.jpg'
    }),
    manaBigCrystal: new Card({
        type: 'mana',
        name: 'Mana Big Crystal',
        costToBuy: 5,
        mana: 3,
        artSrc: 'https://wow.zamimg.com/uploads/screenshots/normal/518006-ancient-mana-crystal-found-around-suramar.jpg'
    }),


    caveBat: new Card({
        type: 'follower',
        name: 'Cave Bat',
        costToBuy: 2,
        artSrc: 'https://i.pinimg.com/originals/35/f1/5f/35f15f1e08fa957f515a8555d6708814.jpg',
        attack: 1,
        defense: 0,
    }),
    squire: new Card({
        type: 'follower',
        name: 'Squire recruit',
        costToBuy: 2,
        artSrc: 'https://cdn.shopify.com/s/files/1/1601/3103/products/SelflessSquirecopy_1200x.jpg?v=1661623380',
        attack: 0,
        defense: 2,
    }),
    scavenger: new Card({
        type: 'follower',
        name: 'Scavenger',
        costToBuy: 4,
        costToPlay: 1,
        description: 'On play:',
        description2: 'Reveal the top card of your deck. If it is mana, play it. Discard it otherwise.',
        artSrc: 'https://cdna.artstation.com/p/assets/images/images/050/338/372/large/lizard-soup-beagle-scavanger-arroba.jpg?1654621161',
        attack: 2,
        defense: 2,
    }),
    swordFighter: new Card({
        type: 'follower',
        name: 'Sword Fighter',
        costToBuy: 4,
        costToPlay: 1,
        artSrc: 'https://i.pinimg.com/originals/7f/e8/6c/7fe86c344ced26f8a2c5ce53f6a13982.jpg',
        attack: 3,
        defense: 2,
    }),
    treasureChest: new Card({
        type: 'follower',
        name: 'Treasure chest',
        costToBuy: 4,
        costToPlay: 1,
        description: 'While stationed:',
        description2: 'Draw 1 extra card during draw phase',
        artSrc: 'https://i.pinimg.com/originals/fc/28/16/fc281611ae7d4c726c33a96ab1f8b37d.jpg',
        attack: 0,
        defense: 1,
    }),
    manaDrake: new Card({
        type: 'follower',
        name: 'Mana Drake',
        costToBuy: 6,
        costToPlay: 1,
        description: 'On attacking enemy player:',
        description2: 'Gain 1 mana crystal and discard it',
        artSrc: 'https://i.pinimg.com/736x/72/9d/3b/729d3bc23735a2851ba3e8e24aeb6c9b--lizards.jpg',
        attack: 3,
        defense: 3,
    }),
    behemoth: new Card({
        type: 'follower',
        name: 'Behemoth',
        costToBuy: 8,
        costToPlay: 3,
        description: 'On block:',
        description2: 'Draw 1 extra card next turn',
        artSrc: 'https://external-preview.redd.it/aJnDihMqSQwTSA1k3hQKRhh57KhJGJenWoPi37zYX-Q.jpg?width=640&crop=smart&auto=webp&s=f710bbd551df21e49623d7ccf1bd01d849c6a5b4',
        attack: 6,
        defense: 5,
        attributes: [Attribute.TRAMPLE]
    }),


    fireball: new Card({
        type: 'spell',
        name: 'Fireball',
        costToBuy: 2,
        costToPlay: 1,
        description: 'Kill an enemy follower that has 3 or less defense.',
        artSrc: 'https://i.pinimg.com/originals/cc/c5/d6/ccc5d6f7c4f114a2baa3ab5c9712ee2e.jpg',
    }),
    weaken: new Card({
        type: 'spell',
        name: 'Weaken',
        costToBuy: 3,
        costToPlay: 1,
        description: `Lower a follower's attack and defense by 2 this turn`,
        artSrc: 'https://i.pinimg.com/originals/cc/c5/d6/ccc5d6f7c4f114a2baa3ab5c9712ee2e.jpg',
    }),
    Alchemy: new Card({
        type: 'spell',
        name: 'Alchemy',
        costToBuy: 3,
        costToPlay: 1,
        description: 'Trash top 2 cards from your mana stack. Gain 1 mana crystal and discard it.',
        artSrc: 'https://wallpapercrafter.com/desktop3/976497-alchemy-artwork-Blood-And-Wine-digital-art-Grey.jpg',
    }),


    counterSpell: new Card({
        type: 'trap',
        name: 'Nullify magic',
        costToBuy: 4,
        costToPlay: 0,
        description: 'On enemy spell cast',
        description2: 'Nullify the last SPELL that is played',
        artSrc: 'https://i.pinimg.com/originals/df/67/2c/df672ccbb4d5f1bac3d8e900ba9154e7.jpg',
        isHidden: true,
    }),
    spikeTrap: new Card({
        type: 'trap',
        name: 'Spike trap',
        costToBuy: 4,
        costToPlay: 0,
        description: 'On enemy summon',
        description2: 'Kill follower that has more than 4 attack',
        artSrc: 'https://cdna.artstation.com/p/assets/images/images/012/191/120/large/legowo-hadi-spike-trap.jpg?1533536614',
        attributes: [Attribute.SINGLE_USE],
        isHidden: true,
    }),
}
