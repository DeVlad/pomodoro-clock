//"use strict";

var count = 0;
var duration = 0; //max duration 60 min
var rest = 0; //max break 20 min
var timer;
var restStarted = false;

function displayTime(time) {
    var minutes = '0' + Math.floor(time / 60);
    var seconds = '0' + (time - minutes * 60);
    return minutes.substr(-2) + ':' + seconds.substr(-2);
}

function counter() {
    count += 1;
    if (count > duration && restStarted === false) {
        // Break session started
        document.getElementById('status').innerHTML = '<h2>Break !<h2>';
        // Reset display
        count = 0;
        //playAudio();
        duration = rest;
        restStarted = true;
    }
    if (count >= duration && restStarted === true) {
        // Stop
        document.getElementById('status').innerHTML = '<h2>Break !<h2>';

        // Reset display               
        //count = 0;

        // Stop timer
        clearInterval(timer);
    }
    // Percentage of completion
    var poc = Math.floor((count / duration) * 100);
    document.getElementById('clock').innerHTML = '<p>' + displayTime(count) + '</p>';
    document.getElementById('progress-bar').style.width = poc + '%';
}

// Start timer
function startPomodoro() {
    duration = document.getElementById('session-duration').value; // TODO: * 60 sec
    rest = document.getElementById('break-duration').value; // * 60 sec
    timer = setInterval(counter, 1000);
    document.getElementById('start').setAttribute('onClick', 'resetPomodoro()');
    document.getElementById('start').innerHTML = 'RESET';
    document.getElementById('status').innerHTML = '<h2>Lets Work !<h2>';
    document.getElementById('status').style.display = 'block';
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
        document.getElementById('status').innerHTML = '<h2>Break !<h2>';
        // Reset display
        count = 0;

        //playAudio();
        duration = rest;
        //console.log(rest)
        restStarted = true;

        // Stop timer
        //clearInterval(timer);
    }
    if (count >= duration && restStarted === true) {
        // Stop
        document.getElementById('status').innerHTML = '<h2>Break !<h2>';
        // Reset display
        //count = 0;

        // Stop timer
        clearInterval(timer);
    }
    // Percentage of completion
    var poc = Math.floor((count / duration) * 100);
    document.getElementById('clock').innerHTML = '<p>' + displayTime(count) + '</p>';
    document.getElementById('progress-bar').style.width = poc + '%';
}

function resetPomodoro() {
    clearInterval(timer);
    count = 0;
    restStarted = false;
    document.getElementById('clock').innerHTML = '<p>00:00</p>';
    document.getElementById('progress-bar').style.width = '0%';
    document.getElementById('start').setAttribute('onClick', 'startPomodoro()');
    document.getElementById('start').innerHTML = 'START';
    document.getElementById('status').innerHTML = '<h2>&nbsp;<h2>';
}

// Events
// TODO: mousedown
document.getElementById("session-plus").addEventListener("click", function () {
    var val = document.getElementById('session-duration').value;
    if (val < 60) {
        document.getElementById('session-duration').value ++;
    }
});

document.getElementById("session-minus").addEventListener("click", function () {
    var val = document.getElementById('session-duration').value;
    if (val < 60 && val > 1) {
        document.getElementById('session-duration').value --;
    }
});

document.getElementById("break-plus").addEventListener("click", function () {
    var val = document.getElementById('break-duration').value;
    if (val < 60) {
        document.getElementById('break-duration').value ++;
    }
});

document.getElementById("break-minus").addEventListener("click", function () {
    var val = document.getElementById('break-duration').value;
    if (val < 60 && val > 1) {
        document.getElementById('break-duration').value --;
    }
});
