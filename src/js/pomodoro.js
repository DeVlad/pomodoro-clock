//"use strict";

var count = 0;
var duration = 0; //max duration 60 min
var rest = 0; //max break 20 min
var timer;
var restStarted = false;

// Start timer
function startPomodoro() {    
    duration = document.getElementById('session-duration').value;
    rest = document.getElementById('break-duration').value;    
    timer = setInterval(counter, 1000);    
    document.getElementById('start').setAttribute('onClick', 'resetPomodoro()');
    document.getElementById('start').innerHTML = 'RESET';
    document.getElementById('status').innerHTML = '<h2>Lets Work !<h2>';
    document.getElementById('status').style.display = 'block';    
}

function displayTime(time) {
    var minutes = '0' + Math.floor(time / 60);
    var seconds = '0' + (time - minutes * 60);
    return minutes.substr(-2) + ':' + seconds.substr(-2);
}

function counter(d) {
    count += 1;
    if(count > duration && restStarted === false) {
        // Stop
        document.getElementById('status').innerHTML = '<h2>Break !<h2>';
        
        // Reset display
         count = 0;        
        
        playAudio();
        duration = rest;
        //console.log(rest)
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
    // Percentage of completion
    var poc = Math.floor((count / duration) * 100);    
    document.getElementById('clock').innerHTML = '<p>' + displayTime(count) + '</p>';
    document.getElementById('progress-bar').style.width = poc + '%';
}

// Audio alarm 
var beep = document.getElementById("alarm-beep");

function playAudio() {
    beep.play();
}

function resetPomodoro() {
    clearInterval(timer);
    count = 0;
    restStarted = false;
    document.getElementById('clock').innerHTML = '<p>00:00</p>';
    document.getElementById('progress-bar').style.width = '0%';
    document.getElementById('start').setAttribute( 'onClick', 'startPomodoro()' );
    document.getElementById('start').innerHTML = 'START';
    document.getElementById('status').innerHTML = '<h2>&nbsp;<h2>';    
}
