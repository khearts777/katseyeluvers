<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Math Pet Paradise</title>

<style>

body{
    margin:0;
    font-family:Arial;
    background:linear-gradient(to bottom,#8fd3ff,#dff6ff);
    overflow:hidden;
}

#gameArea{
    width:100vw;
    height:100vh;
    position:relative;
}

/* HEADER */

#title{
    text-align:center;
    font-size:50px;
    color:white;
    padding-top:20px;
    text-shadow:3px 3px 6px rgba(0,0,0,0.3);
}

/* PET */

#pet{
    width:140px;
    height:140px;
    background:#ffb6c1;
    border-radius:50%;
    position:absolute;
    top:230px;
    left:45%;
    transition:all 1s ease;
    animation:bounce 1s infinite alternate;
}

/* EARS */

.ear{
    width:40px;
    height:50px;
    background:#ffb6c1;
    position:absolute;
    border-radius:50%;
}

#ear1{
    top:-20px;
    left:15px;
    transform:rotate(-20deg);
}

#ear2{
    top:-20px;
    right:15px;
    transform:rotate(20deg);
}

/* EYES */

.eye{
    width:15px;
    height:15px;
    background:black;
    border-radius:50%;
    position:absolute;
    top:50px;
}

#eye1{
    left:40px;
}

#eye2{
    right:40px;
}

/* MOUTH */

#mouth{
    width:30px;
    height:15px;
    border-bottom:4px solid black;
    border-radius:50%;
    position:absolute;
    bottom:35px;
    left:55px;
}

/* FLOATING CLOUDS */

.cloud{
    position:absolute;
    font-size:60px;
    animation:cloudMove linear infinite;
}

#cloud1{
    top:70px;
    animation-duration:25s;
}

#cloud2{
    top:150px;
    animation-duration:40s;
}

@keyframes cloudMove{
    from{
        left:-200px;
    }

    to{
        left:120%;
    }
}

/* PET BOUNCE */

@keyframes bounce{

    from{
        transform:translateY(0px);
    }

    to{
        transform:translateY(-15px);
    }

}

/* PANEL */

#panel{
    position:absolute;
    bottom:0;
    width:100%;
    background:white;
    border-top-left-radius:30px;
    border-top-right-radius:30px;
    padding:20px;
    box-sizing:border-box;
    height:330px;
}

/* STATS */

#stats{
    font-size:24px;
    text-align:center;
    margin-bottom:15px;
}

/* QUESTION */

#question{
    text-align:center;
    font-size:32px;
    margin-bottom:15px;
}

/* INPUT */

input{
    display:block;
    margin:auto;
    padding:15px;
    width:180px;
    font-size:24px;
    border-radius:15px;
    border:3px solid pink;
    text-align:center;
}

/* BUTTONS */

.buttons{
    text-align:center;
    margin-top:15px;
}

button{
    padding:14px 20px;
    margin:8px;
    font-size:18px;
    border:none;
    border-radius:15px;
    background:#ff69b4;
    color:white;
    cursor:pointer;
}

button:hover{
    background:#ff1493;
}

/* MESSAGE */

#message{
    text-align:center;
    font-size:24px;
    margin-top:15px;
    color:#ff1493;
    min-height:30px;
}

</style>
</head>

<body>

<div id="gameArea">

<div id="title">
🎡 Math Pet Paradise 🎡
</div>

<div class="cloud" id="cloud1">☁️</div>
<div class="cloud" id="cloud2">☁️</div>

<!-- PET -->

<div id="pet">

<div class="ear" id="ear1"></div>
<div class="ear" id="ear2"></div>

<div class="eye" id="eye1"></div>
<div class="eye" id="eye2"></div>

<div id="mouth"></div>

</div>

<!-- PANEL -->

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
Choose a difficulty!
</div>

<input type="number" id="answer">

<div class="buttons">

<button onclick="generateQuestion('easy')">
Easy
</button>

<button onclick="generateQuestion('medium')">
Medium
</button>

<button onclick="generateQuestion('hard')">
Hard
</button>

<button onclick="submitAnswer()">
Submit
</button>

</div>

<div class="buttons">

<button onclick="buyFood('Apple',10,10)">
🍎 Apple
</button>

<button onclick="buyFood('Cake',20,25)">
🍰 Cake
</button>

<button onclick="buyFood('Pizza',35,40)">
🍕 Pizza
</button>

<button onclick="buyToy()">
🧸 Toy
</button>

<button onclick="ageUp()">
⭐ Age Up
</button>

</div>

<div id="message"></div>

</div>

</div>

<script>

let coins = 0
let hunger = 100
let happiness = 100
let age = 1

let correctAnswer = 0
let reward = 0

const pet =
document.getElementById("pet")

/* MOVE PET */

function movePet(){

    let x =
    Math.random() * 60 + 20

    let y =
    Math.random() * 120 + 150

    pet.style.left = x + "%"

    pet.style.top = y + "px"

}

setInterval(movePet,2000)

/* UPDATE */

function updateStats(){

    document.getElementById("coins")
    .innerHTML = coins

    document.getElementById("hunger")
    .innerHTML = hunger

    document.getElementById("happy")
    .innerHTML = happiness

    document.getElementById("age")
    .innerHTML = age

    if(hunger <= 0 || happiness <= 0){

        alert("Your pet ran away 😭")

        location.reload()

    }

}

/* RANDOM */

function rand(min,max){

    return Math.floor(
        Math.random() *
        (max-min+1)
    ) + min

}

/* QUESTIONS */

function generateQuestion(level){

    let types = [
        "times",
        "division",
        "squareRoot",
        "cube",
        "fraction",
        "addition",
        "mixed"
    ]

    let type =
    types[rand(0,types.length-1)]

    if(level == "easy"){
        reward = 5
    }

    if(level == "medium"){
        reward = 15
    }

    if(level == "hard"){
        reward = 30
    }

    let q = ""

    if(type == "times"){

        let a = rand(2,12)
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

        correctAnswer = ans

        q = `√${ans*ans}`

    }

    else if(type == "cube"){

        let n = rand(2,6)

        correctAnswer =
        n*n*n

        q = `${n}³`

    }

    else if(type == "fraction"){

        let a = rand(1,9)
        let b = rand(1,9)

        correctAnswer = a+b

        q =
        `${a}/10 + ${b}/10
        (numerator only)`

    }

    else if(type == "addition"){

        let a = rand(10,99)
        let b = rand(10,99)

        correctAnswer = a+b

        q = `${a} + ${b}`

    }

    else{

        let a = rand(1,20)
        let b = rand(1,10)
        let c = rand(1,20)

        correctAnswer =
        (a*b)+c

        q =
        `${a} × ${b} + ${c}`

    }

    document.getElementById("question")
    .innerHTML = q

}

/* SUBMIT */

function submitAnswer(){

    let user =
    Number(
    document.getElementById("answer")
    .value)

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

/* FOOD */

function buyFood(name,cost,heal){

    if(coins >= cost){

        coins -= cost

        hunger += heal

        if(hunger > 100){
            hunger = 100
        }

        document.getElementById("message")
        .innerHTML =
        `Your pet loved the ${name}!`

    }

    else{

        document.getElementById("message")
        .innerHTML =
        "Not enough coins!"

    }

    updateStats()

}

/* TOY */

function buyToy(){

    if(coins >= 20){

        coins -= 20

        happiness += 20

        if(happiness > 100){
            happiness = 100
        }

        document.getElementById("message")
        .innerHTML =
        "Your pet is happier 🧸"

    }

    else{

        document.getElementById("message")
        .innerHTML =
        "Need more coins!"

    }

    updateStats()

}

/* AGE */

function ageUp(){

    if(coins >= 50){

        coins -= 50

        age += 1

        pet.style.background =
        `hsl(${rand(0,360)},70%,75%)`

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

/* DECAY */

setInterval(function(){

    hunger -= 1
    happiness -= 1

    updateStats()

},5000)

updateStats()

</script>

</body>
</html>
