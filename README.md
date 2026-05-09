<!DOCTYPE html>
<html lang="en">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Math Dog Academy</title>

<style>

body{
    margin:0;
    overflow:hidden;
    font-family:Arial;
    background:#7ec8ff;
}

/* PIXEL STYLE */

*{
    image-rendering:pixelated;
}

/* GAME */

#game{
    width:100vw;
    height:100vh;
    position:relative;
    overflow:hidden;
}

/* SKY */

#sky{
    position:absolute;
    width:100%;
    height:100%;
    background:
    linear-gradient(
    #7ec8ff 0%,
    #bfe9ff 70%,
    #7fd66f 70%,
    #7fd66f 100%);
}

/* SUN */

#sun{
    position:absolute;
    top:40px;
    right:60px;
    width:90px;
    height:90px;
    background:#ffd84d;
    border-radius:50%;
}

/* CLOUDS */

.cloud{
    position:absolute;
    width:140px;
    height:60px;
    background:white;
    border-radius:20px;
    animation:moveCloud 25s linear infinite;
}

.c1{
    top:80px;
    left:-200px;
}

.c2{
    top:170px;
    left:-400px;
    animation-duration:40s;
}

@keyframes moveCloud{

    from{
        transform:translateX(0);
    }

    to{
        transform:translateX(1600px);
    }

}

/* BUILDINGS */

.building{
    position:absolute;
    bottom:140px;
    width:180px;
    height:180px;
    border:6px solid black;
    cursor:pointer;
    transition:0.2s;
}

.building:hover{
    transform:scale(1.05);
}

#school{
    left:120px;
    background:#ffdb7a;
}

#shop{
    left:420px;
    background:#ff9ecf;
}

#park{
    left:720px;
    background:#98ff98;
}

/* WINDOWS */

.window{
    width:35px;
    height:35px;
    background:#bce6ff;
    border:4px solid black;
    position:absolute;
}

/* LABEL */

.label{
    position:absolute;
    bottom:-45px;
    width:100%;
    text-align:center;
    font-size:24px;
    font-weight:bold;
}

/* DOG */

#dog{
    position:absolute;
    width:96px;
    height:96px;
    bottom:120px;
    left:50%;
    transform:translateX(-50%);
}

/* PIXEL DOG PARTS */

.pixel{
    position:absolute;
}

/* BODY */

#body{
    width:56px;
    height:38px;
    background:#c98b52;
    left:20px;
    top:35px;
}

/* HEAD */

#head{
    width:38px;
    height:38px;
    background:#c98b52;
    left:0;
    top:20px;
}

/* EARS */

.ear{
    width:10px;
    height:16px;
    background:#8b5a2b;
    top:8px;
}

#ear1{
    left:0;
}

#ear2{
    left:26px;
}

/* EYES */

.eye{
    width:5px;
    height:5px;
    background:black;
    top:35px;
}

#eye1{
    left:10px;
}

#eye2{
    left:24px;
}

/* LEGS */

.leg{
    width:10px;
    height:22px;
    background:#a56d3f;
    top:65px;
    animation:walk 0.3s infinite alternate;
}

#leg1{
    left:25px;
}

#leg2{
    left:55px;
}

@keyframes walk{

    from{
        transform:translateY(0);
    }

    to{
        transform:translateY(4px);
    }

}

/* TAIL */

#tail{
    width:20px;
    height:8px;
    background:#8b5a2b;
    top:38px;
    left:72px;
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

/* UI */

#ui{
    position:absolute;
    top:15px;
    left:50%;
    transform:translateX(-50%);
    background:white;
    padding:15px 30px;
    border:5px solid black;
    border-radius:15px;
    font-size:24px;
}

/* QUESTION BOX */

#questionBox{
    position:absolute;
    width:420px;
    background:white;
    border:6px solid black;
    border-radius:20px;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    padding:30px;
    display:none;
    text-align:center;
}

#question{
    font-size:42px;
    margin-bottom:20px;
}

input{
    width:180px;
    padding:15px;
    font-size:28px;
    text-align:center;
    border:4px solid black;
    border-radius:12px;
}

button{
    margin-top:20px;
    padding:14px 25px;
    font-size:22px;
    border:none;
    border-radius:12px;
    background:#ff69b4;
    color:white;
    cursor:pointer;
}

button:hover{
    background:#ff1493;
}

#message{
    margin-top:20px;
    font-size:24px;
    color:#ff1493;
    min-height:30px;
}

</style>
</head>

<body>

<div id="game">

<div id="sky"></div>

<div id="sun"></div>

<div class="cloud c1"></div>
<div class="cloud c2"></div>

<!-- UI -->

<div id="ui">

💰 Coins:
<span id="coins">0</span>

|

⭐ Level:
<span id="level">1</span>

|

🏆 XP:
<span id="xp">0</span>

</div>

<!-- BUILDINGS -->

<div class="building" id="school"
onclick="openSchool()">

<div class="window"
style="top:30px;left:30px"></div>

<div class="window"
style="top:30px;right:30px"></div>

<div class="window"
style="bottom:30px;left:30px"></div>

<div class="window"
style="bottom:30px;right:30px"></div>

<div class="label">
🎓 Academy
</div>

</div>

<div class="building" id="shop">

<div class="window"
style="top:30px;left:30px"></div>

<div class="window"
style="top:30px;right:30px"></div>

<div class="label">
🛒 Shop
</div>

</div>

<div class="building" id="park">

<div class="label">
🌳 Park
</div>

</div>

<!-- DOG -->

<div id="dog">

<div class="pixel ear" id="ear1"></div>
<div class="pixel ear" id="ear2"></div>

<div class="pixel" id="head"></div>

<div class="pixel eye" id="eye1"></div>
<div class="pixel eye" id="eye2"></div>

<div class="pixel" id="body"></div>

<div class="pixel leg" id="leg1"></div>
<div class="pixel leg" id="leg2"></div>

<div class="pixel" id="tail"></div>

</div>

<!-- QUESTION -->

<div id="questionBox">

<div id="question">
Question
</div>

<input type="number" id="answer">

<br>

<button onclick="submitAnswer()">
Submit
</button>

<div id="message"></div>

</div>

</div>

<script>

let coins = 0
let xp = 0
let level = 1

let correctAnswer = 0

function update(){

    document.getElementById(
    "coins").innerHTML=coins

    document.getElementById(
    "xp").innerHTML=xp

    document.getElementById(
    "level").innerHTML=level

}

function rand(min,max){

    return Math.floor(
    Math.random()*
    (max-min+1))+min

}

/* OPEN SCHOOL */

function openSchool(){

    document.getElementById(
    "questionBox").style.display=
    "block"

    newQuestion()

}

/* QUESTIONS */

function newQuestion(){

    let type=rand(1,4)

    let q=""

    /* EASY */

    if(level<=2){

        let a=rand(100,999)
        let b=rand(100,999)

        correctAnswer=a+b

        q=`${a} + ${b}`

    }

    /* MEDIUM */

    else if(level<=4){

        let a=rand(20,99)
        let b=rand(20,99)

        correctAnswer=a*b

        q=`${a} × ${b}`

    }

    /* HARD */

    else{

        if(type==1){

            let ans=rand(20,50)

            correctAnswer=ans

            q=`√${ans*ans}`

        }

        else if(type==2){

            let n=rand(10,20)

            correctAnswer=n*n*n

            q=`${n}³`

        }

        else{

            let a=rand(100,999)
            let b=rand(20,99)

            correctAnswer=a*b

            q=`${a} × ${b}`

        }

    }

    document.getElementById(
    "question").innerHTML=q

}

/* SUBMIT */

function submitAnswer(){

    let user =
    Number(
    document.getElementById(
    "answer").value)

    if(user==correctAnswer){

        coins += level*100
        xp += 200

        level =
        Math.floor(xp/1000)+1

        document.getElementById(
        "message").innerHTML=
        "CORRECT 🎉"

        newQuestion()

    }

    else{

        document.getElementById(
        "message").innerHTML=
        "Wrong 😭"

    }

    update()

}

/* MOVE DOG */

const dog =
document.getElementById("dog")

setInterval(function(){

    let x=
    Math.random()*70+10

    dog.style.left=
    x+"%"

},3000)

update()

</script>

</body>
</html>
