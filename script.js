let studyMinutes = 25;
let breakMinutes = 5;
let timeLeft = studyMinutes * 60;
let timer = null;
let running = false;
let sessions = 0;

const timeDisplay = document.getElementById("time");
const studyInput = document.getElementById("studyMinutes");
const breakInput = document.getElementById("breakMinutes");
const sessionsDisplay = document.getElementById("sessions");
const quoteDisplay = document.getElementById("quote");

const quotes = [
    "🌸 Every page gets you closer to your dreams.",
    "🍓 One step at a time!",
    "☁️ Stay focused—you've got this!",
    "✨ Little progress is still progress.",
    "💖 Future you will thank you!",
    "🎀 You can do hard things!",
    "📚 Keep going, you're doing amazing!"
];

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timeDisplay.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function startTimer() {

    if (running) return;

    running = true;

    timer = setInterval(() => {

        if (timeLeft > 0) {

            timeLeft--;
            updateDisplay();

        } else {

            clearInterval(timer);
            running = false;

            sessions++;
            sessionsDisplay.textContent = sessions;

            quoteDisplay.textContent =
                quotes[Math.floor(Math.random() * quotes.length)];

            alert("🎉 Great job! Time for a break!");

            studyMinutes = Number(studyInput.value);
            breakMinutes = Number(breakInput.value);

            timeLeft = breakMinutes * 60;

            updateDisplay();
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

    studyMinutes = Number(studyInput.value);

    timeLeft = studyMinutes * 60;

    updateDisplay();

}

studyInput.addEventListener("change", () => {

    if (!running) {

        studyMinutes = Number(studyInput.value);
        timeLeft = studyMinutes * 60;
        updateDisplay();

    }

});

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("pauseBtn").addEventListener("click", pauseTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);

updateDisplay();
