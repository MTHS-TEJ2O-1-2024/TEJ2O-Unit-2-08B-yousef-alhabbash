/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Yousef
 * Created on: OCT 2024
 * This program RGB color changer
*/

input.onButtonPressed(Button.A, function () {
    //red
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)
    basic.pause(1000)
    //green
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.pause(1000)

    //blue
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)


    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)

})






