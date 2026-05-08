<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Math Pet Fair</title>

<style>
    body{
        font-family: Arial, sans-serif;
        background: linear-gradient(to bottom, #ffd6ec, #fff4b8);
        text-align:center;
        margin:0;
        padding:20px;
    }

    h1{
        color:#ff4fa3;
    }

    .container{
        max-width:700px;
        margin:auto;
        background:white;
        padding:25px;
        border-radius:20px;
        box-shadow:0 0 20px rgba(0,0,0,0.15);
    }

    .pet{
        font-size:100px;
        margin:10px;
    }

    .stats{
        font-size:20px;
        margin:15px;
        line-height:1.8;
    }

    .question-box{
        margin-top:20px;
    }

    input{
        padding:10px;
        width:120px;
        font-size:20px;
        border-radius:10px;
        border:2px solid pink;
        text-align:center;
    }

    button{
        padding:12px 18px;
        margin:8px;
        border:none;
        border-radius:10px;
        background:#ff4fa3;
        color:white;
        font-size:16px;
        cursor:pointer;
    }

    button:hover{
        background:#ff2e8d;
    }

    #message{
        margin-top:15px;
        font-size:20px;
        min-height:40px;
    }

    .shop{
        margin-top:25px;
        padding-top:15px;
        border-top:2px dashed pink;
    }
</style>
</head>

<body>

<div class="container">

    <h1>🎡 Math Pet Fair 🎡</h1>

    <div class="pet" id="petEmoji">🐶</div>

    <div class="stats">
        💰 Coins: <span id="coins">0</span><br>
        🍖 Hunger: <span id="hunger">100</span><br>
        🎉 Happiness: <span id="happy">100</span><br>
        🎂 Age: <span id="age">1</span>
    </div>

    <div class="question-box">

        <h2 id="question">Press a difficulty!</h2>

        <input type="number" id="answer">

        <br>

        <button onclick="easyQuestion()">Easy</button>
        <button onclick="mediumQuestion()">Medium</button>
        <button onclick="hardQuestion()">Hard</button>

        <br>

        <button onclick="submitAnswer()">Submit Answer</button>

    </div>

    <div id="message"></div>

    <div class="shop">

        <h2>🛒 Pet Shop</h2>

        <button onclick="buyFood()">Buy Food (10)</button>
        <button onclick="buyToy()">Buy Toy (20)</button>
        <button onclick="ageUp()">Age Up (50)</button>

    </div>

</div>

<script>

let coins = 0
let hunger = 100
let happiness = 100
let age = 1

let correctAnswer = 0

function updateStats(){

    document.getElementById("coins").innerHTML = coins
    document.getElementById("hunger").innerHTML = hunger
    document.getElementById("happy").innerHTML = happiness
    document.getElementById("age").innerHTML = age

    if(age >= 5){
        document.getElementById("petEmoji").innerHTML = "🐕"
    }

    if(hunger <= 0 || happiness <= 0){

        alert("Your pet ran away 😭")
        location.reload()

    }
}

function easyQuestion(){

    let a = Math.floor(Math.random() * 10) + 1
    let b = Math.floor(Math.random() * 10) + 1

    correctAnswer = a + b

    document.getElementById("question").innerHTML =
        `${a} + ${b} = ?`

    document.getElementById("answer").value = ""

    currentReward = 5
}

function mediumQuestion(){

    let a = Math.floor(Math.random() * 20) + 5
    let b = Math.floor(Math.random() * 10) + 1

    correctAnswer = a * b

    document.getElementById("question").innerHTML =
        `${a} × ${b} = ?`

    document.getElementById("answer").value = ""

    currentReward = 15
}

function hardQuestion(){

    let a = Math.floor(Math.random() * 50) + 20
    let b = Math.floor(Math.random() * 12) + 1
    let c = Math.floor(Math.random() * 20) + 1

    correctAnswer = (a * b) + c

    document.getElementById("question").innerHTML =
        `${a} × ${b} + ${c} = ?`

    document.getElementById("answer").value = ""

    currentReward = 30
}

let currentReward = 0

function submitAnswer(){

    let userAnswer =
        Number(document.getElementById("answer").value)

    if(userAnswer === correctAnswer){

        coins += currentReward

        document.getElementById("message").innerHTML =
            `Correct! +${currentReward} coins 🎉`

    } else {

        document.getElementById("message").innerHTML =
            `Wrong 😭 Correct answer: ${correctAnswer}`

    }

    updateStats()
}

function buyFood(){

    if(coins >= 10){

        coins -= 10
        hunger += 20

        if(hunger > 100){
            hunger = 100
        }

        document.getElementById("message").innerHTML =
            "Your pet enjoyed the food 🍖"

    } else {

        document.getElementById("message").innerHTML =
            "Not enough coins!"

    }

    updateStats()
}

function buyToy(){

    if(coins >= 20){

        coins -= 20
        happiness += 20

        if(happiness > 100){
            happiness = 100
        }

        document.getElementById("message").innerHTML =
            "Your pet loved the toy 🧸"

    } else {

        document.getElementById("message").innerHTML =
            "Not enough coins!"

    }

    updateStats()
}

function ageUp(){

    if(coins >= 50){

        coins -= 50
        age += 1

        document.getElementById("message").innerHTML =
            "Your pet grew older 🎂"

    } else {

        document.getElementById("message").innerHTML =
            "Need more coins!"

    }

    updateStats()
}

setInterval(function(){

    hunger -= 1
    happiness -= 1

    updateStats()

}, 5000)

updateStats()

</script>

</body>
</html>
