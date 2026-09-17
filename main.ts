input.onButtonPressed(Button.A, function () {
    userScore += 1
    basic.showArrow(ArrowNames.North)
    basic.pause(500)
    basic.clearScreen()
})
function flashScore () {
    basic.showNumber(userScore)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
}
input.onButtonPressed(Button.AB, function () {
    flashScore()
    flashScore()
})
input.onButtonPressed(Button.B, function () {
    userScore += -1
    basic.showArrow(ArrowNames.South)
    basic.pause(500)
    basic.clearScreen()
})
let userScore = 0
userScore = 0
