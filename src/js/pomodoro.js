"use strict";

function clock() {
    var time = (new Date).toTimeString().slice(0, 8);
    document.getElementById('clock').innerHTML = '<p>' + time + '</p>';
    //console.log(time)
}

var timer = setInterval(clock, 1000);