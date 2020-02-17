import SpriteFactory from './SpriteFactory';
import UnitClass from './classes/UnitClass';
import { HUMAN_AGGRESSIVE, HUMAN_CAUTIOUS } from './UnitAI';

const PLAYER: UnitClass = {
  name: 'PLAYER',
  // Green/brown colors
  paletteSwaps: {
    '#800080': '#804000', // Shirt
    '#ff00ff': '#008000', // Upper Sleeves
    '#000080': '#008000', // Lower sleeves
    '#00ffff': '#ffc0c0', // Hands
    '#000000': '#000000', // Belt
    '#808080': '#804000', // Skirt
    '#c0c0c0': '#c08040', // Legs
    '#008000': '#804000', // Socks
    '#00ff00': '#804000', // Shoes
    '#ff8040': '#ffc0c0'  // Face
  },
  startingLife: 100,
  startingDamage: 10,
  minLevel: 1,
  maxLevel: 20,
  lifePerLevel: level => 10,
  damagePerLevel: level => 2,
  experienceToNextLevel: currentLevel => (currentLevel < 10) ? 2 * currentLevel + 4: null, // 6, 8, 10, 12, 14...
  sprite: ({ paletteSwaps }) => SpriteFactory.PLAYER(paletteSwaps)
};

const ENEMY_HUMAN_BLUE: UnitClass = {
  name: 'ENEMY_HUMAN_BLUE',
  sprite: ({ paletteSwaps }) => SpriteFactory.PLAYER(paletteSwaps),
  paletteSwaps: {
    '#800080': '#0000c0', // Shirt
    '#ff00ff': '#0000cc', // Upper Sleeves
    '#000080': '#0000c0', // Lower sleeves
    '#00ffff': '#ffc0c0', // Hands
    '#000000': '#0000c0', // Belt
    '#808080': '#000080', // Skirt
    '#c0c0c0': '#000080', // Legs
    '#008000': '#000000', // Socks
    '#00ff00': '#000000', // Shoes
    '#ff8040': '#ffc0c0'  // Face
  },
  startingLife: 75,
  startingDamage: 4,
  minLevel: 1,
  maxLevel: 3,
  lifePerLevel: () => 10,
  damagePerLevel: () => 2,
  aiHandler: HUMAN_CAUTIOUS,
};

/**
 * @type UnitClass
 */
const ENEMY_HUMAN_RED = {
  name: 'ENEMY_HUMAN_RED',
  sprite: ({ paletteSwaps }) => SpriteFactory.PLAYER(paletteSwaps),
  paletteSwaps: {
    '#800080': '#c00000', // Shirt
    '#ff00ff': '#cc0000', // Upper Sleeves
    '#000080': '#c00000', // Lower sleeves
    '#00ffff': '#ffc0c0', // Hands
    '#000000': '#c00000', // Belt
    '#808080': '#800000', // Skirt
    '#c0c0c0': '#800000', // Legs
    '#008000': '#000000', // Socks
    '#00ff00': '#000000', // Shoes
    '#ff8040': '#ffc0c0'  // Face
  },
  startingLife: 55,
  startingDamage: 5,
  minLevel: 1,
  maxLevel: 5,
  lifePerLevel: () => 8,
  damagePerLevel: () => 3,
  aiHandler: HUMAN_AGGRESSIVE
};

/**
 * @type UnitClass
 */
const ENEMY_HUMAN_BLACK = {
  name: 'ENEMY+_HUMAN_BLACK',
  sprite: ({ paletteSwaps }) => SpriteFactory.PLAYER(paletteSwaps),
  paletteSwaps: {
    '#800080': '#404040', // Shirt
    '#ff00ff': '#404040', // Upper Sleeves
    '#000080': '#404040', // Lower sleeves
    '#00ffff': '#000000', // Hands
    '#000000': '#c0c0c0', // Belt
    '#808080': '#404040', // Skirt
    '#c0c0c0': '#404040', // Legs
    '#008000': '#000000', // Socks
    '#00ff00': '#000000', // Shoes
    '#ff8040': '#c0c0c0', // Face
    '#008080': '#ff0000', // Eyes
    '#c08040': '#c0c0c0', // Hair
  },
  startingLife: 90,
  startingDamage: 8,
  minLevel: 3,
  maxLevel: 9,
  lifePerLevel: () => 15,
  damagePerLevel: () => 3,
  aiHandler: HUMAN_AGGRESSIVE
};

function getEnemyClasses() {
  return [ENEMY_HUMAN_BLUE, ENEMY_HUMAN_RED, ENEMY_HUMAN_BLACK];
}

export default {
  PLAYER,
  ENEMY_HUMAN_BLUE,
  ENEMY_HUMAN_RED,
  ENEMY_HUMAN_BLACK,
  getEnemyClasses
};