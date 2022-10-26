let x = 4
let y = 0
led.plot(x, y)
basic.forever(function () {
    if (y % 2 == 0) {
        for (let index = 0; index < 5; index++) {
            led.plot(x, y)
            x += -1
            basic.pause(100)
        }
        y += 1
    } else {
        for (let index = 0; index < 5; index++) {
            x += 1
            led.plot(x, y)
            basic.pause(100)
        }
        y += 1
    }
})
