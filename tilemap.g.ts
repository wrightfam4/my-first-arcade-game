// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`3200080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000030300000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000040000000003030000000000000000000000000000000000000003030000000000000000000000000300000000000000000004000000000000000000000000030300000000000000000000000000000000000003030000000000030000000000000000000400000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000040101010101020202010101010101010202010101010101020101010102020201010102020101010102020202010101010101`, img`
..................................................
..................................................
.........22.......................................
.......................................2..........
....22...................22............2..........
............22..................22.....2..........
...................2..............................
22222...2222222..222222.2222...222..2222....222222
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.dungeon.collectibleRedCrystal,sprites.builtin.field0,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
