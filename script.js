var score = 0;
var hitrn = 0;
var events = document.querySelector("#pannel-bottom");

//  Function to start the game
function Start() {
score = 0;
document.querySelector("#scoreval").textContent = score;
hitval();
bubblemaker();
timer(); // Start the timer
document.querySelector("#Startbtn").style.display = "none";     // Hide Start button
document.querySelector("#pannel-bottom").style.display = "flex";    // Show game panel
}

function bubblemaker(){
    let ball = "";
    for(var i = 1; i < 172; i++){
        let rn = Math.floor(Math.random()*10);
        ball += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pannel-bottom").innerHTML = ball;
}

function hitval(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function IncreaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

events.addEventListener('click',function(val){
    var val = Number(val.target.textContent);
    if(val === hitrn){
        bubblemaker();
        IncreaseScore();
        hitval();
    }
})

function timer() {
    let timeLeft = 60;    // Set the timer for 60 seconds
    timerval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            document.querySelector("#timer").textContent = timeLeft;
        } else {
            clearInterval(timerval);
            document.querySelector("#pannel-bottom").style.display = "flex"; // Ensure it's visible
            document.querySelector("#pannel-bottom").innerHTML = `
                <div style="text-align: center; width: 100%;">
                    <h1 style="color: black;">Game Over</h1>
                    <h2 style="color: black;">Your Score: ${score}</h2>
                    <button onclick="Restart()" id="Restartbtn" style="margin-top: 20px;">Restart</button>
                </div>
            `;
        }
    }, 1000);
}


function Restart() {
    score = 0;
    document.querySelector("#scoreval").textContent = score;
    document.querySelector("#timer").textContent = 2;
    hitval();
    bubblemaker();
    timer();
}



hitval();
bubblemaker();

