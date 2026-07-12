
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>☁️ Cloudberry Study</title>

<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&display=swap" rel="stylesheet">

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:"Quicksand",sans-serif;
}

body{

height:100vh;
overflow:hidden;

display:flex;
justify-content:center;
align-items:center;

background:
linear-gradient(135deg,#ffdff1,#ffeef8,#e8f8ff);

}

/* Clouds */

.cloud{

position:absolute;
font-size:70px;
opacity:.35;

animation:moveClouds linear infinite;

}

.cloud:nth-child(1){

top:10%;
left:-200px;
animation-duration:40s;

}

.cloud:nth-child(2){

top:25%;
left:-300px;
animation-duration:55s;
font-size:90px;

}

.cloud:nth-child(3){

top:70%;
left:-250px;
animation-duration:50s;

}

@keyframes moveClouds{

from{
transform:translateX(0);
}

to{
transform:translateX(160vw);
}

}

/* Petals */

.petal{

position:absolute;

font-size:22px;

animation:fall linear infinite;

}

@keyframes fall{

0%{

transform:
translateY(-100px)
rotate(0deg);

}

100%{

transform:
translateY(120vh)
translateX(100px)
rotate(360deg);

}

}

/* Glass Card */

.card{

width:430px;

padding:35px;

border-radius:35px;

background:rgba(255,255,255,.35);

backdrop-filter:blur(20px);

box-shadow:
0 15px 40px rgba(255,150,200,.35);

text-align:center;

border:1px solid rgba(255,255,255,.5);

z-index:10;

}

h1{

font-size:35px;

color:#ff5b9d;

margin-bottom:10px;

}

.subtitle{

color:#777;

margin-bottom:25px;

}

#timer{

font-size:74px;

font-weight:bold;

color:#ff4d94;

margin:25px;

transition:.3s;

}

.timer-settings{

display:flex;
justify-content:center;
align-items:center;
gap:10px;
margin-bottom:20px;

}

.timer-settings input{

width:70px;

padding:8px;

border-radius:12px;

border:none;

text-align:center;

font-size:18px;

background:white;

}

button{

padding:13px 22px;

border:none;

border-radius:18px;

margin:6px;

cursor:pointer;

font-size:16px;

background:#ff9dc9;

color:white;

transition:.25s;

}

button:hover{

transform:translateY(-3px);

background:#ff79b4;

}

.quote{

margin-top:25px;

font-style:italic;

color:#666;

}

.sparkle{

position:absolute;
font-size:18px;
animation:twinkle 2s infinite alternate;

}

@keyframes twinkle{

from{
opacity:.2;
transform:scale(.8);
}

to{
opacity:1;
transform:scale(1.2);
}

}

</style>
</head>

<body>

<div class="cloud">☁️</div>
<div class="cloud">☁️</div>
<div class="cloud">☁️</div>

<div class="sparkle" style="top:10%;left:15%;">✨</div>
<div class="sparkle" style="top:18%;right:18%;">✨</div>
<div class="sparkle" style="bottom:15%;left:10%;">✨</div>
<div class="sparkle" style="bottom:20%;right:12%;">✨</div>

<div class="card">

<h1>☁️ Cloudberry Study 🍓</h1>

<p class="subtitle">
Your cozy place to focus 🌸
</p>

<div class="timer-settings">

Study

<input
type="number"
id="minutes"
value="25"
min="1"
max="180">

mins

</div>

<div id="timer">
25:00
</div>

<button onclick="startTimer()">
▶ Start
</button>

<button onclick="pauseTimer()">
⏸ Pause
</button>

<button onclick="resetTimer()">
🔄 Reset
</button>

<p class="quote" id="quote">
"Every page gets you closer to your dreams."
</p>

</div>

<script>

// 🌸 Part 1 JavaScript starts here...

const quotes = [
  "🌸 Every page gets you closer to your dreams.",
  "🍓 One step at a time!",
  "☁️ Stay focused—you've got this!",
  "✨ Little progress is still progress.",
  "💖 Future you will thank you!"
];

let time = 25 * 60;
let timer = null;
let running = false;

const timerDisplay = document.getElementById("timer");
const minuteInput = document.getElementById("minutes");
const quote = document.getElementById("quote");

function updateDisplay() {
  const mins = Math.floor(time / 60);
  const secs = time % 60;
  timerDisplay.textContent =
    `${String(mins).padStart(2,"0")}:${String(secs).padStart(2,"0")}`;
}

function startTimer() {
  if (running) return;

  if (time === 25 * 60 || time === 0) {
    time = parseInt(minuteInput.value, 10) * 60;
    updateDisplay();
  }

  running = true;

  timer = setInterval(() => {
    if (time > 0) {
      time--;
      updateDisplay();
      } else {

      clearInterval(timer);
      running = false;

      quote.textContent =
        quotes[Math.floor(Math.random() * quotes.length)];

      alert("🎉 Great job! Time for a break! ☕");
    }

  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  running = false;
}

function resetTimer() {
  clearInterval(timer);
  running = false;

  time = parseInt(minuteInput.value, 10) * 60;
  updateDisplay();
}

minuteInput.addEventListener("change", () => {
  if (!running) {
    time = parseInt(minuteInput.value, 10) * 60;
    updateDisplay();
  }
});

// 🌸 Create falling sakura petals
function createPetal() {
  const petal = document.createElement("div");
  petal.className = "petal";
  petal.textContent = "🌸";

  petal.style.left = Math.random() * window.innerWidth + "px";
  petal.style.animationDuration = (5 + Math.random() * 6) + "s";
  petal.style.fontSize = (16 + Math.random() * 12) + "px";

  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 11000);
}

setInterval(createPetal, 500);

// Show the timer immediately
updateDisplay();

</script>

</body>
</html>

