<!DOCTYPE html>
<html lang="en">
<head>

<meta charset="UTF-8">
<meta name="viewport"
content="width=device-width, initial-scale=1.0">

<title>Math Dog Kingdom</title>

<style>

body{
    margin:0;
    font-family:Arial;
    overflow-x:hidden;
    transition:1s;
    background:linear-gradient(#87ceeb,#e6f8ff);
}

/* TITLE */

h1{
    text-align:center;
    color:white;
    font-size:55px;
    text-shadow:3px 3px 6px black;
    margin-top:20px;
}

/* SKY */

#top{
    position:relative;
    height:450px;
    overflow:hidden;
}

/* CLOUDS */

.cloud{
    position:absolute;
    font-size:70px;
    animation:cloudMove linear infinite;
}

.c1{
    top:40px;
    animation-duration:25s;
}

.c2{
    top:120px;
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

/* SUN MOON */

#skyObject{
    position:absolute;
    top:40px;
    right:60px;
    font-size:70px;
}

/* DOG */

#dog{
    position:absolute;
    width:240px;
    height:190px;
    left:38%;
    top:180px;
    transition:all 1s ease;
    animation:bounce 1s infinite alternate;
}

/* BODY */

#body{
    position:absolute;
    width:180px;
    height:105px;
    background:#d69c63;
    border-radius:90px;
    bottom:0;
    left:35px;
}

/* HEAD */

#head{
    position:absolute;
    width:125px;
    height:125px;
    background:#d69c63;
    border-radius:50%;
    left:0;
    top:-10px;
}

/* EARS */

.ear{
    position:absolute;
    width:38px;
    height:70px;
    background:#8b5a2b;
    border-radius:50%;
}

#ear1{
    left:5px;
    top:-10px;
    transform:rotate(-25deg);
}

#ear2{
    right:5px;
    top:-10px;
    transform:rotate(25deg);
}

/* EYES */

.eye{
    position:absolute;
    width:13px;
    height:13px;
    background:black;
    border-radius:50%;
    top:45px;
}

#eye1{
    left:30px;
}

#eye2{
    right:30px;
}

/* SNOUT */

#snout{
    position:absolute;
    width:60px;
    height:45px;
    background:#f6d8b3;
    border-radius:50%;
    left:32px;
    top:58px;
}

/* NOSE */

#nose{
    position:absolute;
    width:18px;
    height:12px;
    background:black;
    border-radius:50%;
    left:21px;
    top:10px;
}

/* MOUTH */

#mouth{
    position:absolute;
    width:25px;
    height:12px;
    border-bottom:3px solid black;
    border-radius:50%;
    left:18px;
    top:18px;
}

/* LEGS */

.leg{
    position:absolute;
    width:20px;
    height:55px;
    background:#b67d45;
    bottom:-35px;
    border-radius:12px;
}

#leg1{
    left:25px;
}

#leg2{
    left:65px;
}

#leg3{
    right:65px;
}

#leg4{
    right:25px;
}

/* TAIL */

#tail{
    position:absolute;
    width:70px;
    height:12px;
    background:#8b5a2b;
    right:-45px;
    top:15px;
    border-radius:20px;
    transform-origin:left center;
    animation:wag 0.3s infinite alternate;
}

@keyframes wag{

    from{
        transform:rotate(20deg);
    }

    to{
        transform:rotate(-20deg);
    }

}

@keyframes bounce{

    from{
        transform:translateY(0px);
    }

    to{
        transform:translateY(-12px);
    }

}

/* ACCESSORY */

#accessory{
    position:absolute;
    top:-18px;
    left:40px;
    font-size:45px;
}

/* GROUND */

#ground{
    position:absolute;
    bottom:0;
    width:100%;
    height:120px;
    background:#6ed66e;
}

/* PANEL */

#panel{
    background:white;
    width:92%;
    max-width:1200px;
    margin:30px auto;
    padding:35px;
    border-radius:30px;
    box-shadow:0 0 20px rgba(0,0,0,0.2);
}

/* STATS */

#stats{
    text-align:center;
    font-size:26px;
    line-height:2;
}

/* QUESTION */

#question{
    text-align:center;
    font-size:42px;
    margin:30px;
}

/* INPUT */

input{
    display:block;
    margin:auto;
    width:260px;
    padding:18px;
    font-size:30px;
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
    padding:16px 24px;
    margin:10px;
    border:none;
    border-radius:15px;
    background:#ff69b4;
    color:white;
    font-size:20px;
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
    min-height:50px;
    margin-top:20px;
}

h2{
    text-align:center;
    font-size:35px;
    margin-top:45px;
}

/* INVENTORY */

#inventory{
    background:#f7f7f7;
    padding:20px;
    border-radius:20px;
    margin-top:20px;
    font-size:24px;
}

</style>
</head>

<body>

<h1>🐶 Math Dog Kingdom 🐶</h1>

<div id="top">

<div id="skyObject">☀️</div>

<div class="cloud c1">☁️</div>
<div class="cloud c2">☁️</div>

<!-- DOG -->

<div id="dog">

<div id="head">

<div id="accessory"></div>

<div class="ear" id="ear1"></div>
<div class="ear" id="ear2"></div>

<div class="eye" id="eye1"></div>
<div class="eye" id="eye2"></div>

<div id="snout">

<div id="nose"></div>
<div id="mouth"></div>

</div>

</div>

<div id="body">

<div id="tail"></div>

<div class="leg" id="leg1"></div>
<div class="leg" id="leg2"></div>
<div class="leg" id="leg3"></div>
<div class="leg" id="leg4"></div>

</div>

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

⭐ XP:
<span id="xp">0</span>

|

🏆 Level:
<span id="level">1</span>

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

🔥 Streak:
<span id="streak">0</span>

</div>

<div id="question">
Choose a difficulty!
</div>

<input
type="number"
id="answer"
placeholder="Answer">

<div class="buttons">

<button onclick="newQuestion('easy')">
Easy
</button>

<button onclick="newQuestion('medium')">
Medium
</button>

<button onclick="newQuestion('hard')">
Hard
</button>

<button onclick="submitAnswer()">
Submit
</button>

</div>

<h2>🍖 Food Shop</h2>

<div class="buttons">

<button onclick="buyFood('🍎 Apple',100,10)">
🍎 Apple
</button>

<button onclick="buyFood('🍰 Cake',300,30)">
🍰 Cake
</button>

<button onclick="buyFood('🍕 Pizza',700,50)">
🍕 Pizza
</button>

<button onclick="buyFood('🥩 Steak',1200,80)">
🥩 Steak
</button>

</div>

<h2>🧸 Toys</h2>

<div class="buttons">

<button onclick="buyToy('⚽ Ball',400)">
⚽ Ball
</button>

<button onclick="buyToy('🧸 Teddy',700)">
🧸 Teddy
</button>

<button onclick="buyToy('🦴 Bone',1000)">
🦴 Bone
</button>

</div>

<h2>👑 Accessories</h2>

<div class="buttons">

<button onclick="wearAccessory('👑',2000)">
👑 Crown
</button>

<button onclick="wearAccessory('🕶️',1500)">
🕶️ Glasses
</button>

<button onclick="wearAccessory('🎀',1000)">
🎀 Bow
</button>

</div>

<h2>🛁 Care</h2>

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
🎨 Fur Color
</button>

<button onclick="changeBackground()">
🌈 Background
</button>

</div>

<h2>🎒 Inventory</h2>

<div id="inventory">
No items yet.
</div>

<div id="message"></div>

</div>

<script>

/* STATS */

let coins = 0
let gems = 0
let xp = 0
let level = 1
let hunger = 100
let happiness = 100
let friendship = 0
let age = 1
let streak = 0

let correctAnswer = 0
let reward = 0
let active = false

let inventory = []

/* DOG */

const dog =
document.getElementById("dog")

/* MOVE DOG */

function moveDog(){

    let x =
    Math.random()*55+10

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

    document.getElementById("xp")
    .innerHTML = xp

    document.getElementById("level")
    .innerHTML = level

    document.getElementById("hunger")
    .innerHTML = hunger

    document.getElementById("happy")
    .innerHTML = happiness

    document.getElementById("friendship")
    .innerHTML = friendship

    document.getElementById("age")
    .innerHTML = age

    document.getElementById("streak")
    .innerHTML = streak

    if(inventory.length==0){

        document.getElementById(
        "inventory").innerHTML =
        "No items yet."

    }

    else{

        document.getElementById(
        "inventory").innerHTML =
        inventory.join(" ")

    }

}

/* QUESTIONS */

function newQuestion(level){

    active = true

    document.getElementById(
    "answer").value=""

    let q=""

    /* EASY */

    if(level=="easy"){

        reward=100

        let a=rand(100,999)
        let b=rand(100,999)

        correctAnswer=a+b

        q=`${a} + ${b}`

    }

    /* MEDIUM */

    else if(level=="medium"){

        reward=400

        let a=rand(20,99)
        let b=rand(20,99)

        correctAnswer=a*b

        q=`${a} × ${b}`

    }

    /* HARD */

    else{

        reward=1000

        let type=rand(1,3)

        if(type==1){

            let ans=rand(20,50)

            correctAnswer=ans

            q=`√${ans*ans}`

        }

        else if(type==2){

            let a=rand(100,999)
            let b=rand(20,99)
            let c=rand(50,200)

            correctAnswer=
            (a*b)+c

            q=
            `${a} × ${b}
            + ${c}`

        }

        else{

            let n=rand(10,25)

            correctAnswer=
            n*n*n

            q=`${n}³`

        }

    }

    document.getElementById(
    "question").innerHTML=q

}

/* SUBMIT */

function submitAnswer(){

    if(active==false){

        document.getElementById(
        "message").innerHTML=
        "Generate a question first!"

        return

    }

    let user =
    Number(
    document.getElementById(
    "answer").value)

    if(user==correctAnswer){

        coins += reward

        xp += reward

        friendship += 5

        streak++

        /* LEVEL */

        level =
        Math.floor(xp/5000)+1

        /* STREAK BONUS */

        if(streak>=5){

            gems += 1

            coins += 1000

            document.getElementById(
            "message").innerHTML=
            "🔥 STREAK BONUS! +1 GEM 💎"

        }

        else{

            document.getElementById(
            "message").innerHTML=
            `Correct! +${reward}
            coins 🎉`

        }

    }

    else{

        streak=0

        document.getElementById(
        "message").innerHTML=
        `Wrong 😭 Answer:
        ${correctAnswer}`

    }

    active=false

    update()

}

/* FOOD */

function buyFood(name,cost,heal){

    if(coins>=cost){

        coins-=cost

        hunger+=heal

        happiness+=10

        inventory.push(name)

        if(hunger>100){
            hunger=100
        }

        petTalk(
        "YUMMY THANK YOU!! 🍖")

    }

    else{

        petTalk(
        "I need more coins 😭")

    }

    update()

}

/* TOYS */

function buyToy(name,cost){

    if(coins>=cost){

        coins-=cost

        happiness+=20

        friendship+=15

        inventory.push(name)

        petTalk(
        "YAY I LOVE IT!! 🐶")

    }

    else{

        petTalk(
        "Too poor 😭")

    }

    update()

}

/* ACCESSORIES */

function wearAccessory(
emoji,cost){

    if(coins>=cost){

        coins-=cost

        document.getElementById(
        "accessory").innerHTML=
        emoji

        petTalk(
        "DO I LOOK COOL? 😎")

    }

    else{

        petTalk(
        "Need more coins!")

    }

    update()

}

/* BATH */

function bathDog(){

    happiness+=10

    petTalk(
    "SO CLEAN NOW 🛁")

    update()

}

/* SLEEP */

function sleepDog(){

    happiness+=15

    hunger-=5

    petTalk(
    "Zzzz 🌙")

    update()

}

/* FUR COLORS */

function changeDogColor(){

    let colors=[

        "#d69c63",
        "#ffffff",
        "#000000",
        "#888888",
        "#d4a373"

    ]

    document.getElementById(
    "body").style.background=
    colors[rand(0,4)]

    document.getElementById(
    "head").style.background=
    colors[rand(0,4)]

}

/* BACKGROUND */

function changeBackground(){

    let colors=[

        "linear-gradient(#87ceeb,#e6f8ff)",

        "linear-gradient(#ffb6c1,#ffe6f2)",

        "linear-gradient(#b19cff,#ebe5ff)",

        "linear-gradient(#ffd27f,#fff0cc)"

    ]

    document.body.style.background=
    colors[rand(0,3)]

}

/* PET TALK */

function petTalk(text){

    document.getElementById(
    "message").innerHTML=text

}

/* DAY NIGHT */

let day=true

setInterval(function(){

    if(day){

        document.body.style.background=
        "linear-gradient(#0b1d51,#1f2f70)"

        document.getElementById(
        "skyObject").innerHTML=
        "🌙"

        day=false

    }

    else{

        document.body.style.background=
        "linear-gradient(#87ceeb,#e6f8ff)"

        document.getElementById(
        "skyObject").innerHTML=
        "☀️"

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

    /* EXPRESSIONS */

    if(hunger<30){

        document.getElementById(
        "mouth").style.borderBottom=
        "3px solid red"

    }

    else{

        document.getElementById(
        "mouth").style.borderBottom=
        "3px solid black"

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
