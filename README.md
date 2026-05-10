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
    background:black;
}

canvas{
    display:block;
}

/* UI */

#ui{
    position:absolute;
    top:10px;
    left:10px;
    background:rgba(255,255,255,0.9);
    padding:12px;
    border-radius:12px;
    border:3px solid black;
    z-index:10;
    font-size:18px;
    line-height:1.7;
}

/* QUESTION */

#questionBox{
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    background:white;
    padding:25px;
    border-radius:20px;
    border:5px solid black;
    display:none;
    z-index:20;
    text-align:center;
    width:300px;
}

#question{
    font-size:34px;
    margin-bottom:20px;
}

input{
    width:150px;
    padding:12px;
    font-size:24px;
    text-align:center;
    border-radius:12px;
    border:3px solid black;
}

button{
    margin-top:18px;
    padding:10px 18px;
    font-size:18px;
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
    margin-top:15px;
    min-height:30px;
    color:#ff1493;
    font-size:22px;
}

</style>
</head>

<body>

<!-- UI -->

<div id="ui">

💰 Coins:
<span id="coins">0</span>

<br>

⭐ XP:
<span id="xp">0</span>

<br>

🏆 Level:
<span id="level">1</span>

<br>

❤️ Hearts:
<span id="hearts">3</span>

<br>

🗺️ Area:
<span id="area">Academy Town</span>

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

<canvas id="game"></canvas>

<script>

/* CANVAS */

const canvas =
document.getElementById("game")

const ctx =
canvas.getContext("2d")

canvas.width =
window.innerWidth

canvas.height =
window.innerHeight

/* PLAYER */

let player={

x:200,
y:300,

w:48,
h:48,

speed:4,

frame:0

}

/* STATS */

let coins=0
let xp=0
let level=1
let hearts=3

/* KEYS */

let keys={}

document.addEventListener(
"keydown",

e=>{

keys[e.key]=true

})

document.addEventListener(
"keyup",

e=>{

keys[e.key]=false

})

/* AREAS */

let area="Academy Town"

/* NPCS */

const npcs=[

{

x:700,
y:320,

color:"#3498db",

name:"Teacher",

type:"math"

},

{

x:1000,
y:320,

color:"#e74c3c",

name:"Boss",

type:"boss"

}

]

/* QUESTION */

let active=false
let correct=0
let reward=0

/* RANDOM */

function rand(min,max){

return Math.floor(
Math.random()*
(max-min+1))+min

}

/* UPDATE UI */

function updateUI(){

document.getElementById(
"coins").innerHTML=coins

document.getElementById(
"xp").innerHTML=xp

document.getElementById(
"level").innerHTML=level

document.getElementById(
"hearts").innerHTML=hearts

document.getElementById(
"area").innerHTML=area

}

/* MOVE */

function movePlayer(){

if(active) return

if(keys["ArrowUp"])
player.y-=player.speed

if(keys["ArrowDown"])
player.y+=player.speed

if(keys["ArrowLeft"])
player.x-=player.speed

if(keys["ArrowRight"])
player.x+=player.speed

/* ANIMATION */

player.frame++

}

/* COLLISION */

function touching(a,b){

return(

a.x < b.x+48 &&
a.x+a.w > b.x &&
a.y < b.y+48 &&
a.y+a.h > b.y

)

}

/* START QUESTION */

function startQuestion(type){

active=true

document.getElementById(
"questionBox").style.display=
"block"

document.getElementById(
"answer").value=""

let q=""

/* NORMAL */

if(type=="math"){

let difficulty=
Math.min(level,4)

if(difficulty==1){

let a=rand(100,999)
let b=rand(100,999)

correct=a+b
reward=100

q=`${a} + ${b}`

}

else if(difficulty==2){

let a=rand(20,99)
let b=rand(20,99)

correct=a*b
reward=250

q=`${a} × ${b}`

}

else if(difficulty==3){

let n=rand(15,40)

correct=n

reward=500

q=`√${n*n}`

}

else{

let n=rand(10,20)

correct=n*n*n

reward=1000

q=`${n}³`

}

}

/* BOSS */

else{

let a=rand(50,120)
let b=rand(10,50)
let c=rand(100,300)

correct=(a*b)+c

reward=2000

q=`${a} × ${b}
+ ${c}`

}

document.getElementById(
"question").innerHTML=q

}

/* SUBMIT */

function submitAnswer(){

let user=Number(

document.getElementById(
"answer").value

)

if(user==correct){

coins+=reward

xp+=reward

level=
Math.floor(xp/1000)+1

document.getElementById(
"message").innerHTML=
"CORRECT 🎉"

}

else{

hearts--

document.getElementById(
"message").innerHTML=
"WRONG 😭"

if(hearts<=0){

alert(
"GAME OVER 😭")

location.reload()

}

}

setTimeout(()=>{

document.getElementById(
"questionBox").style.display=
"none"

document.getElementById(
"message").innerHTML=""

active=false

},1000)

}

/* DRAW PIXEL DOG */

function drawDog(){

/* BODY */

ctx.fillStyle="#c98b52"

ctx.fillRect(
player.x+10,
player.y+14,
28,
20)

/* HEAD */

ctx.fillRect(
player.x,
player.y,
24,
24)

/* EARS */

ctx.fillStyle="#8b5a2b"

ctx.fillRect(
player.x,
player.y-6,
6,
10)

ctx.fillRect(
player.x+18,
player.y-6,
6,
10)

/* EYES */

ctx.fillStyle="black"

ctx.fillRect(
player.x+5,
player.y+8,
3,
3)

ctx.fillRect(
player.x+15,
player.y+8,
3,
3)

/* LEGS */

ctx.fillStyle="#a56d3f"

let bounce=
Math.sin(player.frame*0.2)*2

ctx.fillRect(
player.x+12,
player.y+32+bounce,
6,
12)

ctx.fillRect(
player.x+28,
player.y+32-bounce,
6,
12)

/* TAIL */

ctx.fillStyle="#8b5a2b"

ctx.fillRect(
player.x+38,
player.y+18,
10,
4)

}

/* DRAW MAP */

function drawMap(){

/* SKY */

ctx.fillStyle="#7ec8ff"

ctx.fillRect(
0,0,
canvas.width,
canvas.height)

/* SUN */

ctx.fillStyle="#ffd84d"

ctx.beginPath()

ctx.arc(
canvas.width-100,
100,
50,
0,
Math.PI*2)

ctx.fill()

/* GROUND */

ctx.fillStyle="#6fd66f"

ctx.fillRect(
0,
400,
canvas.width,
300)

/* BUILDINGS */

/* SCHOOL */

ctx.fillStyle="#ffdb7a"

ctx.fillRect(
600,
220,
140,
180)

/* SHOP */

ctx.fillStyle="#ff9ecf"

ctx.fillRect(
900,
240,
120,
160)

/* LABELS */

ctx.fillStyle="black"

ctx.font="22px Arial"

ctx.fillText(
"ACADEMY",
610,
210)

ctx.fillText(
"SHOP",
920,
230)

}

/* DRAW NPCS */

function drawNPCs(){

npcs.forEach(n=>{

ctx.fillStyle=n.color

ctx.fillRect(
n.x,
n.y,
48,
48)

ctx.fillStyle="black"

ctx.fillText(
n.name,
n.x-10,
n.y-10)

})

}

/* INTERACTIONS */

function checkNPCs(){

npcs.forEach(n=>{

if(touching(player,n)
&& !active){

startQuestion(n.type)

}

})

}

/* GAME LOOP */

function loop(){

ctx.clearRect(
0,0,
canvas.width,
canvas.height)

movePlayer()

drawMap()

drawNPCs()

drawDog()

checkNPCs()

updateUI()

requestAnimationFrame(loop)

}

loop()

</script>

</body>
</html>
