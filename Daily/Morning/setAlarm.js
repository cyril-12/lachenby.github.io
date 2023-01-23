function setAlarm() {

    console.log("called set alarm")
    if (JSON.parse(sessionStorage.getItem("alarm-check-active")) == true) { return; }

    console.log("into set alarm")
    out ( "Click to verify your awake..." )
    sessionStorage.setItem("alarm-check-active", true);
    setTimeout(playAlarmAudio, 15 * 1000);
}