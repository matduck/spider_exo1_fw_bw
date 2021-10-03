function AffichageLed (Forward: boolean, Backward: boolean, Stop2: boolean) {
    SuperBit.RGB_Program().clear()
    SuperBit.RGB_Program().setBrightness(30)
    if (Forward) {
        SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        SuperBit.RGB_Program().setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    }
    if (Backward) {
        SuperBit.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
        SuperBit.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Orange))
    }
    if (Stop2) {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
    }
    SuperBit.RGB_Program().show()
}
function GoForward () {
    AffichageLed(true, false, false)
    basic.showIcon(IconNames.Happy)
    SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
    basic.pause(5000)
}
input.onButtonPressed(Button.AB, function () {
    if (Enable == 1) {
        Enable = 0
    } else {
        Enable = 1
    }
})
function GoBackward () {
    SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    AffichageLed(false, true, false)
    basic.showIcon(IconNames.Skull)
    basic.pause(3000)
}
function Stop () {
    SuperBit.MotorRun(SuperBit.enMotors.M1, 0)
    SuperBit.MotorRun(SuperBit.enMotors.M3, 0)
    AffichageLed(false, false, true)
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
}
let Enable = 0
SuperBit.RGB_Program().setBrightness(30)
SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
SuperBit.RGB_Program().setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
SuperBit.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
SuperBit.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Orange))
SuperBit.RGB_Program().show()
basic.pause(2000)
SuperBit.RGB_Program().clear()
basic.forever(function () {
    if (Enable == 1) {
        GoForward()
        Stop()
        if (Enable == 1) {
            GoBackward()
            Stop()
        }
    }
    if (Enable == 0) {
        Stop()
        basic.showString("OFF")
    }
})
