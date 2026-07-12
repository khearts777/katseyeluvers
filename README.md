
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>☁️ Cloudberry Study Timer</title>

<style>
body{
    margin:0;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:linear-gradient(135deg,#ffe7f4,#fff7fb,#e8f8ff);
    font-family:Arial,sans-serif;
    overflow:hidden;
}

/* Floating hearts */
body::before{
    content:"🌸 🍓 ☁️ 💗 ✨";
    position:absolute;
    top:20px;
    width:100%;
    text-align:center;
    font-size:30px;
    animation:float 5s ease-in-out infinite;
}

@keyframes float{
    0%{transform:translateY(0);}
    50%{transform:translateY(12px);}
    100%{transform:translateY(0);}
}

.card{
    background:white;
    width:370px;
    padding:30px;
    border-radius:30px;
    text-align:center;
    box-shadow:0 15px 35px rgba(255,170,210,.4);
}

h1{
    color:#ff69a8;
}

#timer{
    font-size:70px;
    font-weight:bold;
    color:#ff4d94;
    margin:20px 0;
}

button{
    padding:12px 22px;
    margin:6px;
    border:none;
    border-radius:15px;
    background:#ff9ec8;
    color:white;
    cursor:pointer;
    font-size:16px;
    transition:.2s;
}

button:hover{
    transform:scale(1.05);
    background:#ff7ab8;
}

#sessions{
    font-size:28px;
    color:#ff69a8;
}

#quote{
    color:#666;
    font-style:italic;
}
</style>

</head>

<body>

<div class="card">

<h1>☁️ Cloudberry Study 🍓</h1>

<div id="timer">25:00</div>

<button onclick="startTimer()">▶ Start</button>
<button onclick="pauseTimer()">⏸ Pause</button>
<button onclick="resetTimer()">🔄 Reset</button>

<h3>⭐ Sessions Completed</h3>
<p id="sessions">0</p>

<h3>💖 Motivation</h3>
<p id="quote">You can do it! 🌸</p>

</div>

<script>

let time=25*60;
let timer;
let running=false;
let sessions=0;

const quotes=[
"🌸 One page at a time!",
"🍓 You're doing amazing!",
"☁️ Keep going!",
"💗 Future you will thank you!",
"✨ Stay focused!",
"🩷 Believe in yourself!"
];

function updateDisplay(){

let m=Math.floor(time/60);
let s=time%60;

document.getElementById("timer").textContent=
String(m).padStart(2,"0")+":"+String(s).padStart(2,"0");

}

function startTimer(){

if(running)return;

running=true;

timer=setInterval(()=>{

if(time>0){

time--;
updateDisplay();

}else{

clearInterval(timer);
running=false;

sessions++;
document.getElementById("sessions").textContent=sessions;

document.getElementById("quote").textContent=
quotes[Math.floor(Math.random()*quotes.length)];

alert("🎉 Great job! Time for a break!");

}

},1000);

}

function pauseTimer(){

clearInterval(timer);
running=false;

}

function resetTimer(){

clearInterval(timer);
running=false;
time=25*60;
updateDisplay();

}

updateDisplay();

</script>

</body>
</html>
