<!DOCTYPE html>
<html lang="en">
<head>

<meta charset="UTF-8">
<meta name="viewport"
content="width=device-width, initial-scale=1.0">

<title>Math Dog Paradise</title>

<style>

body{
    margin:0;
    font-family:Arial;
    background:linear-gradient(to bottom,#87ceeb,#dff6ff);
    overflow-x:hidden;
}

/* TITLE */

h1{
    text-align:center;
    color:white;
    font-size:50px;
    margin-top:20px;
    text-shadow:2px 2px 5px black;
}

/* TOP AREA */

#top{
    position:relative;
    height:420px;
    overflow:hidden;
}

/* CLOUDS */

.cloud{
    position:absolute;
    font-size:60px;
    animation:cloudMove linear infinite;
}

.cloud1{
    top:50px;
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
    position:absolute;
    width:200px;
    height:170px;
    left:40%;
    top:180px;
    animation:bounce 1s infinite alternate;
    transition:left 2s ease;
}

/* BODY */

#body{
    width:180px;
    height:120px;
    background:#d8a36d;
    border-radius:80px;
    position:absolute;
    bottom:0;
}

/* HEAD */

#head{
    width:120px;
    height:120px;
    background:#d8a36d;
    border-radius:50%;
    position:absolute;
    top:-40px;
    left:20px;
}

/* EARS */

.ear{
    width:35px;
    height:60px;
    background:#8b5a2b;
    border-radius:50%;
    position:absolute;
}

#ear1{
    left:10px;
    top:-10px;
    transform:rotate(-20deg);
}

#ear2{
    right:10px;
    top:-10px;
    transform:rotate(20deg);
}

/* EYES */

.eye{
    width:12px;
    height:12px;
    background:black;
    border-radius:50%;
    position:absolute;
    top:45px;
}

#eye1{
    left:35px;
}

#eye2{
    right:35px;
}

/* NOSE */

#nose{
    width:20px;
    height:14px;
    background:black;
    border-radius:50%;
    position:absolute;
    left:50px;
    top:65px;
}

/* MOUTH */

#mouth{
    width:28px;
    height:15px;
    border-bottom:3px solid black;
    border-radius:50%;
    position:absolute;
    left:46px;
    top:72px;
}

/* LEGS */

.leg{
    width:18px;
    height:45px;
    background:#c48b55;
    position:absolute;
    bottom:-35px;
    border-radius:10px;
}

#leg1{
    left:30px;
}

#leg2{
    left:65px;
}

#leg3{
    right:65px;
}

#leg4{
    right:30px;
}

/* TAIL */

#tail{
    width:60px;
    height:12px;
    background:#8b5a2b;
    position:absolute;
    right:-40px;
    top:20px;
    border-radius:20px;
    transform-origin:left center;
    animation:wag 0.4s infinite alternate;
}

/* ANIMATIONS */

@keyframes wag{

    from{
        transform:rotate(15deg);
    }

    to{
        transform:rotate(-15deg);
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

/* GROUND */

#ground{
    position:absolute;
    bottom:0;
    width:100%;
    height:120px;
    background:#6fd96f;
}

/* PANEL */

#panel{
    background:white;
    width:90%;
    max-width:1100px;
    margin:30px auto;
    padding:30px;
    border-radius:25px;
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
    font-size:38px;
    margin:30px;
}

/* INPUT */

input{
    display:block;
    margin:auto;
    width:220px;
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
    font-size:28px;
    color:#ff1493;
    min-height:40px;
    margin-top:20px;
}

h2{
    text-align:center;
    margin-top:40px;
    font-size:34px;
}

</style>
</head>

<body>

<h1>🐶 Math Dog Paradise 🐶</h1>

<div id="top">

<div class="cloud cloud1">☁️</div>
<div class="cloud cloud2">☁️</div>

<!-- DOG -->

<div id="dog">

<div id="body">

<div id="tail"></div>

<div class="leg" id="leg1"></div>
<div class="leg" id="leg2"></div>
<div class="leg" id="leg3"></div>
<div class="leg" id="leg4"></div>

</div>

<div id="head">

<div class="ear" id="ear1"></div>
<div class="ear" id="ear2"></div>

<div class="eye" id="eye1"></div>
<div class="eye" id="eye2"></div>

<div id="nose"></div>

<div id="mouth"></div>

</div>

</div>

<div id="ground"></div>

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
Press a difficulty!
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

<div id="message"></div>

</div>

<script>

let coins = 0
let hunger = 100
let happiness = 100
let age = 1

let correctAnswer = 0
let reward = 0

/* IMPORTANT FIX */

let questionActive = false

/* MOVE DOG */

const dog =
document.getElementById("dog")

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

    document.getElementById("hunger")
    .innerHTML = hunger

    document.getElementById("happy")
    .innerHTML = happiness

    document.getElementById("age")
    .innerHTML = age

}

/* NEW QUESTION */

function newQuestion(level){

    questionActive = true

    document.getElementById("answer")
    .value = ""

    if(level=="easy"){
        reward=5
    }

    if(level=="medium"){
        reward=15
    }

    if(level=="hard"){
        reward=30
    }

    let type =
    rand(1,6)

    let q = ""

    if(type==1){

        let a=rand(2,12)
        let b=rand(2,12)

        correctAnswer=a*b

        q=`${a} × ${b}`

    }

    else if(type==2){

        let b=rand(2,12)
        let ans=rand(2,12)

        let a=b*ans

        correctAnswer=ans

        q=`${a} ÷ ${b}`

    }

    else if(type==3){

        let ans=rand(2,15)

        correctAnswer=ans

        q=`√${ans*ans}`

    }

    else if(type==4){

        let n=rand(2,5)

        correctAnswer=n*n*n

        q=`${n}³`

    }

    else if(type==5){

        let a=rand(10,99)
        let b=rand(10,99)

        correctAnswer=a+b

        q=`${a} + ${b}`

    }

    else{

        let a=rand(50,100)
        let b=rand(1,49)

        correctAnswer=a-b

        q=`${a} - ${b}`

    }

    document.getElementById("question")
    .innerHTML=q

}

/* SUBMIT */

function submitAnswer(){

    if(questionActive==false){

        document.getElementById("message")
        .innerHTML=
        "Generate a question first!"

        return

    }

    let user =
    Number(
    document.getElementById("answer")
    .value)

    if(user==correctAnswer){

        coins += reward

        document.getElementById("message")
        .innerHTML=
        `Correct! +${reward} coins 🎉`

    }

    else{

        document.getElementById("message")
        .innerHTML=
        `Wrong 😭 Answer:
        ${correctAnswer}`

    }

    /* LOCK QUESTION */

    questionActive = false

    document.getElementById("answer")
    .value = ""

    update()

}

/* FOOD */

function buyFood(cost,heal){

    if(coins>=cost){

        coins-=cost

        hunger+=heal

        happiness+=5

        if(hunger>100){
            hunger=100
        }

        document.getElementById("message")
        .innerHTML=
        "Dog enjoyed the food!"

    }

    else{

        document.getElementById("message")
        .innerHTML=
        "Not enough coins!"

    }

    update()

}

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
