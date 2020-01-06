{
  window.jwb = window.jwb || {};

  const FIXED_MAPS = [
    _mapFromAscii(`
                ###########
                #.........#
                #....U....#               
                #.....................
                #.........#          .
                ###.#######          .
                   .                 .
#############      .                 .
#...........#      .           ######.#####
#...........#      .           #..........#
#....@......#      .           #...U....>.#
#...................           #..........#
#...........#                  #.....U....#
#......U....#                  ############
#############
`),
    _mapFromAscii(`
###########################################
#.........................................#
#...............U............U............#
#.........................................#
#...........####################......U...#
#...........#                  #..........#
#...@.......#                  #..........#
#...........#                  #..........#
#...........#                  ############
#############
`)
  ];

  /**
   * @param {int} width
   * @param {int} height
   */
  function randomMap(width, height, numEnemies) {
    /**
     * @type {Function<Coordinates, Unit>}
     */
    const enemyUnitSupplier = ({ x, y }) => {
      const u = new Unit(x, y, 'enemy', 50);
      u.update = () => tryMoveRandomly(u);
      return u;
    };

    return new BSPDungeonGenerator(8, 6).generateDungeon(width, height, numEnemies, enemyUnitSupplier);
  }

  /**
   * @param {string} ascii
   * @private
   */
  function _mapFromAscii(ascii) {
    const { Tiles } = window.jwb.types;
    const lines = ascii.split('\n').filter(line => !line.match(/^ *$/));

    const tiles = [];
    let playerUnitLocation = null;
    const enemyUnitLocations = [];
    for (let y = 0; y < lines.length; y++) {
      const line = lines[y];
      for (let x = 0; x < line.length; x++) {
        const c = line[x];
        let tile = Object.values(Tiles).filter(t => t.char === c)[0] || null;
        if (!tile) {
          if (c === '@') {
            playerUnitLocation = { x, y };
            tile = Tiles.FLOOR;
          } else if (c === 'U') {
            enemyUnitLocations.push({ x, y });
            tile = Tiles.FLOOR;
          } else {
            tile = Tiles.NONE;
          }
        }
        tiles[y] = tiles[y] || [];
        tiles[y][x] = tile;
      }
    }
    const width = tiles.map(row => row.length).reduce((a, b) => Math.max(a, b)) + 1;
    const height = tiles.length;

    /**
     * @type {Function<Coordinates, Unit>}
     */
    const enemyUnitSupplier = ({ x, y }) => {
      const u = new Unit(x, y, 'enemy', 50);
      u.update = () => tryMoveRandomly(u);
      return u;
    };

    return new MapSupplier(
      width,
      height,
      tiles,
      playerUnitLocation,
      enemyUnitLocations,
      enemyUnitSupplier,
      []
    );
  }

  window.jwb.mapFactory = { randomMap, FIXED_MAPS };
}