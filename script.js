let timer;
let elapsedTime = 0;
let isRunning = false;
let startTime;
let lapCounter = 1;

function start() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTime, 1000);
    }
}

function stop() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
}

function reset() {
    stop();
    elapsedTime = 0;
    lapCounter = 1;
    document.getElementById('display').textContent = '00:00:00';
    document.getElementById('laps').innerHTML = '';
}

function lap() {
    if (isRunning) {
        const lapTime = formatTime(elapsedTime);
        const lapElement = document.createElement('div');
        lapElement.textContent = `Lap ${lapCounter++}: ${lapTime}`;
        document.getElementById('laps').appendChild(lapElement);
    }
}

function updateTime() {
    elapsedTime = Date.now() - startTime;
    document.getElementById('display').textContent = formatTime(elapsedTime);
}

function formatTime(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}
