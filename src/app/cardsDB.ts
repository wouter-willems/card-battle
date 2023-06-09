import {Card} from "./models/card";
import {Attribute} from "./cardsDB2";

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
        type: 'creature',
        creatureType: 'winged',
        name: 'Cave Bat',
        costToBuy: 2,
        artSrc: 'https://i.pinimg.com/originals/35/f1/5f/35f15f1e08fa957f515a8555d6708814.jpg',
        attack: 1,
        defense: 0,
    }),
    squire: new Card({
        type: 'creature',
        name: 'Squire recruit',
        costToBuy: 2,
        artSrc: 'https://cdn.shopify.com/s/files/1/1601/3103/products/SelflessSquirecopy_1200x.jpg?v=1661623380',
        attack: 0,
        defense: 2,
    }),
    scholar: new Card({
        type: 'creature',
        name: 'Scholar',
        costToBuy: 2,
        description: 'On play',
        description2: 'Trash 1 card of choice from the shop and replace it.',
        artSrc: '',
        attack: 1,
        defense: 1,
    }),
    rogue: new Card({
        type: 'creature',
        name: 'Rogue',
        costToBuy: 3,
        description: 'On attack',
        description2: 'Enemy discards top card from mana stack',
        artSrc: '',
        attack: 2,
        defense: 0,
    }),
    goblin: new Card({
        type: 'creature',
        name: 'Greedy Goblin',
        costToBuy: 3,
        description: 'On attack',
        description2: 'Draw 1 card',
        artSrc: '',
        attack: 2,
        defense: 0,
    }),
    foreman: new Card({
        type: 'creature',
        name: 'Foreman',
        costToBuy: 3,
        description: 'On play',
        description2: 'Trash 1 card in your hand, take a Mana Crystal and discard it',
        artSrc: '',
        attack: 2,
        defense: 1,
    }),

    witch: new Card({
        type: 'creature',
        name: 'Witch',
        costToBuy: 4,
        costToPlay: 2,
        description: 'On play:',
        description2: 'Reveal a spell from your discard pile. Draw it.',
        artSrc: '',
        attack: 2,
        defense: 2,
    }),
    scavenger: new Card({
        type: 'creature',
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
        type: 'creature',
        name: 'Sword Fighter',
        costToBuy: 4,
        costToPlay: 0,
        artSrc: 'https://i.pinimg.com/originals/7f/e8/6c/7fe86c344ced26f8a2c5ce53f6a13982.jpg',
        attack: 3,
        defense: 2,
    }),
    shieldBearer: new Card({
        type: 'creature',
        name: 'Shield Bearer',
        costToBuy: 4,
        costToPlay: 0,
        artSrc: '',
        attack: 2,
        defense: 3,
    }),
    necromancer: new Card({
        type: 'creature',
        name: 'Necromancer',
        costToBuy: 4,
        costToPlay: 1,
        description: 'On play:',
        description2: 'Trash the top card of your mana stack',
        artSrc: '',
        attack: 4,
        defense: 2,
    }),
    treasureChest: new Card({
        type: 'creature',
        name: 'Treasure chest',
        costToBuy: 4,
        costToPlay: 1,
        description: 'While stationed:',
        description2: 'Draw 1 extra card during draw phase',
        artSrc: 'https://i.pinimg.com/originals/fc/28/16/fc281611ae7d4c726c33a96ab1f8b37d.jpg',
        attack: 0,
        defense: 1,
    }),

    henchMan: new Card({
        type: 'creature',
        name: 'Henchman',
        costToBuy: 5,
        costToPlay: 2,
        description: 'You may place this under a creature to increase its attack and defense by 2 and give it TRAMPLE',
        artSrc: 'https://cdna.artstation.com/p/assets/images/images/009/328/478/large/nicolas-dechezelles-king-s-assassin-a.jpg?1518372283',
        attack: 2,
        defense: 2,
    }),
    myrmidon: new Card({
        type: 'creature',
        name: 'Myrmidon',
        costToBuy: 5,
        costToPlay: 1,
        description: 'On blocking',
        description2: 'Deal 2 damage to enemy player',
        artSrc: '',
        attack: 2,
        defense: 4,
    }),

    manaDrake: new Card({
        type: 'creature',
        name: 'Mana Drake',
        costToBuy: 6,
        costToPlay: 1,
        description: 'On attacking or defending:',
        description2: 'Gain 1 mana crystal and discard it',
        artSrc: 'https://i.pinimg.com/736x/72/9d/3b/729d3bc23735a2851ba3e8e24aeb6c9b--lizards.jpg',
        attack: 3,
        defense: 3,
    }),
    raider: new Card({
        type: 'creature',
        name: 'Village Raider',
        costToBuy: 6,
        costToPlay: 1,
        artSrc: '',
        attack: 5,
        defense: 3,
    }),
    captain: new Card({
        type: 'creature',
        name: 'Siege Captain',
        costToBuy: 6,
        costToPlay: 1,
        artSrc: '',
        attack: 4,
        defense: 4,
    }),
    sergeant: new Card({
        type: 'creature',
        name: 'Training camp Sergeant',
        costToBuy: 6,
        costToPlay: 2,
        description: 'During battle',
        description2: 'Ally creatures gain 1 attack and 1 defense',
        artSrc: '',
        attack: 4,
        defense: 4,
    }),

    warHornBearer: new Card({
        type: 'creature',
        name: 'War Horn Bearer',
        costToBuy: 7,
        costToPlay: 3,
        description: 'On play',
        description2: 'Draw any creature from your discard pile',
        artSrc: '',
        attack: 5,
        defense: 5,
        attributes: []
    }),
    shieldLord: new Card({
        type: 'creature',
        name: 'Shield Lord',
        costToBuy: 7,
        costToPlay: 1,
        artSrc: '',
        attack: 4,
        defense: 7,
        attributes: []
    }),

    behemoth: new Card({
        type: 'creature',
        name: 'Behemoth',
        costToBuy: 8,
        costToPlay: 4,
        description: 'On block:',
        description2: 'Draw 1 card',
        artSrc: 'https://external-preview.redd.it/aJnDihMqSQwTSA1k3hQKRhh57KhJGJenWoPi37zYX-Q.jpg?width=640&crop=smart&auto=webp&s=f710bbd551df21e49623d7ccf1bd01d849c6a5b4',
        attack: 6,
        defense: 5,
        attributes: [Attribute.TRAMPLE]
    }),
    rockGiant: new Card({
        type: 'creature',
        name: 'Rock Giant',
        costToBuy: 8,
        costToPlay: 3,
        artSrc: '',
        attack: 7,
        defense: 5,
        attributes: [Attribute.TRAMPLE]
    }),


    fireball: new Card({
        type: 'spell',
        name: 'Fireball',
        costToBuy: 2,
        costToPlay: 1,
        description: 'Kill an enemy creature that has a maximum of 3 defense.',
        artSrc: 'https://i.pinimg.com/originals/cc/c5/d6/ccc5d6f7c4f114a2baa3ab5c9712ee2e.jpg',
    }),
    staticDischarge: new Card({
        type: 'spell',
        name: 'Static Discharge',
        costToBuy: 2,
        costToPlay: 2,
        description: 'Kill all enemy creatures that have a maximum of 2 attack or 2 defense',
        artSrc: 'https://i.pinimg.com/originals/cc/c5/d6/ccc5d6f7c4f114a2baa3ab5c9712ee2e.jpg',
    }),
    weaken: new Card({
        type: 'spell',
        name: 'Weaken',
        costToBuy: 3,
        costToPlay: 1,
        description: `Lower a creature's attack and defense by 2 this turn`,
        artSrc: '',
    }),
    Alchemy: new Card({
        type: 'spell',
        name: 'Alchemy',
        costToBuy: 3,
        costToPlay: 1,
        description: 'Trash top 2 cards from your mana stack. Gain 1 mana crystal and discard it.',
        artSrc: 'https://wallpapercrafter.com/desktop3/976497-alchemy-artwork-Blood-And-Wine-digital-art-Grey.jpg',
    }),
    burnMana: new Card({
        type: 'spell',
        name: 'Burn Mana',
        costToBuy: 2,
        costToPlay: 3,
        description: 'Enemy discards top 2 mana cards',
        artSrc: '',
    }),
    empower: new Card({
        type: 'spell',
        name: 'Empower',
        costToBuy: 3,
        costToPlay: 2,
        description: 'This creature gains 2 attack and 1 defense',
        artSrc: '',
        attributes: [Attribute.ENCHANTMENT]
    }),
    collateralDamage: new Card({
        type: 'spell',
        name: 'Collateral Damage',
        costToBuy: 4,
        costToPlay: 3,
        description: 'Kill an enemy creature that has max 2 defense. If you do, kill another creature regardless of stats.',
        artSrc: '',
    }),
    defendersAdvantage: new Card({
        type: 'spell',
        name: 'Defenders advantage',
        costToBuy: 4,
        costToPlay: 2,
        description: 'When this creature blocks, immediately draw 1 card',
        artSrc: 'https://c4.wallpaperflare.com/wallpaper/451/405/83/video-games-knights-league-of-legends-fantasy-art-armor-shield-artwork-swords-leona-1680x1050-wal-abstract-fantasy-hd-art-wallpaper-preview.jpg',
        attributes: [Attribute.ENCHANTMENT]
    }),
    blackHole: new Card({
        type: 'spell',
        name: 'Black Hole',
        costToBuy: 4,
        costToPlay: 5,
        description: 'Kill an enemy creature',
        artSrc: '',
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
    eyeForAnEye: new Card({
        type: 'trap',
        name: 'Eye for an eye',
        costToBuy: 4,
        costToPlay: 0,
        description: 'On your creature death',
        description2: 'Kill any enemy creature',
        artSrc: '',
        isHidden: true,
    }),
    manaSight: new Card({
        type: 'trap',
        name: 'Mana Sight',
        costToBuy: 4,
        costToPlay: 0,
        description: 'On enemy summon',
        description2: 'Add a big mana crystal to your discard pile',
        artSrc: '',
        isHidden: true,
        attributes: [Attribute.SINGLE_USE],
    }),
    bearTrap: new Card({
        type: 'trap',
        name: 'Bear Trap',
        costToBuy: 4,
        costToPlay: 0,
        description: 'On enemy summon with max of 3 attack',
        description2: 'Kill that creature',
        artSrc: '',
        isHidden: true,
    }),
    manaSlurp: new Card({
        type: 'trap',
        name: 'Mana Slurp',
        costToBuy: 4,
        costToPlay: 0,
        description: 'On enemy adding big mana crystal to stack',
        description2: 'Take mana crystal from shop and add it to your mana stack',
        artSrc: '',
        isHidden: true,
    }),
    spikeTrap: new Card({
        type: 'trap',
        name: 'Spike trap',
        costToBuy: 4,
        costToPlay: 0,
        description: 'On enemy summon',
        description2: 'Kill a creature that has more than 4 attack',
        artSrc: 'https://cdna.artstation.com/p/assets/images/images/012/191/120/large/legowo-hadi-spike-trap.jpg?1533536614',
        attributes: [Attribute.SINGLE_USE],
        isHidden: true,
    }),
}
