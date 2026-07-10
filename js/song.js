const audio = document.getElementById("audio");

const play = document.getElementById("play");

const pause = document.getElementById("pause");

const seek = document.getElementById("seek");

const current = document.getElementById("current");

const duration = document.getElementById("duration");

play.onclick = () => {

audio.play();

};

pause.onclick = () => {

audio.pause();

};

audio.addEventListener("loadedmetadata",()=>{

duration.innerHTML=format(audio.duration);

});

audio.addEventListener("timeupdate",()=>{

seek.value=(audio.currentTime/audio.duration)*100;

current.innerHTML=format(audio.currentTime);

});

seek.oninput=()=>{

audio.currentTime=(seek.value/100)*audio.duration;

};

function format(time){

let min=Math.floor(time/60);

let sec=Math.floor(time%60);

if(sec<10){

sec="0"+sec;

}

return min+":"+sec;

}