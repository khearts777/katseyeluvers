let coins = 0
let petAge = 1
let hunger = 100
let happiness = 100

let answer = 0
let correctAnswer = 0

scene.setBackgroundColor(9)

let pet = sprites.create(img`
    . . . . 5 5 5 5 . . . .
    . . 5 5 5 5 5 5 5 . . .
    . 5 5 f 5 5 5 f 5 5 . .
    . 5 5 5 5 5 5 5 5 5 . .
    . 5 5 5 5 5 5 5 5 5 . .
    . . 5 5 5 5 5 5 5 . . .
    . . . 5 5 5 5 5 . . . .
`, SpriteKind.Player)

pet.setPosition(80, 60)

function updateStats() {
    game.splash(
    "Coins: " + coins +
    "\nAge: " + petAge +
    "\nHunger: " + hunger +
    "\nHappiness: " + happiness)
}

function askEasyQuestion() {

    let a = randint(1, 10)
    let b = randint(1, 10)

    correctAnswer = a + b

    answer = game.askForNumber(
    "" + a + " + " + b + " = ?")

    if (answer == correctAnswer) {

        game.splash("Correct! +5 coins")
        coins += 5

    } else {

        game.splash("Wrong! Answer was " + correctAnswer)

    }
}

function askMediumQuestion() {

    let a = randint(10, 30)
    let b = randint(10, 30)

    correctAnswer = a * b

    answer = game.askForNumber(
    "" + a + " x " + b + " = ?")

    if (answer == correctAnswer) {

        game.splash("Correct! +15 coins")
        coins += 15

    } else {

        game.splash("Wrong! Answer was " + correctAnswer)

    }
}

function askHardQuestion() {

    let a = randint(20, 50)
    let b = randint(2, 12)

    correctAnswer = a * b + randint(1, 20)

    answer = game.askForNumber(
    "" + a + " x " + b + " + random bonus = ?")

    if (answer == correctAnswer) {

        game.splash("WOW! +30 coins")
        coins += 30

    } else {

        game.splash("Wrong! Answer was " + correctAnswer)

    }
}

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {

    let choice = game.askForNumber(
    "1 Easy\n2 Medium\n3 Hard")

    if (choice == 1) {
        askEasyQuestion()
    }

    if (choice == 2) {
        askMediumQuestion()
    }

    if (choice == 3) {
        askHardQuestion()
    }

    updateStats()
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {

    let shop = game.askForNumber(
    "1 Food (10)\n2 Toy (20)\n3 Age Up (50)")

    if (shop == 1 && coins >= 10) {

        coins -= 10
        hunger += 20

        if (hunger > 100) {
            hunger = 100
        }

        game.splash("Pet ate happily!")

    } else if (shop == 2 && coins >= 20) {

        coins -= 20
        happiness += 20

        if (happiness > 100) {
            happiness = 100
        }

        game.splash("Pet played happily!")

    } else if (shop == 3 && coins >= 50) {

        coins -= 50
        petAge += 1

        game.splash("Your pet grew older!")

    } else {

        game.splash("Not enough coins!")

    }

    updateStats()
})

game.onUpdateInterval(5000, function () {

    hunger -= 5
    happiness -= 3

    if (hunger <= 0 || happiness <= 0) {

        game.over(false, effects.dissolve)

    }
})

game.splash("A = Answer Questions")
game.splash("B = Open Shop")

updateStats()
