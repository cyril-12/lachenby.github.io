var active = false;

function alarmClock() {

    var today = new Date();

    if (active === true) {
        if (today.getHours() == 0 && today.getMinutes() == 0) {
            active = false;
        }
        return;
    }

    if (today.getHours() == 5 && today.getMinutes() == 30) {
        setAlarm()
        setTimeout(setAlarm, 160 * 1000)
        setTimeout(setAlarm, 320 * 1000)
        setTimeout(setAlarm, 640 * 1000)
        active = true;
    }

    setTimeout(alarmClock, 1000);
}

alarmClock()