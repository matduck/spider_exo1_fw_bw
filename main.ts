let Enable = 0
input.onButtonPressed(Button.AB, function () {
    if (Enable == 1) {
        Enable = 0
    } else {
        Enable = 1
    }
})
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
    }
})
