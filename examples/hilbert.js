let s = 0
let y = 0
let a = 0
let d = 0
let x = 0
function goto() {
    turtle.home()
    turtle.penUp()
    turtle.turnRight(90)
    turtle.forward(x)
    turtle.turnRight(90)
    turtle.forward(y)
    turtle.penDown()
    turtle.turnRight(180)
}
function ha() {
    if (d > 0) {
        turtle.turnLeft(a)
        d += -1
        hb()
        d += 1
        turtle.forward(s)
        turtle.turnRight(a)
        d += -1
        ha()
        d += 1
        turtle.forward(s)
        d += -1
        ha()
        d += 1
        turtle.turnRight(a)
        turtle.forward(s)
        d += -1
        hb()
        d += 1
        turtle.turnLeft(a)
    }
}
function hb() {
    if (d > 0) {
        turtle.turnRight(a)
        d += -1
        ha()
        d += 1
        turtle.forward(s)
        turtle.turnLeft(a)
        d += -1
        hb()
        d += 1
        turtle.forward(s)
        d += -1
        hb()
        d += 1
        turtle.turnLeft(a)
        turtle.forward(s)
        d += -1
        ha()
        d += 1
        turtle.turnRight(a)
    }
}
turtle.hide()
turtle.setSpeed(Speed.Fastest)
x = 75
y = 75
goto()
s = 5
a = 90
d = 5
ha()