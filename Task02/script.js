// let timer; // To store the setInterval reference
// let isRunning = false;
// let seconds = 0;
// let minutes = 0;
// let hours = 0;

// const display = document.getElementById('display');
// const startBtn = document.getElementById('startBtn');
// const pauseBtn = document.getElementById('pauseBtn');
// const resetBtn = document.getElementById('resetBtn');
// const lapBtn = document.getElementById('lapBtn');
// const lapTimesList = document.getElementById('lapTimes');

// function startTimer() {
//   isRunning = true;
//   timer = setInterval(updateTime, 1000);
// }

// function pauseTimer() {
//   isRunning = false;
//   clearInterval(timer);
// }

// function resetTimer() {
//   isRunning = false;
//   clearInterval(timer);
//   seconds = 0;
//   minutes = 0;
//   hours = 0;
//   display.textContent = '00:00:00';
//   lapTimesList.innerHTML = '';
// }

// function updateTime() {
//   seconds++;
//   if (seconds === 60) {
//     seconds = 0;
//     minutes++;
//     if (minutes === 60) {
//       minutes = 0;
//       hours++;
//     }
//   }

//   const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//   display.textContent = formattedTime;
// }

// function lapTime() {
//   if (isRunning) {
//     const lapTimeItem = document.createElement('li');
//     lapTimeItem.textContent = display.textContent;
//     lapTimesList.appendChild(lapTimeItem);
//   }
// }

// startBtn.addEventListener('click', startTimer);
// pauseBtn.addEventListener('click', pauseTimer);
// resetBtn.addEventListener('click', resetTimer);



let [seconds, minutes, hours] = [0,0,0];
let lapTimesList = document.getElementById('lapTimes');
let timeDisplay = document.getElementById('timeDisplay');



let timer = null;

function stopWatch(){
    seconds++
    
    if(seconds == 60){
        seconds=0;
        minutes++;

        if (minutes == 60){
            minutes=0;
            hours++;
        }
    }
    let hou;
    if (hours < 10) {
        hou = "0" + hours;
    } else {
        hou = hours;
    }

    let min;
    if (minutes < 10) {
        min = "0" + minutes;
    } else {
         min = minutes;
    }

    let sec;
    if (seconds < 10) {
        sec = "0" + seconds;
    } else {
        sec = seconds;
    }


    timeDisplay.innerHTML = hou + ":" + min + ":" + sec;
}

function watchStart(){

    if (timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch,1000);
}

function watchStop(){
    clearInterval(timer);
}

function watchReset(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    timeDisplay.innerHTML = "00:00:00";

}

function Lapslist() {
    let lapTimeItem = document.createElement('li');
    lapTimeItem.textContent = timeDisplay.innerHTML;
    lapTimesList.appendChild(lapTimeItem);
}
