import { EquipmentSlot, ItemCategory, PaletteSwaps, SpriteSupplier } from '../../types/types';
import SpriteFactory from '../../graphics/sprites/SpriteFactory';
import Colors from '../../types/Colors';

interface EquipmentClass {
  name: string,
  itemCategory: ItemCategory,
  equipmentCategory: EquipmentSlot,
  mapIcon: SpriteSupplier,
  char: string,
  paletteSwaps?: PaletteSwaps,
  minLevel: number,
  maxLevel: number,
  damage: number
}

const BRONZE_SWORD: EquipmentClass = {
  name: 'Bronze Sword',
  char: 'S',
  itemCategory: ItemCategory.WEAPON,
  equipmentCategory: EquipmentSlot.WEAPON,
  mapIcon: SpriteFactory.MAP_SWORD,
  paletteSwaps: {
    [Colors.BLACK]: Colors.BLACK,
    [Colors.DARK_GRAY]: Colors.LIGHT_BROWN,
    [Colors.LIGHT_GRAY]: Colors.LIGHT_BROWN
  },
  damage: 4,
  minLevel: 1,
  maxLevel: 2
};

const IRON_SWORD: EquipmentClass = {
  name: 'Iron Sword',
  char: 'S',
  itemCategory: ItemCategory.WEAPON,
  equipmentCategory: EquipmentSlot.WEAPON,
  mapIcon: SpriteFactory.MAP_SWORD,
  paletteSwaps: {
    [Colors.DARK_GRAY]: Colors.BLACK,
    [Colors.LIGHT_GRAY]: Colors.DARK_GRAY
  },
  damage: 7,
  minLevel: 3,
  maxLevel: 4
};

const STEEL_SWORD: EquipmentClass = {
  name: 'Steel Sword',
  char: 'S',
  itemCategory: ItemCategory.WEAPON,
  equipmentCategory: EquipmentSlot.WEAPON,
  mapIcon: SpriteFactory.MAP_SWORD,
  paletteSwaps: {
    [Colors.DARK_GRAY]: Colors.DARK_GRAY,
    [Colors.LIGHT_GRAY]: Colors.LIGHT_GRAY
  },
  damage: 10,
  minLevel: 4,
  maxLevel: 6
};

const FIRE_SWORD: EquipmentClass = {
  name: 'Fire Sword',
  char: 'S',
  itemCategory: ItemCategory.WEAPON,
  equipmentCategory: EquipmentSlot.WEAPON,
  mapIcon: SpriteFactory.MAP_SWORD,
  paletteSwaps: {
    [Colors.DARK_GRAY]: Colors.YELLOW,
    [Colors.LIGHT_GRAY]: Colors.RED,
    [Colors.BLACK]: Colors.DARK_RED
  },
  damage: 14,
  minLevel: 5,
  maxLevel: 6
};

function getWeaponClasses() {
  return [BRONZE_SWORD, IRON_SWORD, STEEL_SWORD, FIRE_SWORD];
}

export default {
  BRONZE_SWORD,
  IRON_SWORD,
  STEEL_SWORD,
  getWeaponClasses
};

export {
  EquipmentClass
};