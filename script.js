let isRunning = false;
let startTime = 0;
let interval;

function startStop() {
    if (isRunning) {
        clearInterval(interval);
        document.getElementById('startStop').textContent = 'Start';
    } else {
        startTime = Date.now() - (startTime || 0);
        interval = setInterval(updateTime, 10);
        document.getElementById('startStop').textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(interval);
    document.getElementById('startStop').textContent = 'Start';
    startTime = 0;
    isRunning = false;
    document.getElementById('display').textContent = '00:00:00';
}

function updateTime() {
    const currentTime = Date.now() - startTime;
    const hours = Math.floor(currentTime / 3600000);
    const minutes = Math.floor((currentTime % 3600000) / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    const milliseconds = Math.floor(currentTime % 1000);
    document.getElementById('display').textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad3(milliseconds)}`;
}

function pad(num) {
    return num.toString().padStart(2, '0');
}

function pad3(num) {
    return num.toString().padStart(3, '0');
}
