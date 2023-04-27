import {Card} from "./models/card";

export const allCards = {
    manaPebble: new Card({
        type: 'permanent',
        name: 'Mana Pebble',
        costToBuy: 2,
        description: 'Worth 1 mana',
        artSrc: 'https://cdnb.artstation.com/p/assets/images/images/011/555/085/large/tommy-hojbjerg-mana.jpg?1530177481'
    }),
    manaCrystal: new Card({
        type: 'permanent',
        name: 'Mana Crystal',
        costToBuy: 5,
        description: 'Worth 2 mana',
        artSrc: 'https://wow.zamimg.com/uploads/screenshots/normal/518006-ancient-mana-crystal-found-around-suramar.jpg'
    }),
    caveBat: new Card({
        type: 'follower',
        name: 'Cave Bat',
        costToBuy: 1,
        description: 'A fiendish cave bat',
        artSrc: 'https://i.pinimg.com/originals/35/f1/5f/35f15f1e08fa957f515a8555d6708814.jpg',
        attack: 1,
        defense: 0,
    }),
    squire: new Card({
        type: 'follower',
        name: 'Squire recruit',
        costToBuy: 2,
        description: 'A newbie squire, decently trained with a shield',
        artSrc: 'https://cdn.shopify.com/s/files/1/1601/3103/products/SelflessSquirecopy_1200x.jpg?v=1661623380',
        attack: 0,
        defense: 2,
    }),
    fireball: new Card({
        type: 'spell',
        name: 'Fireball',
        costToBuy: 2,
        costToPlay: 1,
        description: 'Kill an enemy follower that has less than 3 attack',
        artSrc: 'https://i.pinimg.com/originals/cc/c5/d6/ccc5d6f7c4f114a2baa3ab5c9712ee2e.jpg',
    }),
}
