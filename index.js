let cProgress = document.querySelector('.span-progress-value');
let progress_starter = 0;
let progress_lastnum = 90;
let speed = 100;

function startProgress() {
    let progress = setInterval(() => {
        progress_starter++;
        cProgress.textContent = `${progress_starter}%`;

        let color;
        if (progress_starter <= 30) {
            color = 'red';
        } else if (progress_starter <= 60) {
            color = 'yellow';
        } else {
            color = 'green';
        }

        document.querySelector('.circular-progress').style.background = `conic-gradient(${color} ${progress_starter * 3.6}deg, #ededed 0deg)`;

        if (progress_starter >= progress_lastnum) {
            clearInterval(progress); // Stop the progress
        }
    }, speed);
}

startProgress(); // Initial call to start the progress


$(document).ready(function(){
    $("#menu").click(function(){

        $(".nav").toggle();
    })
})