input.onButtonPressed(Button.AB, function () {
	
})
let p2 = 0
let P = 0
DFRobotMaqueenPlusV2.init()
basic.forever(function () {
    P = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P14,
    PingUnit.Centimeters
    )
    p2 = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    basic.showNumber(p2)
    if (p2 <= 7) {
        maqueenPlusV2.showColor(maqueenPlusV2.NeoPixelColors.Green)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # . . .
            `)
    } else if (p2 >= 7 && p2 < 14) {
        maqueenPlusV2.showColor(maqueenPlusV2.NeoPixelColors.Blue)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # . . .
            . . . . .
            # # . . .
            `)
    } else if (p2 >= 14 && p2 < 20) {
        basic.showLeds(`
            # # . . .
            . . . . .
            # # . . .
            . . . . .
            # # . . .
            `)
        maqueenPlusV2.showColor(maqueenPlusV2.NeoPixelColors.Red)
    } else {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    }
})
