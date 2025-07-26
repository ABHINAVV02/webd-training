
const inputWorkTime = document.getElementById('worktime');
const inputShortBreak = document.getElementById('shortbreak');
const inputLongBreak = document.getElementById('longbreak');
const inputPomodoroCounts = document.getElementById('pomodorocounts');

const setTimeButton = document.getElementById('settime');
const displayTime = document.getElementById('downtime');
const workSessionButton = document.getElementById('worksession');
const shortBreakButton = document.getElementById('sbreaksession');
const longBreakButton = document.getElementById('lbreaksession');
const completedCyclesDiv = document.getElementById('completedcycles');

const startButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('pause-btn');
const resetButton = document.getElementById('reset-btn');


let currentIntervalId;
let totalSecondsLeft;
let timerIsRunning = false;
let currentSessionType = 'work';
let completedPomodoros = 0;
let totalPomodorosNeeded;

function initializeTimer() {
    totalPomodorosNeeded = parseInt(inputPomodoroCounts.value);
    completedPomodoros = 0;
    updateCycleIndicators();
    resetDisplayTime();
    updateSessionActiveStyles(workSessionButton);
    setTimeButton.textContent = 'Start Pomodoro';
    startButton.textContent = 'Start';
}

function showTime() {
    const minutes = parseInt(totalSecondsLeft / 60);
    const seconds = totalSecondsLeft % 60;
    displayTime.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function resetDisplayTime() {
    let minutesToSet;
    if (currentSessionType === 'work') {
        minutesToSet = parseInt(inputWorkTime.value);
    } else if (currentSessionType === 'shortBreak') {
        minutesToSet = parseInt(inputShortBreak.value);
    } else {
        minutesToSet = parseInt(inputLongBreak.value);
    }
    totalSecondsLeft = minutesToSet * 60;
    showTime();
}

function startCountdown() {
    if (timerIsRunning) return;

    timerIsRunning = true;

    currentIntervalId = setInterval(() => {
        totalSecondsLeft--;
        showTime();

        if (totalSecondsLeft <= 0) {
            clearInterval(currentIntervalId);
            timerIsRunning = false;
            handleSessionEnd();
        }
    }, 1000);
}

function pauseCountdown() {
    clearInterval(currentIntervalId);
    timerIsRunning = false;
    startButton.textContent = 'Resume';
}

function resetTimer() {
    clearInterval(currentIntervalId);
    timerIsRunning = false;
    currentSessionType = 'work';
    initializeTimer();
}

function handleSessionEnd() {
    if (currentSessionType == 'work') {
        completedPomodoros++;
        updateCycleIndicators();

        if (completedPomodoros % totalPomodorosNeeded == 0) {
            currentSessionType = 'longBreak';
            updateSessionActiveStyles(longBreakButton);
        } else {
            currentSessionType = 'shortBreak';
            updateSessionActiveStyles(shortBreakButton);
        }
        resetDisplayTime();
        startCountdown();
    } else if (currentSessionType == 'shortBreak' || currentSessionType == 'longBreak') {
        currentSessionType = 'work';
        updateSessionActiveStyles(workSessionButton);
        resetDisplayTime();
        startCountdown();
    }
}

function updateSessionActiveStyles(activeButton) {
    workSessionButton.classList.remove('active');
    shortBreakButton.classList.remove('active');
    longBreakButton.classList.remove('active');
    activeButton.classList.add('active');
}

function updateCycleIndicators() {
    completedCyclesDiv.innerHTML = '';
    for (let i = 0; i < totalPomodorosNeeded; i++) {
        const dot = document.createElement('div');
        dot.classList.add('pomodoro-cycle-dot');
        if (i < completedPomodoros) {
            dot.classList.add('completed');
        }
        completedCyclesDiv.appendChild(dot);
    }
}

setTimeButton.addEventListener('click', () => {
    clearInterval(currentIntervalId);
    timerIsRunning = false;
    totalPomodorosNeeded = parseInt(inputPomodoroCounts.value);
    completedPomodoros = 0;
    updateCycleIndicators();
    currentSessionType = 'work';
    resetDisplayTime();
    updateSessionActiveStyles(workSessionButton);
    startButton.textContent = 'Start';
    startCountdown();
});

startButton.addEventListener('click', startCountdown);
pauseButton.addEventListener('click', pauseCountdown);
resetButton.addEventListener('click', resetTimer);

workSessionButton.addEventListener('click', () => {
    if (!timerIsRunning) {
        currentSessionType = 'work';
        resetDisplayTime();
        updateSessionActiveStyles(workSessionButton);
    }
});

shortBreakButton.addEventListener('click', () => {
    if (!timerIsRunning) {
        currentSessionType = 'shortBreak';
        resetDisplayTime();
        updateSessionActiveStyles(shortBreakButton);
    }
});

longBreakButton.addEventListener('click', () => {
    if (!timerIsRunning) {
        currentSessionType = 'longBreak';
        resetDisplayTime();
        updateSessionActiveStyles(longBreakButton);
    }
});

initializeTimer();
