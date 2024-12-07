def on_on_overlap(sprite, other):
    info.change_life_by(-1)
    pause(1000)
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap)

def on_countdown_end():
    game.over(True)
info.on_countdown_end(on_countdown_end)

def on_life_zero():
    game.over(False)
info.on_life_zero(on_life_zero)

projectile: Sprite = None
my_sprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(my_sprite)
my_sprite.set_stay_in_screen(True)
scene.set_background_color(7)
info.start_countdown(30)
info.set_life(3)
tiles.set_current_tilemap(tilemap("""
    level2
"""))

def on_update_interval():
    global projectile
    projectile = sprites.create_projectile_from_side(img("""
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
        """),
        randint(-100, 100),
        randint(-100, 100))
game.on_update_interval(1000, on_update_interval)
