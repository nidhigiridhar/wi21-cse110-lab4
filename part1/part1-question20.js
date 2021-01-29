// set interval to 1s
var intervalID = setInterval(dateToTime, 1000);

function dateToTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

