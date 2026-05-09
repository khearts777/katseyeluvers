<!DOCTYPE html>
<html lang="en">
<head>

<meta charset="UTF-8">
<meta name="viewport"
content="width=device-width, initial-scale=1.0">

<title>Math Dog Adventure</title>

<style>

/* BODY */

body{
    margin:0;
    font-family:Arial;
    overflow:hidden;
    background:#87ceeb;
}

/* START SCREEN */

#startScreen{
    position:absolute;
    width:100%;
    height:100vh;
    background:
    linear-gradient(#8fd3ff,#dff6ff);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    z-index:10;
}

#startScreen h1{
    color:white;
    font-size:70px;
    text-shadow:3px 3px 8px black;
}

#playButton{
    padding:22px 50px;
    border:none;
    border-radius:20px;
    background:#ff69b4;
    color:white;
    font-size:30px;
    cursor:pointer;
}

#playButton:hover{
    background:#ff1493;
}

/* GAME */

#game{
    width:100%;
    height:100vh;
    position:relative;
}

/* TOP BAR */

#topBar{
    position:absolute;
    top:0;
    width:100%;
    height:90px;
    background:rgba(255,255,255,0.8);
    display:flex;
    justify-content:space-around;
    align-items:center;
    font-size:24px;
    z-index:5;
}

/* WORLD */

#world{
    width:100%;
    height:100%;
    position:relative;
    background:
    linear-gradient(#87ceeb,#dff6ff);
    overflow:hidden;
}

/* SUN */

#sun{
    position:absolute;
    top:40px;
    right:60px;
    font-size:80px;
}

/* CLOUDS */

.cloud{
    position:absolute;
    font-size:70px;
    animation:cloudMove linear infinite;
}

.c1{
    top:50px;
    animation-duration:25s;
}

.c2{
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

/* GROUND */

#ground{
    position:absolute;
    bottom:0;
    width:100%;
    height:180px;
    background:#6fd96f;
}

/* DOG */

#dog{
    position:absolute;
    width:220px;
    height:200px;
    left:40%;
    bottom:110px;
    transition:1s;
}

/* BODY */

#dogBody{
    position:absolute;
    width:170px;
    height:100px;
    background:#d49a61;
    border-radius:90px;
    bottom:0;
    left:40px;
}

/* HEAD */

#dogHead{
    position:absolute;
    width:120px;
    height:120px;
    background:#d49a61;
    border-radius:50%;
    left:0;
    top:20px;
}

/* EARS */

.ear{
    position:absolute;
    width:35px;
    height:70px;
    background:#8b5a2b;
    border-radius:50%;
}

#ear1{
    left:5px;
    top:-5px;
    transform:rotate(-20deg);
}

#ear2{
    right:5px;
    top:-5px;
    transform:rotate(20deg);
}

/* EYES */

.eye{
    position:absolute;
    width:12px;
    height:12px;
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

/* BLINK */

.blink{
    height:3px !important;
    top:50px !important;
}

/* SNOUT */

#snout{
    position:absolute;
    width:55px;
    height:40px;
    background:#f5d7b2;
    border-radius:50%;
    left:32px;
    top:60px;
}

/* NOSE */

#nose{
    position:absolute;
    width:16px;
    height:10px;
    background:black;
    border-radius:50%;
    left:19px;
    top:8px;
}

/* MOUTH */

#mouth{
    position:absolute;
    width:24px;
    height:12px;
    border-bottom:3px solid black;
    border-radius:50%;
    left:16px;
    top:15px;
}

/* LEGS */

.leg{
    position:absolute;
    width:18px;
    height:55px;
    background:#b67d45;
    bottom:-30px;
    border-radius:12px;
    animation:walk 0.4s infinite alternate;
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

@keyframes walk{

    from{
        transform:rotate(8deg);
    }

    to{
        transform:rotate(-8deg);
    }

}

/* TAIL */

#tail{
    position:absolute;
    width:65px;
    height:12px;
    background:#8b5a2b;
    right:-40px;
    top:20px;
    border-radius:20px;
    transform-origin:left center;
    animation:wag 0.2s infinite alternate;
}

@keyframes wag{

    from{
        transform:rotate(20deg);
    }

    to{
        transform:rotate(-20deg);
    }

}

/* BUTTONS */

#buttons{
    position:absolute;
    bottom:20px;
    width:100%;
    text-align:center;
    z-index:5;
}

button{
    padding:15px 22px;
    margin:8px;
    border:none;
    border-radius:16px;
    background:#ff69b4;
    color:white;
    font-size:20px;
    cursor:pointer;
}

button:hover{
    background:#ff1493;
}

/* QUESTION BOX */

#questionBox{
    position:absolute;
    top:120px;
    left:50%;
    transform:translateX(-50%);
    width:500px;
    background:white;
    padding:25px;
    border-radius:25px;
    text-align:center;
    display:none;
    box-shadow:0 0 20px rgba(0,0,0,0.3);
}

#question{
    font-size:40px;
    margin-bottom:20px;
}

input{
    width:200px;
    padding:15px;
    font-size:28px;
    text-align:center;
    border-radius:15px;
    border:3px solid pink;
}

#message{
    margin-top:20px;
    font-size:28px;
    color:#ff1493;
    min-height:40px;
}

/* LOCATION */

#location{
    position:absolute;
    top:100px;
    left:20px;
    background:white;
    padding:15px 20px;
    border-radius:20px;
    font-size:24px;
}

</style>
</head>

<body>

<!-- START SCREEN -->

<div id="startScreen">

<h1>🐶 Math Dog Adventure 🐶</h1>

<button id="playButton"
onclick="startGame()">
PLAY
</button>

</div>

<!-- GAME -->

<div id="game">

<!-- TOP BAR -->

<div id="topBar">

<div>
💰 Coins:
<span id="coins">0</span>
</div>

<div>
⭐ XP:
<span id="xp">0</span>
</div>

<div>
🏆 Level:
<span id="level">1</span>
</div>

<div>
🍖 Hunger:
<span id="hunger">100</span>
</div>

<div>
🎉 Happiness:
<span id="happy">100</span>
</div>

</div>

<!-- WORLD -->

<div id="world">

<div id="sun">☀️</div>

<div class="cloud c1">☁️</div>
<div class="cloud c2">☁️</div>

<div id="location">
🏠 Home
</div>

<!-- DOG -->

<div id="dog">

<div id="dogHead">

<div class="ear" id="ear1"></div>
<div class="ear" id="ear2"></div>

<div class="eye" id="eye1"></div>
<div class="eye" id="eye2"></div>

<div id="snout">

<div id="nose"></div>
<div id="mouth"></div>

</div>

</div>

<div id="dogBody">

<div id="tail"></div>

<div class="leg" id="leg1"></div>
<div class="leg" id="leg2"></div>
<div class="leg" id="leg3"></div>
<div class="leg" id="leg4"></div>

</div>

</div>

<div id="ground"></div>

<!-- QUESTION -->

<div id="questionBox">

<div id="question">
Question
</div>

<input
type="number"
id="answer">

<br><br>

<button onclick="submitAnswer()">
Submit
</button>

<div id="message"></div>

</div>

<!-- BUTTONS -->

<div id="buttons">

<button onclick="goHome()">
🏠 Home
</button>

<button onclick="goSchool()">
🎓 Math School
</button>

<button onclick="goPark()">
🌳 Park
</button>

<button onclick="feedDog()">
🍖 Feed
</button>

<button onclick="playDog()">
🧸 Play
</button>

</div>

</div>

</div>

<script>

/* STATS */

let coins = 0
let xp = 0
let level = 1
let hunger = 100
let happiness = 100

let correctAnswer = 0
let reward = 0
let active = false

/* START */

function startGame(){

    document.getElementById(
    "startScreen").style.display=
    "none"

}

/* UPDATE */

function update(){

    document.getElementById(
    "coins").innerHTML=coins

    document.getElementById(
    "xp").innerHTML=xp

    document.getElementById(
    "level").innerHTML=level

    document.getElementById(
    "hunger").innerHTML=hunger

    document.getElementById(
    "happy").innerHTML=happiness

}

/* RANDOM */

function rand(min,max){

    return Math.floor(
        Math.random()*
        (max-min+1)
    )+min

}

/* LOCATIONS */

function goHome(){

    document.getElementById(
    "location").innerHTML=
    "🏠 Home"

    document.body.style.background=
    "#87ceeb"

}

function goPark(){

    document.getElementById(
    "location").innerHTML=
    "🌳 Park"

    document.body.style.background=
    "#8be28b"

}

function goSchool(){

    document.getElementById(
    "location").innerHTML=
    "🎓 Math School"

    document.getElementById(
    "questionBox").style.display=
    "block"

    newQuestion()

}

/* QUESTIONS */

function newQuestion(){

    active=true

    let difficulty=
    rand(1,3)

    let q=""

    /* EASY */

    if(difficulty==1){

        reward=100

        let a=rand(100,999)
        let b=rand(100,999)

        correctAnswer=a+b

        q=`${a} + ${b}`

    }

    /* MEDIUM */

    else if(difficulty==2){

        reward=400

        let a=rand(20,99)
        let b=rand(20,99)

        correctAnswer=a*b

        q=`${a} × ${b}`

    }

    /* HARD */

    else{

        reward=1000

        let a=rand(100,999)
        let b=rand(20,99)
        let c=rand(50,200)

        correctAnswer=
        (a*b)+c

        q=
        `${a} × ${b}
        + ${c}`

    }

    document.getElementById(
    "question").innerHTML=q

}

/* SUBMIT */

function submitAnswer(){

    if(active==false){

        return

    }

    let user =
    Number(
    document.getElementById(
    "answer").value)

    if(user==correctAnswer){

        coins += reward

        xp += reward

        happiness += 5

        level =
        Math.floor(xp/5000)+1

        document.getElementById(
        "message").innerHTML=
        `Correct! +${reward}
        coins 🎉`

        newQuestion()

    }

    else{

        document.getElementById(
        "message").innerHTML=
        `Wrong 😭`

    }

    update()

}

/* FEED */

function feedDog(){

    if(coins>=200){

        coins-=200

        hunger+=20

        if(hunger>100){
            hunger=100
        }

        document.getElementById(
        "message").innerHTML=
        "DOG IS HAPPY 🍖"

    }

    else{

        document.getElementById(
        "message").innerHTML=
        "Need more coins!"

    }

    update()

}

/* PLAY */

function playDog(){

    happiness+=15

    if(happiness>100){
        happiness=100
    }

    document.getElementById(
    "message").innerHTML=
    "DOG HAD FUN 🧸"

    update()

}

/* MOVE DOG */

const dog =
document.getElementById("dog")

function moveDog(){

    let x=
    Math.random()*55+10

    dog.style.left=
    x+"%"

}

setInterval(moveDog,2500)

/* BLINK */

function blink(){

    document.getElementById(
    "eye1").classList.add(
    "blink")

    document.getElementById(
    "eye2").classList.add(
    "blink")

    setTimeout(function(){

        document.getElementById(
        "eye1").classList.remove(
        "blink")

        document.getElementById(
        "eye2").classList.remove(
        "blink")

    },200)

}

setInterval(blink,3000)

/* DAY NIGHT */

let day=true

setInterval(function(){

    if(day){

        document.getElementById(
        "world").style.background=
        "linear-gradient(#0b1d51,#1f2f70)"

        document.getElementById(
        "sun").innerHTML=
        "🌙"

        day=false

    }

    else{

        document.getElementById(
        "world").style.background=
        "linear-gradient(#87ceeb,#dff6ff)"

        document.getElementById(
        "sun").innerHTML=
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

    if(hunger==0 ||
       happiness==0){

        alert(
        "Your dog ran away 😭")

        location.reload()

    }

    update()

},7000)

update()

</script>

</body>
</html>
