//"use strict";

var count = 0;
var duration = 25; //max duration 60 min
var rest = 5;      //max break 20 min
var timer;

function counter(d) {
    count += 1;
    if(count >= duration) {
        // Stop timer
        clearInterval(timer);
    }    
    document.getElementById('clock').innerHTML = '<p>' + displayTime(count) + '</p>';
}

function displayTime(time) {
    var minutes = "0" + Math.floor(time / 60);
    var seconds = "0" + (time - minutes * 60);
    return minutes.substr(-2) + ":" + seconds.substr(-2);
}

// Start timer
function startPomodoro(d) {
    document.getElementById('start').onclick = 'stopPomodoro()';
    rest = document.getElementById('session-duration').value;
    duration = document.getElementById('break-duration').value;
    console.log('rest ', rest, ' sess ', duration);
    duration = d;
    timer = setInterval(counter, 1000);
}
