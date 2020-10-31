/*****Video-Player*****/
var video = document.getElementById("myVideo");
var fillBar = document.getElementById("fill");
var currentTime = document.getElementById("currentTime");
var volumeSlider = document.getElementById("volume");

function playOrPause(){
    if(video.paused){
        video.play();
        $("#playBtn").attr("src","Pause.png");
    }
    else{
        video.pause();
        $("#playBtn").attr("src","Play.png");
    }
}

video.addEventListener('timeupdate',function(){
    var position = video.currentTime / video.duration;
    fillBar.style.width = position * 100 +'%';
    convertTime(Math.round(video.currentTime));
    if(video.ended){
        $("#playBtn").attr("src","Play.png");
    }
});

function convertTime(seconds){
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;
    
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime.textContent = min + ":" + sec;
    
    totalTime(Math.round(video.duration));
}

function totalTime(seconds){
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;
    
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime.textContent += " / " + min + ":" + sec;
}

function changeVolume(){
    video.volume = volumeSlider.value;
    if(volumeSlider.value == 0){
        $("#speaker").attr("src","Mute.png");
    }
    else{
        $("#speaker").attr("src","Speaker.png");
    }
} 
