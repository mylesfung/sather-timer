let startingSecs = 0;

function setEasy() {
    document.getElementById('timer').innerHTML = '10:00';
    startingSecs = 10 * 60;
    startTimer();
}

function setMedium() {
    document.getElementById('timer').innerHTML = '20:00';
    startingSecs = 20 * 60;
    startTimer();
}
function setHard() {
    document.getElementById('timer').innerHTML = '30:00';
    startingSecs = 30 * 60;
    startTimer();
}

function startTimer() {
    begin = setInterval(countDown, 1000);
}

function countDown() {
    if (startingSecs >= 0) {
        let mins = Math.floor(startingSecs/60);
        let secs = startingSecs % 60;

        mins = mins < 10 ? '0' + mins : mins;
        secs = secs < 10 ? '0' + secs : secs;
        
        //console.log(`${mins}:${secs}`)
        //console.log(startingSecs)
        display = document.getElementById('timer')
        display.innerHTML = `${mins}:${secs}`;
        document.getElementById('title').innerHTML = display.innerHTML

        startingSecs--;
    }
    else {
        let satherSounds = new Audio('static/sounds/campanile sounds.mp3');
        satherSounds.play();

        clearInterval(begin);
    }

}

function resetTimer() {
    document.getElementById('timer').innerHTML = '00:00'
    startingSecs = 0;
    clearInterval(begin);
    //satherSounds.pause();
}

//setEasy()
//startTimer()