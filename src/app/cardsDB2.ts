import {Card} from "./models/card";

export enum Attribute {
    SINGLE_USE = 'Single use',
    TRAMPLE = 'Trample',
    ENCHANTMENT = 'Enchantment',
    STATIONARY = 'Stationary',
    RUSH = 'Rush',
}

export const allCards = {
    manaPebble: new Card({
        type: 'mana',
        name: 'Mana Pebble',
        costToBuy: 1,
        mana: 1,
        artSrc: 'mana-pebble2.jpeg'
    }),
    manaCrystal: new Card({
        type: 'mana',
        name: 'Mana Rock',
        costToBuy: 3,
        mana: 2,
        artSrc: 'mana-rock.jpeg'
    }),
    manaBigCrystal: new Card({
        type: 'mana',
        name: 'Mana Crystal',
        costToBuy: 5,
        mana: 3,
        artSrc: 'mana-crystal.jpeg'
    }),


    caveBat: new Card({
        type: 'creature',
        creatureType: 'winged',
        name: 'Cave Bat',
        costToBuy: 2,
        artSrc: 'bat.jpeg',
        power: 1,
        move: 2,
        attributes: [Attribute.RUSH],
    }),
    squire: new Card({
        type: 'creature',
        creatureType: 'ghoul',
        name: 'Squire recruit',
        costToBuy: 2,
        artSrc: 'squire.jpeg',
        power: 0,
        move: 1,
        description: 'On defend',
        description2: 'Power in battle is increased by 2',
    }),
    scholar: new Card({
        type: 'creature',
        creatureType: 'skeleton',
        name: 'Scholar',
        costToBuy: 2,
        description: 'On play',
        description2: 'You may discard 1 card from your hand to draw a card',
        artSrc: 'scholar.jpeg',
        power: 1,
        move: 1,
    }),
    rogue: new Card({
        type: 'creature',
        creatureType: 'humanoid',
        name: 'Rogue',
        costToBuy: 3,
        description: 'On attack',
        description2: 'Enemy discards top card from mana stack',
        artSrc: 'rogue.jpeg',
        power: 1,
        move: 1,
    }),
    goblin: new Card({
        type: 'creature',
        creatureType: 'humanoid',
        name: 'Greedy Goblin',
        costToBuy: 3,
        description: 'On battle',
        description2: 'Draw 1 card',
        artSrc: 'goblin.jpeg',
        power: 1,
        move: 1,
    }),
    raven: new Card({
        type: 'creature',
        creatureType: 'winged',
        name: 'Raven',
        costToBuy: 3,
        description: 'On play',
        description2: 'Trash 1 card in your hand, take a Mana Crystal and discard it',
        artSrc: '',
        power: 1,
        move: 1,
    }),

    witch: new Card({
        type: 'creature',
        creatureType: 'humanoid',
        name: 'Witch',
        costToBuy: 4,
        costToPlay: 2,
        description: 'On play',
        description2: 'Reveal a spell from your discard pile. Draw it.',
        artSrc: 'witch.jpeg',
        power: 2,
        move: 1,
    }),
    scavenger: new Card({
        type: 'creature',
        creatureType: 'ghoul',
        name: 'Scavenger',
        costToBuy: 4,
        costToPlay: 1,
        description: 'On play',
        description2: 'Reveal the top card of your deck. If it is mana, play it. Discard it otherwise.',
        artSrc: 'scavenger.jpeg',
        power: 2,
        move: 1,
    }),
    swordFighter: new Card({
        type: 'creature',
        creatureType: 'skeleton',
        name: 'Fallen swordsman',
        flavour: `Originally known as 'Leo the Bold', fallen in times of the Great War. Not by battle, but because he didn't do the dishes.`,
        costToBuy: 4,
        costToPlay: 0,
        artSrc: 'sword-fighter.jpeg',
        power: 2,
        move: 1,
    }),
    shieldBearer: new Card({
        type: 'creature',
        creatureType: 'skeleton',
        name: 'Shield Bearer',
        costToBuy: 4,
        costToPlay: 0,
        artSrc: 'shield-bearer.jpeg',
        power: 1,
        move: 1,
        description: 'On defend',
        description2: 'Power in battle is increased by 2',
    }),
    corruptedWizard: new Card({
        type: 'creature',
        creatureType: 'humanoid',
        name: 'Corrupted Monk',
        costToBuy: 4,
        costToPlay: 1,
        description: 'On play',
        description2: 'Trash the top card of your mana stack',
        artSrc: 'corrupted-monk.jpeg',
        power: 3,
        move: 1,
    }),
    treasureChest: new Card({
        type: 'creature',
        creatureType: 'humanoid',
        name: 'Enchanted Chest',
        costToBuy: 4,
        costToPlay: 3,
        description: 'While on field',
        description2: 'Draw 1 extra card during draw phase',
        artSrc: 'treasure-chest.jpeg',
        power: 0,
        move: 0,
        attributes: [Attribute.STATIONARY],
    }),

    henchMan: new Card({
        type: 'creature',
        creatureType: 'skeleton',
        name: 'Undead mage',
        costToBuy: 5,
        costToPlay: 2,
        description: 'On play',
        description2: 'You may place this under a creature to increase its power by 2',
        artSrc: 'undead-mage.jpeg',
        power: 2,
        move: 1,
    }),
    myrmidon: new Card({
        type: 'creature',
        creatureType: 'skeleton',
        name: 'Myrmidon',
        costToBuy: 5,
        costToPlay: 1,
        description: 'On defend',
        description2: 'Power in battle in increased by 2. Also deal 2 damage to enemy player',
        artSrc: 'myrmidon.jpeg',
        power: 2,
        move: 0,
    }),

    manaDrake: new Card({
        type: 'creature',
        creatureType: 'winged',
        name: 'Mana Drake',
        costToBuy: 6,
        costToPlay: 1,
        description: 'On battle',
        description2: 'Gain 1 mana crystal and discard it',
        artSrc: 'mana-drake-c.jpeg',
        power: 3,
        move: 1,
    }),
    raider: new Card({
        type: 'creature',
        creatureType: 'skeleton',
        name: 'Village Raider',
        costToBuy: 6,
        costToPlay: 1,
        artSrc: 'raider.jpeg',
        power: 3,
        move: 2,
        attributes: [Attribute.RUSH],
    }),
    captain: new Card({
        type: 'creature',
        creatureType: 'ghoul',
        name: 'Siege Captain',
        costToBuy: 6,
        costToPlay: 1,
        artSrc: 'siege-captain.jpeg',
        description: 'While on field',
        description2: 'All allies in front of the caption have their power increased by 2',
        power: 2,
        move: 1,
    }),
    apprentice: new Card({
        type: 'creature',
        creatureType: 'humanoid',
        name: `Necromancer's Apprentice`,
        costToBuy: 6,
        costToPlay: 3,
        description: 'On battle',
        description2: 'Look through your discard pile and summon a skeleton creature immediately without paying its cost',
        artSrc: '',
        power: 2,
        move: 1,
    }),

    warHornBearer: new Card({
        type: 'creature',
        creatureType: 'beast',
        name: 'War Horn Bearer',
        costToBuy: 7,
        costToPlay: 3,
        description: 'On play',
        description2: 'Draw any creature from your discard pile',
        artSrc: '',
        power: 4,
        move: 1,
        attributes: []
    }),
    shieldLord: new Card({
        type: 'creature',
        creatureType: 'beast',
        name: 'Shield Lord',
        costToBuy: 7,
        costToPlay: 1,
        artSrc: '',
        power: 3,
        move: 1,
        description: 'On defend',
        description2: 'Power is increased by 2',
        attributes: []
    }),

    behemoth: new Card({
        type: 'creature',
        creatureType: 'monstrosity',
        name: 'Behemoth',
        costToBuy: 8,
        costToPlay: 4,
        description: 'On battle',
        description2: 'Draw 1 card',
        artSrc: 'behemoth2.jpeg',
        power: 5,
        move: 1,
        attributes: []
    }),
    rockGiant: new Card({
        type: 'creature',
        creatureType: 'monstrosity',
        name: 'Rock Giant',
        costToBuy: 8,
        costToPlay: 2,
        artSrc: 'rock-giant.jpeg',
        power: 5,
        move: 1,
        attributes: []
    }),


    fireball: new Card({
        type: 'spell',
        name: 'Fireball',
        costToBuy: 2,
        costToPlay: 1,
        description: 'Kill an enemy creature that has a maximum of 2 power.',
        artSrc: 'fireball.jpeg',
    }),
    staticDischarge: new Card({
        type: 'spell',
        name: 'Static Discharge',
        costToBuy: 2,
        costToPlay: 2,
        description: 'Kill all enemy creatures that have a maximum of 1 power',
        artSrc: 'static-discharge.jpeg',
    }),
    weaken: new Card({
        type: 'spell',
        name: 'Weaken',
        costToBuy: 3,
        costToPlay: 1,
        description: `Lower a creature's power by 1`,
        artSrc: 'weaken.jpeg',
    }),
    Alchemy: new Card({
        type: 'spell',
        name: 'Alchemy',
        costToBuy: 3,
        costToPlay: 1,
        description: 'Trash top 2 cards from your mana stack. Gain 1 mana crystal and discard it.',
        artSrc: 'alchemy.jpeg',
    }),
    burnMana: new Card({
        type: 'spell',
        name: 'Burn Mana',
        costToBuy: 2,
        costToPlay: 3,
        description: 'Enemy discards top 2 mana cards',
        artSrc: 'mana-burn.jpeg',
    }),
    empower: new Card({
        type: 'spell',
        name: 'Empower',
        costToBuy: 3,
        costToPlay: 3,
        description: 'This creature gains 2 power',
        artSrc: 'empower.jpeg',
        attributes: [Attribute.ENCHANTMENT]
    }),
    collateralDamage: new Card({
        type: 'spell',
        name: 'Collateral Damage',
        costToBuy: 4,
        costToPlay: 3,
        description: 'Kill an enemy creature that has max 2 power. If you do, kill another creature with a minimal power of 4.',
        artSrc: '',
    }),
    defendersAdvantage: new Card({
        type: 'spell',
        name: 'Dying wish',
        costToBuy: 4,
        costToPlay: 2,
        description: 'When this creature dies, immediately draw 1 card',
        artSrc: 'https://c4.wallpaperflare.com/wallpaper/451/405/83/video-games-knights-league-of-legends-fantasy-art-armor-shield-artwork-swords-leona-1680x1050-wal-abstract-fantasy-hd-art-wallpaper-preview.jpg',
        attributes: [Attribute.ENCHANTMENT]
    }),
    blackHole: new Card({
        type: 'spell',
        name: 'Black Hole',
        costToBuy: 4,
        costToPlay: 5,
        description: 'Kill an enemy creature',
        artSrc: 'black-hole.jpeg',
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
