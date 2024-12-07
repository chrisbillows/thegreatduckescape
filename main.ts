sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function on_on_overlap(sprite: Sprite, other: Sprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
info.onCountdownEnd(function on_countdown_end() {
    game.over(true)
})
info.onLifeZero(function on_life_zero() {
    game.over(false)
})
let projectile : Sprite = null
let my_sprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . b 3 b . . . 
            . . . . . . . . . b 3 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 3 3 3 3 3 b . . . 
            . b b b b b 3 3 3 3 3 3 3 b . . 
            . b d 3 b 3 3 3 3 3 3 3 3 b . . 
            . . b 3 3 b 3 d 1 f 3 d 4 f . . 
            . . b d 3 3 b 1 f f 3 4 4 c . . 
            b b d b 3 3 3 d f b 4 4 4 4 4 b 
            b d d c d 3 3 b 3 4 4 4 4 4 b . 
            c d d d c c b 3 3 3 3 3 3 3 b . 
            c b d d d d d 3 3 3 3 3 3 3 b . 
            . c d d d d d d 3 3 3 3 3 d b . 
            . . c b d d d d d 3 3 3 b b . . 
            . . . c c c c c c c c b b . . .
    `, SpriteKind.Player)
controller.moveSprite(my_sprite)
my_sprite.setStayInScreen(true)
scene.setBackgroundColor(7)
info.startCountdown(30)
info.setLife(3)
tiles.setCurrentTilemap(tilemap`
    level2
`)
game.onUpdateInterval(1000, function on_update_interval() {
    
    projectile = sprites.createProjectileFromSide(img`
            .............ccfff..............
                    ...........ccddbcf..............
                    ..........ccddbbf...............
                    ..........fccbbcf...............
                    .....fffffccccccff.........ccc..
                    ...ffbbbbbbbcbbbbcfff....ccbbc..
                    ..fbbbbbbbbcbcbbbbcccff.cdbbc...
                    ffbbbbbbffbbcbcbbbcccccfcdbbf...
                    fbcbbb11ff1bcbbbbbcccccffbbf....
                    fbbb11111111bbbbbcccccccbbcf....
                    .fb11133cc11bbbbcccccccccccf....
                    ..fccc31c111bbbcccccbdbffbbcf...
                    ...fc13c111cbbbfcddddcc..fbbf...
                    ....fccc111fbdbbccdcc.....fbbf..
                    ........ccccfcdbbcc........fff..
                    .............fffff..............
        `, randint(-100, 100), randint(-100, 100))
})
