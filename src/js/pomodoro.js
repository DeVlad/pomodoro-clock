//"use strict";

function clock() {
    var time = (new Date).toTimeString().slice(0, 8);
    document.getElementById('clock').innerHTML = '<p>' + time + '</p>';
    //console.log(time)
}

//var timer = setInterval(clock, 1000);
var count = 0;
function counter() {
    count += 1;
    document.getElementById('clock').innerHTML = '<p>' + displayTime(count) + '</p>';
}

var timer = setInterval(counter, 1000);
function displayTime(time) {
    //ar minutes = Math.floor(time / 60);
    //var seconds = time - minutes * 60;
    //return minutes + ':' + seconds;
    var minutes = "0" + Math.floor(time / 60);
    var seconds = "0" + (time - minutes * 60);
    return minutes.substr(-2) + ":" + seconds.substr(-2);
}



