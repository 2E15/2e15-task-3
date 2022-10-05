input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showString("two")
    basic.showLeds(`
        # # # # #
        . . . . .
        . # # # .
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # # # #
        . . . # .
        . . . # .
        `)
    basic.showLeds(`
        # . . . #
        # . . . #
        . # . # .
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        . . # . .
        # # # # #
        . # . # .
        # . . . #
        `)
})
