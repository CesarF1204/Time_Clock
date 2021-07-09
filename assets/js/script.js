let redColor = document.getElementById('red');
let greenColor = document.getElementById('green');
let blueColor = document.getElementById('blue');
let timeDisplay = document.getElementById("clock");
let changeTimeFormat = document.getElementById("timeFormat");
let timeFrame = document.getElementById("timeframe")
let isMilitaryTime = false;

//get time
let updateTime = function() {
    let today = new Date();
    hours = today.getHours() > 10 ? "" + today.getHours() : today.getHours();
    minutes = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
    seconds = today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();
    time24 = hours + ":" + minutes + ":" + seconds;
    if(isMilitaryTime) {
        timeDisplay.innerHTML = time24;
        changeTimeFormat.innerHTML = 'Time Format: 24-hr'
    } else {
        let timeFormat = hours >= 12 ? "PM":"AM",
        hours12 = hours % 12;
        if(hours12 == 0) {
            hours12 = 12;
        }
        timeDisplay.innerHTML = hours12 + ":" + minutes + ":" + seconds + " " + timeFormat;
        changeTimeFormat.innerHTML = 'Time Format: 12-hr'
    }
    //background color based on timeframe(early morning is gray, morning is yellow, afternoon is orange, evening is black)
    if(hours >= 0 && hours <= 5 && minutes <= 59 && seconds && 59){
        document.body.style.backgroundColor = "gray";
        timeFrame.innerHTML = 'Early Morning!'
        document.body.style.transition = "2s ease";
    } else if(hours >= 6 && hours <= 11 && minutes <= 59 && seconds && 59){
        document.body.style.backgroundColor = "#FFB266";
        timeFrame.innerHTML = 'Good Morning!'
        document.body.style.transition = "2s ease";
    } else if(hours >= 12 && hours <= 17 && minutes <= 59 && seconds && 59){
        document.body.style.backgroundColor = "orange";
        timeFrame.innerHTML = 'Good Afternoon!'
        document.body.style.transition = "2s ease";
    } else {
        document.body.style.backgroundColor = "black";
        document.querySelector(".container").style.borderColor = "white";
        document.getElementById("clock").style.borderColor = "white";
        timeFrame.innerHTML = 'Good Evening!'
        document.body.style.transition = "2s ease";
    }
};

let changeFormat = function() {
    isMilitaryTime = !isMilitaryTime;
};
changeTimeFormat.addEventListener("click", changeFormat);
window.setInterval(updateTime, 100);

// change button color and time color on click
redColor.addEventListener("click", function() {
    document.getElementById("clock").style.color = "red";
    document.getElementById("red").style.backgroundColor = "red";
    document.getElementById("red").style.color = "white";
    document.getElementById("green").style.backgroundColor = "white";
    document.getElementById("green").style.color = "black";
    document.getElementById("blue").style.backgroundColor = "white";
    document.getElementById("blue").style.color = "black";
});
greenColor.addEventListener("click", function() {
    document.getElementById("clock").style.color = "green";
    document.getElementById("green").style.backgroundColor = "green";
    document.getElementById("green").style.color = "white";
    document.getElementById("red").style.backgroundColor = "white";
    document.getElementById("red").style.color = "black";
    document.getElementById("blue").style.backgroundColor = "white";
    document.getElementById("blue").style.color = "black";
});
blueColor.addEventListener("click", function() {
    document.getElementById("clock").style.color = "blue";
    document.getElementById("blue").style.backgroundColor = "blue";
    document.getElementById("blue").style.color = "white";
    document.getElementById("red").style.backgroundColor = "white";
    document.getElementById("red").style.color = "black";
    document.getElementById("green").style.backgroundColor = "white";
    document.getElementById("green").style.color = "black";
});

