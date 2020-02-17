import InventoryItem from './classes/InventoryItem';
import Unit from './classes/Unit';
import Tile from './types/Tile';

interface Coordinates {
  x: number,
  y: number
}

interface Rect {
  left: number,
  top: number,
  width: number,
  height: number
}

interface Room extends Rect {
  exits: Coordinates[]
}

interface MapSection {
  width: number,
  height: number,
  rooms: Room[],
  tiles: Tile[][]
}

interface PaletteSwaps {
  [src: string]: string
}

type Sample = [number, number];

enum ItemCategory {
  POTION = 'POTION',
  SCROLL = 'SCROLL',
  WEAPON = 'WEAPON'
}

enum EquipmentCategory {
  WEAPON = 'WEAPON',
  ARMOR = 'ARMOR'
}

enum GameScreen{
  GAME = 'GAME',
  INVENTORY = 'INVENTORY'
}

type ItemProc = (item: InventoryItem, unit: Unit) => Promise<void>;

export {
  Coordinates,
  Rect,
  MapSection,
  PaletteSwaps,
  Tile,
  Room,
  Sample,
  ItemCategory,
  EquipmentCategory,
  GameScreen,
  ItemProc
};