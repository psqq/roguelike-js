import ImageSupplier from '../ImageSupplier';
import Sprite from './Sprite';
import Colors from '../../types/Colors';
import Unit from '../../units/Unit';
import Directions from '../../types/Directions';
import { replaceAll } from '../ImageUtils';
import { PaletteSwaps } from '../../types/types';

enum SpriteKey {
  STANDING_N = 'STANDING_N',
  STANDING_E = 'STANDING_E',
  STANDING_S = 'STANDING_S',
  STANDING_W = 'STANDING_W',
  DAMAGED_N = 'DAMAGED_N',
  DAMAGED_E = 'DAMAGED_E',
  DAMAGED_S = 'DAMAGED_S',
  DAMAGED_W = 'DAMAGED_W',
}

/**
 * A pre-composited, pre-palette-swapped human sprite
 * with a sword, shield, armor and helmet attached.
 */
class GruntSprite extends Sprite {
  private _unit: Unit;

  constructor(unit: Unit, paletteSwaps?: PaletteSwaps) {
    const imageMap = {
      [SpriteKey.STANDING_N]: new ImageSupplier('grunt_standing_N_1', Colors.WHITE, paletteSwaps),
      [SpriteKey.STANDING_E]: new ImageSupplier('grunt_standing_E_1', Colors.WHITE, paletteSwaps),
      [SpriteKey.STANDING_S]: new ImageSupplier('grunt_standing_S_1', Colors.WHITE, paletteSwaps),
      [SpriteKey.STANDING_W]: new ImageSupplier('grunt_standing_W_1', Colors.WHITE, paletteSwaps),
      [SpriteKey.DAMAGED_N]: new ImageSupplier('grunt_standing_N_1', Colors.WHITE, paletteSwaps, [img => replaceAll(img, Colors.WHITE)]),
      [SpriteKey.DAMAGED_E]: new ImageSupplier('grunt_standing_E_1', Colors.WHITE, paletteSwaps, [img => replaceAll(img, Colors.WHITE)]),
      [SpriteKey.DAMAGED_S]: new ImageSupplier('grunt_standing_S_1', Colors.WHITE, paletteSwaps, [img => replaceAll(img, Colors.WHITE)]),
      [SpriteKey.DAMAGED_W]: new ImageSupplier('grunt_standing_W_1', Colors.WHITE, paletteSwaps, [img => replaceAll(img, Colors.WHITE)])
    };
    super(imageMap, SpriteKey.STANDING_S, { dx: -4, dy: -20 });
    this._unit = unit;
  }

  update(): Promise<any> {
    this.key = this._getKey();
    return this.getImage();
  }

  private _getKey(): SpriteKey {
    const direction = this._unit.direction || Directions.S;
    const key = `${this._unit.activity}_${Directions.toString(direction)}`;
    return <SpriteKey>key;
  }
}

export default GruntSprite;