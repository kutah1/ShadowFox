let cp1 = document.querySelector('.spvalue1');
let st1 = 0;
let plnum1 = 95;
let sp1 = 100;

function movement() {
    let progress = setInterval(() => {
        st1++;
        cp1.textContent = `${st1}%`;

        let color;
        if (st1 <= 30) {
            color = 'red';
        } else if (st1 <= 60) {
            color = 'yellow';
        } else {
            color = 'green';
        }

        document.querySelector('.cprogress1').style.background = `conic-gradient(${color} ${st1 * 3.6}deg, #ededed 0deg)`;

        if (st1 >= plnum1) {
            clearInterval(progress);
        }
    }, sp1);
}

movement(); // Initial call to start the progress
