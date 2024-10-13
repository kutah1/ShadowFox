let progressElement = document.querySelector('.progress-percentage');
let currentProgress = 0;
let targetProgress = 80;
let updateSpeed = 100; // Speed in milliseconds
let lastUpdateTime = 0;

function updateProgress(timestamp) {
    if (!lastUpdateTime) lastUpdateTime = timestamp;
    const progressIncrement = (timestamp - lastUpdateTime) / updateSpeed;

    if (progressIncrement >= 1) {
        currentProgress++;
        progressElement.textContent = `${currentProgress}%`;

        let color;
        if (currentProgress <= 30) {
            color = 'red';
        } else if (currentProgress <= 60) {
            color = 'yellow';
        } else {
            color = 'green';
        }

        document.querySelector('.circular-progress-bar').style.background = `conic-gradient(${color} ${currentProgress * 3.6}deg, #ededed 0deg)`;

        lastUpdateTime = timestamp;
    }

    if (currentProgress < targetProgress) {
        requestAnimationFrame(updateProgress);
    }
}

requestAnimationFrame(updateProgress); // Initial call to start the progress
