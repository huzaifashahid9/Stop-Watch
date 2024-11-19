
// var milisechead = document.getElementById("milisec");
// var sechead = document.getElementById("seconds");
// var minhead = document.getElementById("minutes");

// var sec = 0;
// var min = 0;
// var milsec = 0;
// var interval;

// function starttimer() {
//     interval = setInterval(timer, 10);
// }

// function timer() {
//     milsec++;
//     milisechead.innerHTML = milsec.toString().padStart(2, '0');
    
//     if (milsec === 100) {
//         sec++;
//         milsec = 0;
//         sechead.innerHTML = sec.toString().padStart(2, '0');

//         if (sec === 60) {
//             sec = 0;
//             min++;
//             minhead.innerHTML = min.toString().padStart(2, '0');
//         }
//     }
// }

// function stopTimer() {
//     clearInterval(interval);
// }

// function resetTimer() {
//     stopTimer();
//     sec = 0;
//     min = 0;
//     milsec = 0;

//     milisechead.innerHTML = "00";
//     sechead.innerHTML = "00";
//     minhead.innerHTML = "00";
// }






var milisechead = document.getElementById("milisec");
var sechead = document.getElementById("seconds");
var minhead = document.getElementById("minutes");

var sec = 0;
var min = 0;
var milsec = 0;
var interval;
var isRunning = false; 

function starttimer() {
    if (!isRunning) { 
        isRunning = true;
        var startButton = document.getElementById("start");
        startButton.disabled = true; 

        interval = setInterval(timer, 10);  
    }
}

function timer() {
    milsec++;
    milisechead.innerHTML = milsec.toString().padStart(2, '0');
    
    if (milsec === 100) {
        sec++;
        milsec = 0;
        sechead.innerHTML = sec.toString().padStart(2, '0');
        
        if (sec === 60) {
            sec = 0;
            min++;
            minhead.innerHTML = min.toString().padStart(2, '0');
        }
    }
}

function stopTimer() {
    clearInterval(interval);
    isRunning = false; 
    document.getElementById("start").disabled = false; 
}

function resetTimer() {
    stopTimer();
    sec = 0;
    min = 0;
    milsec = 0;

    milisechead.innerHTML = "00";
    sechead.innerHTML = "00";
    minhead.innerHTML = "00";
}

