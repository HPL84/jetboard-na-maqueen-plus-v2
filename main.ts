input.onButtonPressed(Button.AB, function () {
	
})
let P = 0
DFRobotMaqueenPlusV2.init()
basic.forever(function () {
    P = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P14,
    PingUnit.Centimeters
    )
    basic.showNumber(P)
    if (P <= 15) {
        maqueenPlusV2.showColor(maqueenPlusV2.NeoPixelColors.Green)
    } else if (P >= 16 && P < 30) {
        maqueenPlusV2.showColor(maqueenPlusV2.NeoPixelColors.Blue)
    } else if (P >= 31 && P < 50) {
        maqueenPlusV2.showColor(maqueenPlusV2.NeoPixelColors.Red)
    } else {
    	
    }
})
