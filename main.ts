input.onButtonPressed(Button.AB, function () {
    if (Enable == 1) {
        Enable = 0
    } else {
        Enable = 1
    }
})
let Enable = 0
Enable = 0
basic.forever(function () {
    if (Enable == 1) {
        basic.showIcon(IconNames.Happy)
        SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
        SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
        basic.pause(5000)
        SuperBit.MotorRun(SuperBit.enMotors.M1, 0)
        SuperBit.MotorRun(SuperBit.enMotors.M3, 0)
        basic.showIcon(IconNames.Sad)
        basic.pause(1000)
        basic.showIcon(IconNames.Skull)
        SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
        SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
        basic.pause(3000)
        SuperBit.MotorRun(SuperBit.enMotors.M1, 0)
        SuperBit.MotorRun(SuperBit.enMotors.M3, 0)
        basic.showIcon(IconNames.Sad)
        basic.pause(1000)
    } else {
        basic.showString("Off")
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
