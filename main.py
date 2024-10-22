def on_button_pressed_ab():
    global hpl
    if hpl == 0:
        hpl += 1
        basic.show_icon(IconNames.HEART)
    else:
        hpl += -1
        maqueenPlusV2.control_motor_stop(maqueenPlusV2.MyEnumMotor.LEFT_MOTOR)
        maqueenPlusV2.control_motor_stop(maqueenPlusV2.MyEnumMotor.RIGHT_MOTOR)
        basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

P = 0
hpl = 0
DFRobotMaqueenPlusV2.init()

def on_forever():
    global P
    P = maqueenPlusV2.read_ultrasonic(DigitalPin.P13, DigitalPin.P14)
    basic.show_number(P)
basic.forever(on_forever)
