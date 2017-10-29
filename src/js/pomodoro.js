var count = 0;
var duration = 0;
var rest = 0;
var timer;
var restStarted = false;

function displayTime(time) {
    var minutes = "0" + Math.floor(time / 60);
    var seconds = "0" + (time - minutes * 60);
    return minutes.substr(-2) + ":" + seconds.substr(-2);
}

// Audio alarm
var beep = document.getElementById("alarm-beep");
function playAudio() {
    beep.play();
}

function counter() {
    count += 1;
    if (count > duration && restStarted === false) {
        // Break session started
        document.getElementById("status").innerHTML = "<h2>Break !<h2>";
        count = 0; // Reset display
        playAudio();
        duration = rest;
        restStarted = true;
    }
    if (count >= duration && restStarted === true) {
        // Stop
        document.getElementById("status").innerHTML = "<h2>Done !<h2>";
        // Stop timer
        clearInterval(timer);
    }
    // Percentage of completion
    var poc = Math.floor((count / duration) * 100);
    document.getElementById("clock").innerHTML = "<p>" + displayTime(count) + "</p>";
    document.getElementById("progress-bar").style.width = poc + "%";
}

// Start timer
function startPomodoro() {
    duration = document.getElementById("sessionDuration").value * 60;
    rest = document.getElementById("breakDuration").value * 60;
    timer = setInterval(counter, 1000);
    document.getElementById("start").setAttribute("onClick", "resetPomodoro()");
    document.getElementById("start").innerHTML = "RESET";
    document.getElementById("status").innerHTML = "<h2>Lets Work !<h2>";
    document.getElementById("status").style.display = "block";
}

function resetPomodoro() {
    clearInterval(timer);
    count = 0;
    restStarted = false;
    document.getElementById("clock").innerHTML = "<p>00:00</p>";
    document.getElementById("progress-bar").style.width = "0%";
    document.getElementById("start").setAttribute("onClick", "startPomodoro()");
    document.getElementById("start").innerHTML = "START";
    document.getElementById("status").innerHTML = "<h2>&nbsp;<h2>";
}

// Events
document.getElementById("session-plus").addEventListener("click", function () {
    var val = document.getElementById("sessionDuration").value;
    if (val < 60) {
        document.getElementById("sessionDuration").value++;
    }
});

document.getElementById("session-minus").addEventListener("click", function () {
    var val = document.getElementById("sessionDuration").value;
    if (val <= 60 && val > 1) {
        document.getElementById("sessionDuration").value--;
    }
});

document.getElementById("break-plus").addEventListener("click", function () {
    var val = document.getElementById("breakDuration").value;
    if (val < 60) {
        document.getElementById("breakDuration").value++;
    }
});

document.getElementById("break-minus").addEventListener("click", function () {
    var val = document.getElementById("breakDuration").value;
    if (val <= 60 && val > 1) {
        document.getElementById("breakDuration").value--;
    }
});

// User input validation
sessionDuration.onchange = sessionDuration.onmouseout = validateInput;
breakDuration.onchange = breakDuration.onmouseout = validateInput;

function validateInput() {
    if (!/^([0-9]{1,2})$/.test(this.value) || this.value > 60) {
        this.value = 1;        
    }
}