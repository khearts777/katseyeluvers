<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Math Dog World</title>

<style>

body{
    margin:0;
    font-family:Arial, sans-serif;
    background:linear-gradient(to bottom,#87CEEB,#dff6ff);
    overflow-y:auto;
}

/* MAIN AREA */

#game{
    width:100%;
    min-height:100vh;
}

/* TITLE */

h1{
    text-align:center;
    color:white;
    padding-top:20px;
    font-size:50px;
    text-shadow:2px 2px 5px black;
}

/* SKY */

.sky{
    height:450px;
    position:relative;
    overflow:hidden;
}

/* CLOUDS */

.cloud{
    position:absolute;
    font-size:70px;
    animation:moveCloud 30s linear infinite;
}

.cloud2{
    top:100px;
    animation-duration:45s;
}

@keyframes moveCloud{

    from{
        left:-200px;
    }

    to{
        left:120%;
    }

}

/* DOG */

#dog{
    width:180px;
    position:absolute;
    top:180px;
    left:40%;
    animation:bounce 1.2s infinite alternate;
    transition:left 2s ease;
}

@keyframes bounce{

    from{
        transform:translateY(0px);
    }

    to{
        transform:translateY(-15px);
    }

}

/* GROUND */

.ground{
    position:absolute;
    bottom:0;
    width:100%;
    height:120px;
    background:#7CFC00;
}

/* PANEL */

#panel{
    background:white;
    margin:30px auto;
    width:90%;
    max-width:1100px;
    border-radius:25px;
    padding:30px;
    box-shadow:0 0 20px rgba(0,0,0,0.2);
}

/* STATS */

#stats{
    font-size:28px;
    text-align:center;
    margin-bottom:25px;
    line-height:1.8;
}

/* QUESTION */

#question{
    font-size:40px;
    text-align:center;
    margin-bottom:20px;
}

/* INPUT */

input{
    display:block;
    margin:auto;
    width:250px;
    padding:18px;
    font-size:28px;
    border-radius:15px;
    border:3px solid pink;
    text-align:center;
}

/* BUTTON AREA */

.buttons{
    text-align:center;
    margin-top:20px;
}

/* BUTTONS */

button{
    padding:18px 24px;
    margin:10px;
    border:none;
    border-radius:15px;
    background:#ff69b4;
    color:white;
    font-size:22px;
    cursor:pointer;
}

button:hover{
    background:#ff1493;
}

/* MESSAGE */

#message{
    text-align:center;
    font-size:30px;
    color:#ff1493;
    margin-top:25px;
    min-height:50px;
}

h2{
    text-align:center;
    font-size:34px;
    margin-top:40px;
}

</style>
</head>

<body>

<div id="game">

<h1>🐶 Math Dog World 🐶</h1>

<div class="sky">

<div class="cloud">☁️</div>
<div class="cloud cloud2">☁️</div>

<img
id="dog"
src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg"
>

<div class="ground"></div>

</div>

<div id="panel">

<div id="stats">

💰 Coins:
<span id="coins">0</span>

|

🍖 Hunger:
<span id="hunger">100</span>

|

🎉 Happiness:
<span id="happy">100</span>

|

🎂 Age:
<span id="age">1</span>

</div>

<div id="question">
Choose a difficulty!
</div>

<input
type="number"
id="answer"
placeholder="Type answer"
>

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

<h2>🍖 Food Shop</h2>

<div class="buttons">

<button onclick="buyFood('Apple',10,10)">
🍎 Apple
</button>

<button onclick="buyFood('Cake',20,20)">
🍰 Cake
</button>

<button onclick="buyFood('Pizza',35,35)">
🍕 Pizza
</button>

<button onclick="buyFood('Steak',50,50)">
🥩 Steak
</button>

</div>

<h2>🧸 Toys</h2>

<div class="buttons">

<button onclick="buyToy('Ball',20)">
⚽ Ball
</button>

<button onclick="buyToy('Teddy',35)">
🧸 Teddy
</button>

<button onclick="buyToy('Bone',50)">
🦴 Bone
</button>

</div>

<h2>⭐ Upgrade</h2>

<div class="buttons">

<button onclick="ageUp()">
Age Up (100 Coins)
</button>

</div>

<div id="message"></div>

</div>

</div>

<script>

/* STATS */

let coins = 0
let hunger = 100
let happiness = 100
let age = 1

let correctAnswer = 0
let reward = 0

const dog =
document.getElementById("dog")

/* MOVE DOG */

function moveDog(){

    let x =
    Math.random() * 60 + 10

    dog.style.left =
    x + "%"

}

setInterval(moveDog,2500)

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

    if(hunger <= 0 ||
       happiness <= 0){

        alert(
        "Your dog ran away 😭")

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
        "subtraction",
        "mixed"

    ]

    let type =
    types[rand(0,
    types.length-1)]

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

    /* MULTIPLICATION */

    if(type == "times"){

        let a = rand(2,12)
        let b = rand(2,12)

        correctAnswer = a*b

        q = `${a} × ${b}`

    }

    /* DIVISION */

    else if(type == "division"){

        let b = rand(2,12)
        let ans = rand(2,12)

        let a = b*ans

        correctAnswer = ans

        q = `${a} ÷ ${b}`

    }

    /* SQUARE ROOT */

    else if(type == "squareRoot"){

        let ans = rand(2,15)

        correctAnswer = ans

        q = `√${ans*ans}`

    }

    /* CUBE */

    else if(type == "cube"){

        let n = rand(2,6)

        correctAnswer =
        n*n*n

        q = `${n}³`

    }

    /* FRACTIONS */

    else if(type == "fraction"){

        let a = rand(1,9)
        let b = rand(1,9)

        correctAnswer =
        (a+b)

        q =
        `${a}/10 + ${b}/10
        (numerator only)`

    }

    /* ADDITION */

    else if(type == "addition"){

        let a = rand(10,99)
        let b = rand(10,99)

        correctAnswer =
        a+b

        q = `${a} + ${b}`

    }

    /* SUBTRACTION */

    else if(type == "subtraction"){

        let a = rand(50,100)
        let b = rand(1,49)

        correctAnswer =
        a-b

        q = `${a} - ${b}`

    }

    /* MIXED */

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
        `Wrong 😭 Correct answer: ${correctAnswer}`

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
        `Your dog loved the ${name}!`

    }

    else{

        document.getElementById("message")
        .innerHTML =
        "Not enough coins!"

    }

    updateStats()

}

/* TOY */

function buyToy(name,cost){

    if(coins >= cost){

        coins -= cost

        happiness += 20

        if(happiness > 100){
            happiness = 100
        }

        document.getElementById("message")
        .innerHTML =
        `Your dog played with the ${name}!`

    }

    else{

        document.getElementById("message")
        .innerHTML =
        "Need more coins!"

    }

    updateStats()

}

/* AGE UP */

function ageUp(){

    if(coins >= 100){

        coins -= 100

        age += 1

        dog.style.width =
        (180 + age*10) + "px"

        document.getElementById("message")
        .innerHTML =
        "Your dog grew bigger ⭐"

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

},6000)

updateStats()

</script>

</body>
</html>
