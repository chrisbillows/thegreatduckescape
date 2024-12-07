// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a0008000100000606030000000000030006000300020000000000010000000000060000020000000105000000000600000600000000000002000001000003000000000000060000000601000000000004000000`, img`
2 . . 2 2 . . . . . 
. . . 2 . . . 2 . . 
. . . 2 . . . . . 2 
. . 2 . . . 2 2 . . 
. . 2 . . 2 . . . . 
. . 2 . . 2 . . . . 
. . . . . 2 . . . 2 
2 . . . . . 2 . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.swamp.swampTile0,sprites.builtin.forestTiles18,sprites.castle.tilePath5,sprites.castle.tileDarkGrass2,sprites.builtin.forestTiles3], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
