input.onButtonPressed(Button.A, function () {
    if (hpl == 0) {
        hpl += 1
        basic.showIcon(IconNames.Heart)
    } else {
        hpl += -1
        basic.clearScreen()
    }
})
let hpl = 0
DFRobotMaqueenPlusV2.init()
basic.clearScreen()
