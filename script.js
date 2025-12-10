function makeBubble() {
    let clutter="";

    for(let i=0; i<=143; i++){
        let randomValue = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${randomValue}</div>`;
    }  
    document.querySelector("#pbtm").innerHTML = clutter;
}
makeBubble();


var timer = 60;
var internalId;
var hitRandomValue=0;
var scoreValue=0;

function runTimer(){
    internalId = setInterval(()=>{
        timer--;
        document.querySelector("#show-time").textContent = timer;
        
        if(timer==0){ // when timer value 0 then remove or stop setIntervel.
            stopInterval();
            console.log("Counter stopped.");
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
        }  
    },1000);
}
runTimer();

function stopInterval(){
    clearInterval(internalId);
}

function getNewHit(){
    for(let i=0; i<=70; i++){
        hitRandomValue = Math.floor(Math.random()*10);
        document.querySelector("#show-hit").textContent=hitRandomValue;
    }
}
getNewHit();

document.querySelector("#pbtm").addEventListener('click', (evt)=>{

    let eventTarget = evt.target;
    if(Number(eventTarget.textContent)===hitRandomValue){
        console.log("matched");
        scoreValue += 10;
        document.querySelector("#show-score").textContent= scoreValue;
        makeBubble();
        getNewHit();
    }
    else{
        console.log("not matched")
    }
});


