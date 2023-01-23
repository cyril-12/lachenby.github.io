var doc = document.documentElement;
function anywhereClick() {
    
    if (JSON.parse(sessionStorage.getItem("alarm-check-active")) == true) { pauseAlarmAudio(); return; }

    if (sessionStorage.getItem("fullscreen") != 1) {
        doc.requestFullscreen()
        sessionStorage.setItem("fullscreen", 1);
    } else {
        document.exitFullscreen();
        sessionStorage.setItem("fullscreen", 0);
    }
}