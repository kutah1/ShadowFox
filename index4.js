let aProgress = document.querySelector('.spvalue2');
let startnum = 0;
let finisher_num = 90;
let increaser = 100;

function beginMovement() {
    let progress = setInterval(() => {
        startnum++;
        aProgress.textContent = `${startnum}%`;

        let color;
        if (startnum <= 30) {
            color = 'red';
        } else if (startnum <= 60) {
            color = 'yellow';
        } else {
            color = 'green';
        }

        document.querySelector('.cprogress2').style.background = `conic-gradient(${color} ${startnum * 3.6}deg, #ededed 0deg)`;

        if (startnum >= finisher_num) {
            clearInterval(progress); // Stop the progress
        }
    }, increaser);
}

beginMovement(); // Initial call to start the progress
