<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8">
<meta name="viewport"
content="width=device-width, initial-scale=1.0">

<title>Ultimate Math Dog World</title>

<style>

/* BODY */

body{
    margin:0;
    font-family:Arial;
    overflow-x:hidden;
    background:linear-gradient(#87ceeb,#dff6ff);
    transition:1s;
}

/* TITLE */

h1{
    text-align:center;
    color:white;
    font-size:52px;
    margin-top:20px;
    text-shadow:3px 3px 6px black;
}

/* TOP AREA */

#top{
    height:430px;
    position:relative;
    overflow:hidden;
}

/* SUN + MOON */

#skyObject{
    position:absolute;
    right:60px;
    top:40px;
    font-size:70px;
}

/* CLOUDS */

.cloud{
    position:absolute;
    font-size:60px;
    animation:cloudMove linear infinite;
}

.cloud1{
    top:40px;
    animation-duration:25s;
}

.cloud2{
    top:130px;
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

/* DOG */

#dog{
    width:190px;
    height:190px;
    background:#c58c5b;
    border-radius:50%;
    position:absolute;
    left:40%;
    top:170px;
    transition:all 2s ease;
    animation:bounce 1s infinite alternate;
}

/* EARS */

.ear{
    width:50px;
    height:70px;
    background:#8b5a2b;
    border-radius:50%;
    position:absolute;
}

#ear1{
    left:10px;
    top:-20px;
    transform:rotate(-25deg);
}

#ear2{
    right:10px;
    top:-20px;
    transform:rotate(25deg);
}

/* EYES */

.eye{
    width:18px;
    height:18px;
    background:black;
    border-radius:50%;
    position:absolute;
    top:70px;
}

#eye1{
    left:50px;
}

#eye2{
    right:50px;
}

/* NOSE */

#nose{
    width:30px;
    height:20px;
    background:black;
    border-radius:50%;
    position:absolute;
    left:80px;
    top:100px;
}

/* MOUTH */

#mouth{
    width:40px;
    height:20px;
    border-bottom:4px solid black;
    border-radius:50%;
    position:absolute;
    left:75px;
    top:120px;
}

/* BOUNCE */

@keyframes bounce{

    from{
        transform:translateY(0px);
    }

    to{
        transform:translateY(-14px);
    }

}

/* GROUND */

#ground{
    position:absolute;
    bottom:0;
    width:100%;
    height:120px;
    background:#69d769;
}

/* PANEL */

#panel{
    background:white;
    width:90%;
    max-width:1100px;
    margin:30px auto;
    padding:30px;
    border-radius:30px;
    box-shadow:0 0 20px rgba(0,0,0,0.2);
}

/* STATS */

#stats{
    text-align:center;
    font-size:28px;
    line-height:2;
}

/* QUESTION */

#question{
    text-align:center;
    font-size:40px;
    margin:25px;
}

/* INPUT */

input{
    display:block;
    margin:auto;
    width:250px;
    padding:15px;
    font-size:28px;
    border-radius:15px;
    border:3px solid pink;
    text-align:center;
}

/* BUTTONS */

.buttons{
    text-align:center;
    margin-top:20px;
}

button{
    padding:16px 22px;
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
    min-height:40px;
    margin-top:20px;
}

h2{
    text-align:center;
    font-size:34px;
    margin-top:40px;
}

</style>
</head>

<body>

<h1>🐶 Ultimate Math Dog World 🐶</h1>

<div id="top">

<div id="skyObject">☀️</div>

<div class="cloud cloud1">☁️</div>
<div class="cloud cloud2">☁️</div>

<!-- DOG -->

<div id="dog">

<div class="ear" id="ear1"></div>
<div class="ear" id="ear2"></div>

<div class="eye" id="eye1"></div>
<div class="eye" id="eye2"></div>

<div id="nose"></div>

<div id="mouth"></div>

</div>

<div id="ground"></div>

</div>

<!-- PANEL -->

<div id="panel">

<div id="stats">

💰 Coins:
<span id="coins">0</span>

|

💎 Gems:
<span id="gems">0</span>

|

🍖 Hunger:
<span id="hunger">100</span>

|

🎉 Happiness:
<span id="happy">100</span>

|

❤️ Friendship:
<span id="friendship">0</span>

|

🎂 Age:
<span id="age">1</span>

|

🏆 Level:
<span id="level">1</span>

</div>

<div id="question">
Choose a difficulty!
</div>

<input
type="number"
id="answer"
placeholder="Answer here">

<div class="buttons">

<button onclick="question('easy')">
Easy
</button>

<button onclick="question('medium')">
Medium
</button>

<button onclick="question('hard')">
Hard
</button>

<button onclick="submitAnswer()">
Submit
</button>

</div>

<h2>🍖 Food Shop</h2>

<div class="buttons">

<button onclick="buyFood(10,10)">
🍎 Apple
</button>

<button onclick="buyFood(20,25)">
🍰 Cake
</button>

<button onclick="buyFood(40,45)">
🍕 Pizza
</button>

<button onclick="buyFood(60,70)">
🥩 Steak
</button>

</div>

<h2>🧸 Toys</h2>

<div class="buttons">

<button onclick="buyToy(20)">
⚽ Ball
</button>

<button onclick="buyToy(35)">
🧸 Teddy
</button>

<button onclick="buyToy(50)">
🦴 Bone
</button>

</div>

<h2>🧼 Care</h2>

<div class="buttons">

<button onclick="bathDog()">
🛁 Bath
</button>

<button onclick="sleepDog()">
🌙 Sleep
</button>

</div>

<h2>🎨 Customization</h2>

<div class="buttons">

<button onclick="changeDogColor()">
🎨 Change Fur
</button>

<button onclick="changeBackground()">
🌈 Background
</button>

</div>

<h2>⭐ Upgrades</h2>

<div class="buttons">

<button onclick="ageUp()">
Age Up (100)
</button>

<button onclick="buyLegendary()">
👑 Legendary Dog
</button>

</div>

<div id="message"></div>

</div>

<script>

/* STATS */

let coins = 0
let gems = 0
let hunger = 100
let happiness = 100
let friendship = 0
let age = 1
let level = 1

let answer = 0
let reward = 0
let streak = 0

const dog =
document.getElementById("dog")

/* MOVE DOG */

function moveDog(){

    let x =
    Math.random()*60+10

    dog.style.left =
    x + "%"

}

setInterval(moveDog,2500)

/* RANDOM */

function rand(min,max){

    return Math.floor(
        Math.random()*
        (max-min+1)
    )+min

}

/* UPDATE */

function update(){

    document.getElementById("coins")
    .innerHTML = coins

    document.getElementById("gems")
    .innerHTML = gems

    document.getElementById("hunger")
    .innerHTML = hunger

    document.getElementById("happy")
    .innerHTML = happiness

    document.getElementById("friendship")
    .innerHTML = friendship

    document.getElementById("age")
    .innerHTML = age

    document.getElementById("level")
    .innerHTML = level

}

/* QUESTIONS */

function question(diff){

    let types = [
        "times",
        "division",
        "sqrt",
        "cube",
        "fraction",
        "mixed"
    ]

    let type =
    types[rand(0,types.length-1)]

    if(diff=="easy"){
        reward=5
    }

    if(diff=="medium"){
        reward=15
    }

    if(diff=="hard"){
        reward=30
    }

    let q = ""

    if(type=="times"){

        let a=rand(2,12)
        let b=rand(2,12)

        answer=a*b

        q=`${a} × ${b}`

    }

    else if(type=="division"){

        let b=rand(2,12)
        let ans=rand(2,12)

        let a=b*ans

        answer=ans

        q=`${a} ÷ ${b}`

    }

    else if(type=="sqrt"){

        let ans=rand(2,15)

        answer=ans

        q=`√${ans*ans}`

    }

    else if(type=="cube"){

        let n=rand(2,5)

        answer=n*n*n

        q=`${n}³`

    }

    else if(type=="fraction"){

        let a=rand(1,9)
        let b=rand(1,9)

        answer=a+b

        q=
        `${a}/10 + ${b}/10
        (numerator only)`

    }

    else{

        let a=rand(1,20)
        let b=rand(1,10)
        let c=rand(1,20)

        answer=(a*b)+c

        q=`${a} × ${b} + ${c}`

    }

    document.getElementById("question")
    .innerHTML=q

}

/* SUBMIT */

function submitAnswer(){

    let user =
    Number(
    document.getElementById("answer")
    .value)

    if(user==answer){

        coins += reward

        friendship += 5

        streak++

        if(streak>=5){

            gems += 1

            document.getElementById("message")
            .innerHTML=
            `🔥 STREAK BONUS!
            You earned a gem 💎`

            streak=0

        }

        else{

            document.getElementById("message")
            .innerHTML=
            `Correct! +${reward} coins 🎉`

        }

    }

    else{

        streak=0

        document.getElementById("message")
        .innerHTML=
        `Wrong 😭 Answer:
        ${answer}`

    }

    level =
    Math.floor(coins/100)+1

    update()

}

/* FOOD */

function buyFood(cost,heal){

    if(coins>=cost){

        coins-=cost

        hunger+=heal

        if(hunger>100){
            hunger=100
        }

        document.getElementById("message")
        .innerHTML=
        "Your dog enjoyed the food!"

    }

    else{

        document.getElementById("message")
        .innerHTML=
        "Not enough coins!"

    }

    update()

}

/* TOYS */

function buyToy(cost){

    if(coins>=cost){

        coins-=cost

        happiness+=20

        friendship+=10

        if(happiness>100){
            happiness=100
        }

        document.getElementById("message")
        .innerHTML=
        "Your dog is happier!"

    }

    else{

        document.getElementById("message")
        .innerHTML=
        "Need more coins!"

    }

    update()

}

/* BATH */

function bathDog(){

    happiness += 10

    document.getElementById("message")
    .innerHTML=
    "Clean doggo 🛁"

    update()

}

/* SLEEP */

function sleepDog(){

    hunger -= 5

    happiness += 15

    document.getElementById("message")
    .innerHTML=
    "Your dog rested 🌙"

    update()

}

/* COLORS */

function changeDogColor(){

    let colors = [
        "#c58c5b",
        "#000000",
        "#ffffff",
        "#d4a373",
        "#888888"
    ]

    dog.style.background =
    colors[rand(0,4)]

}

/* BACKGROUND */

function changeBackground(){

    let colors = [

        "linear-gradient(#87ceeb,#dff6ff)",

        "linear-gradient(#ffb6c1,#ffe4ec)",

        "linear-gradient(#c3b1ff,#e7dcff)",

        "linear-gradient(#ffdd95,#fff4d6)"

    ]

    document.body.style.background =
    colors[rand(0,3)]

}

/* AGE */

function ageUp(){

    if(coins>=100){

        coins-=100

        age++

        dog.style.transform=
        `scale(${1+age*0.1})`

        document.getElementById("message")
        .innerHTML=
        "Your dog grew ⭐"

    }

    else{

        document.getElementById("message")
        .innerHTML=
        "Need 100 coins!"

    }

    update()

}

/* LEGENDARY */

function buyLegendary(){

    if(gems>=5){

        gems-=5

        dog.style.background=
        "gold"

        document.getElementById("message")
        .innerHTML=
        "👑 LEGENDARY DOG UNLOCKED!"

    }

    else{

        document.getElementById("message")
        .innerHTML=
        "Need 5 gems!"

    }

    update()

}

/* DAY/NIGHT */

let day=true

setInterval(function(){

    if(day){

        document.body.style.background =
        "linear-gradient(#0b1d51,#1b2f77)"

        document.getElementById("skyObject")
        .innerHTML="🌙"

        day=false

    }

    else{

        document.body.style.background =
        "linear-gradient(#87ceeb,#dff6ff)"

        document.getElementById("skyObject")
        .innerHTML="☀️"

        day=true

    }

},30000)

/* DECAY */

setInterval(function(){

    hunger-=1
    happiness-=1

    if(hunger<0){
        hunger=0
    }

    if(happiness<0){
        happiness=0
    }

    if(hunger==0 ||
       happiness==0){

        alert(
        "Your dog ran away 😭")

        location.reload()

    }

    update()

},6000)

update()

</script>

</body>
</html>
