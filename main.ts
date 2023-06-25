input.onPinPressed(TouchPin.P0, function () {
    init()
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        . . . . .
        . # . # .
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.clearScreen()
    basic.showNumber(d / (t1 - t0))
    init()
})
input.onPinPressed(TouchPin.P2, function () {
    t1 = control.eventTimestamp()
    d += DISTANCE_UNIT
    event_count += 1
})
function init () {
    d = 0
    t1 = 0
    t0 = control.eventTimestamp()
}
input.onPinPressed(TouchPin.P1, function () {
    t1 = control.eventTimestamp()
    d += DISTANCE_UNIT
    event_count += 1
})
let event_count = 0
let t0 = 0
let t1 = 0
let d = 0
let DISTANCE_UNIT = 0
DISTANCE_UNIT = 100
