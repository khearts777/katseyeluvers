<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Math Pet World</title>

<style>

body{
    margin:0;
    overflow:hidden;
    font-family:Arial;
    background:linear-gradient(to bottom,#89CFF0,#dff6ff);
}

#game{
    width:100vw;
    height:100vh;
    position:relative;
}

h1{
    position:absolute;
    top:10px;
    width:100%;
    text-align:center;
    color:white;
    text-shadow:2px 2px 5px black;
}

#pet{
    width:120px;
    height:120px;
    position:absolute;
    left:45%;
    top:45%;
    transition:0.2s;
    image-rendering:pixelated;
}

.cloud{
    position:absolute;
    font-size:50px;
    animation:floatCloud 30s linear infinite;
}

@keyframes floatCloud{
    from{
        transform:translateX(-200px);
    }
    to{
        transform:translateX(120vw);
    }
}

#panel{
    position:absolute;
    bottom:0;
    width:100%;
    background:rgba(255,255,255,0.9);
    padding:15px;
    text-align:center;
}

button{
    padding:10px 15px;
    margin:5px;
    border:none;
    border-radius:10px;
    background:#ff69b4;
    color:white;
    font-size:16px;
    cursor:pointer;
}

button:hover{
    background:#ff1493;
}

input{
    padding:10px;
    width:120px;
    border-radius:10px;
    border:2px solid pink;
    text-align:center;
}

#stats{
    margin:10px;
    font-size:18px;
}

#question{
    font-size:24px;
    margin:10px;
}

#message{
    min-height:30px;
    font-size:20px;
    color:#ff1493;
}

.food{
    font-size:30px;
}

</style>
</head>

<body>

<div id="game">

<h1>🎡 Math Pet World 🎡</h1>

<div class="cloud" style="top:60px;">☁️</div>
<div class="cloud" style="top:150px; animation-delay:10s;">☁️</div>

<img id="pet"
src="https://i.imgur.com/QZ6K4Gx.png">

<div id="panel">

<div id="stats">
💰 Coins: <span id="coins">0</span>
|
🍖 Hunger: <span id="hunger">100</span>
|
🎉 Happiness: <span id="happy">100</span>
|
🎂 Age: <span id="age">1</span>
</div>

<div id="question">
Choose a quiz type!
</div>

<input type="number" id="answer">

<br>

<button onclick="generateQuestion('easy')">Easy</button>
<button onclick="generateQuestion('medium')">Medium</button>
<button onclick="generateQuestion('hard')">Hard</button>

<button onclick="submitAnswer()">Submit</button>

<div id="message"></div>

<hr>

<h2>🛒 Food Shop</h2>

<button onclick="buyFood('apple',10,10)">🍎 Apple</button>
<button onclick="buyFood('cake',20,25)">🍰 Cake</button>
<button onclick="buyFood('pizza',35,40)">🍕 Pizza</button>

<h2>🧸 Toy Shop</h2>

<button onclick="buyToy(15)">⚽ Ball</button>
<button onclick="buyToy(30)">🧸 Teddy</button>

<h2>⭐ Upgrade</h2>

<button onclick="ageUp()">Age Up (50)</button>

</div>

</div>

<script>

let coins = 0
let hunger = 100
let happiness = 100
let age = 1

let correctAnswer = 0
let reward = 0

const pet = document.getElementById("pet")

function updateStats(){

    document.getElementById("coins").innerHTML = coins
    document.getElementById("hunger").innerHTML = hunger
    document.getElementById("happy").innerHTML = happiness
    document.getElementById("age").innerHTML = age

    if(age >= 5){
        pet.src =
        "https://i.imgur.com/9Xn4FQx.png"
    }

    if(hunger <= 0 || happiness <= 0){

        alert("Your pet ran away 😭")
        location.reload()

    }

}

function movePet(){

    let x = Math.random() * 70
    let y = Math.random() * 50

    pet.style.left = x + "%"
    pet.style.top = y + "%"

}

setInterval(movePet,1500)

function generateQuestion(level){

    let types = [
        "addition",
        "subtraction",
        "multiplication",
        "division",
        "squareRoot",
        "cube",
        "fraction"
    ]

    let type =
    types[Math.floor(Math.random() * types.length)]

    let q = ""

    if(level == "easy"){
        reward = 5
    }

    if(level == "medium"){
        reward = 15
    }

    if(level == "hard"){
        reward = 30
    }

    if(type == "addition"){

        let a = rand(1,50)
        let b = rand(1,50)

        correctAnswer = a + b

        q = `${a} + ${b}`

    }

    else if(type == "subtraction"){

        let a = rand(20,100)
        let b = rand(1,20)

        correctAnswer = a - b

        q = `${a} - ${b}`

    }

    else if(type == "multiplication"){

        let a = rand(2,20)
        let b = rand(2,12)

        correctAnswer = a * b

        q = `${a} × ${b}`

    }

    else if(type == "division"){

        let b = rand(2,12)
        let ans = rand(2,12)

        let a = b * ans

        correctAnswer = ans

        q = `${a} ÷ ${b}`

    }

    else if(type == "squareRoot"){

        let ans = rand(2,15)

        let num = ans * ans

        correctAnswer = ans

        q = `√${num}`

    }

    else if(type == "cube"){

        let num = rand(2,6)

        correctAnswer = num * num * num

        q = `${num}³`

    }

    else if(type == "fraction"){

        let a = rand(1,5)
        let b = rand(1,5)

        correctAnswer = a + b

        q = `${a}/10 + ${b}/10 = ? (numerator only)`

    }

    document.getElementById("question")
    .innerHTML = q

}

function submitAnswer(){

    let user =
    Number(document.getElementById("answer").value)

    if(user == correctAnswer){

        coins += reward

        document.getElementById("message")
        .innerHTML =
        `Correct! +${reward} coins 🎉`

    }

    else{

        document.getElementById("message")
        .innerHTML =
        `Wrong 😭 Answer: ${correctAnswer}`

    }

    updateStats()

}

function buyFood(name,cost,heal){

    if(coins >= cost){

        coins -= cost
        hunger += heal

        if(hunger > 100){
            hunger = 100
        }

        document.getElementById("message")
        .innerHTML =
        `Your pet enjoyed the ${name}!`

    }

    else{

        document.getElementById("message")
        .innerHTML =
        "Not enough coins!"

    }

    updateStats()

}

function buyToy(cost){

    if(coins >= cost){

        coins -= cost
        happiness += 20

        if(happiness > 100){
            happiness = 100
        }

        document.getElementById("message")
        .innerHTML =
        "Your pet feels happier!"

    }

    else{

        document.getElementById("message")
        .innerHTML =
        "Not enough coins!"

    }

    updateStats()

}

function ageUp(){

    if(coins >= 50){

        coins -= 50
        age += 1

        document.getElementById("message")
        .innerHTML =
        "Your pet evolved ⭐"

    }

    else{

        document.getElementById("message")
        .innerHTML =
        "Need more coins!"

    }

    updateStats()

}

function rand(min,max){

    return Math.floor(
        Math.random() * (max-min+1)
    ) + min

}

setInterval(function(){

    hunger -= 1
    happiness -= 1

    updateStats()

},5000)

updateStats()

</script>

</body>
</html>
