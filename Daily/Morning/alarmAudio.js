var alarmAudio = new Audio('./Audio/alarm.mp3');
var timesIgnored = 0;

function playAlarmAudio() {

    if (JSON.parse(sessionStorage.getItem("alarm-check-active")) == false) return;

    alarmAudio.addEventListener('ended', function() {

        timesIgnored += 1;
        if (timesIgnored > 500) { 
            timesIgnored = 0; 
            pauseAlarmAudio(); 
        }

        this.currentTime = 0;
        this.play();

    }, false);
    alarmAudio.play();
}

function pauseAlarmAudio() {
    sessionStorage.setItem("alarm-check-active", false);
    out ( "" );
    alarmAudio.pause();
}