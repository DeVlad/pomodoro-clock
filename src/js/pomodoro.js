//"use strict";

var count = 0;
var duration = 25; //max duration 60 min
var rest = 5; //max break 20 min
var timer;
var restStarted = false;

// TODO: Progress bar
document.getElementById('progress-bar').style.width = '33%';

// Start timer
function startPomodoro(d) {
    document.getElementById('start').onclick = 'stopPomodoro()';
    
    rest = document.getElementById('session-duration').value;
    duration = document.getElementById('break-duration').value;
    //console.log('rest ', rest, ' sess ', duration);
    duration = d;
    timer = setInterval(counter, 1000);

    document.getElementById('status').innerHTML = '<h2>Lets Work !<h2>';
    document.getElementById('status').style.display = 'block';    
}

function displayTime(time) {
    var minutes = "0" + Math.floor(time / 60);
    var seconds = "0" + (time - minutes * 60);
    return minutes.substr(-2) + ":" + seconds.substr(-2);
}

function counter(d) {
    count += 1;
    if(count > duration && restStarted === false) {
        // Stop
        document.getElementById('status').innerHTML = '<h2>Break !<h2>';
        
        // Reset display
         count = 0;        
        
        //playAudio();
        duration = 5;
        restStarted = true;      

        // Stop timer
        //clearInterval(timer);
    }
    if(count >= duration && restStarted === true) {
        // Stop
        document.getElementById('status').innerHTML = '<h2>Break !<h2>';
                
        // Reset display               
        //count = 0;
        
        // Stop timer
        clearInterval(timer);       
    }  
    
    document.getElementById('clock').innerHTML = '<p>' + displayTime(count) + '</p>';
}

// TODO: break session progress bar
/*function breakProgressBar {
    
}*/

// Audio alarm 
var beep = document.getElementById("alarm-beep");

function playAudio() {
    beep.play();
}
