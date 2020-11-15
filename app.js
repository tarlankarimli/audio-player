let audioList = [
    { artist: "Pixies", audio: "Where is my mind", path: "./assets/audio/Pixies-Where_is_my_mind.mp3", img: "./assets/images/pixies.jpg" },
    { artist: "Frank Sinatra", audio: "That's life", path: "./assets/audio/Frank_Sinatra-That's_life.mp3", img: "./assets/images/frank-life.jpeg" },
    { artist: "Hans Zimmer", audio: "Interstellar", path: "./assets/audio/Hans_Zimmer-Interstellar.mp3", img: "./assets/images/interstellar.jpg" },
    { artist: "Edith Piaf", audio: "Sous le ciel de Paris", path: "./assets/audio/Edith_Piaf_Sous_le_ciel_de_Paris.mp3", img: "./assets/images/edith-paris.jpg" }
]

let audio = new Audio();
let currentAudio = 0;
let shuffle = false;
let volume = true;
let currentTime = document.querySelector(".currentTime");
let totalTime = document.querySelector(".totalTime");
let timeLine = document.querySelector(".duration-left");
let menu = false;

window.onload = getSource;
// Getting audio source for onload window and changing audio
function getSource() {
    audio.src = audioList[currentAudio].path;
    changeAudioData();
}
// Get and show audio data
function changeAudioData() {
    let audioTitle = document.querySelector(".audio-title").innerHTML = `<h1>${audioList[currentAudio].audio}<h1/>`;
    let artist = document.querySelector(".audio-artist").innerHTML = `<h4>${audioList[currentAudio].artist}<h4/>`;
    let audioImg = document.querySelector(".audio-img").src = audioList[currentAudio].img
}
// Play and pause audio
function playAudio() {
    if (audio.paused) {
        audio.play()
        document.querySelector(".play_audio").innerHTML = `<i class="fas fa-pause"></i>`;
    }
    else {
        audio.pause();
        document.querySelector(".play_audio").innerHTML = `<i class="fas fa-play"></i>`
    }
}
function playProcess() {
    getSource();
    changeAudioData()
    playAudio();
}
// Next audio
function nextAudio() {
    if (shuffle) {
        currentAudio = Math.floor(Math.random() * 4);
        playProcess()
    } else {
        if (currentAudio < 3) {
            currentAudio++;
            playProcess()
        } else {
            currentAudio = 0;
            playProcess()
        }
    }
}
// Previous Audio
function prevAudio() {
    if (currentAudio > 0) {
        currentAudio--;
        playProcess()
    } else {
        currentAudio = 0;
        playProcess()
    }
}
// Shuffle audio
function shuffleAudio() {
    shuffle = !shuffle;
    if (shuffle) {
        document.querySelector(".fa-random").style.color = "rgba(0, 0, 0, 0.658)";
    } else document.querySelector(".fa-random").style.color = "#fff";
}
// Replay audio
function replay() {
    audio.src = audioList[currentAudio].path;
    playAudio();
}
// Stop audio
function stop() {
    audio.src = audioList[currentAudio].path;
    document.querySelector(".play_audio").innerHTML = `<i class="fas fa-play"></i>`;
}
// Mute and unmute
function mute() {
    volume = !volume;
    if(!volume) {        
        document.querySelector(".volume").innerHTML=`<i class="fas fa-volume-mute"></i>`
    } else {document.querySelector(".volume").innerHTML=`<i class="fa fa-volume-up"></i>`}
    audio.volume = volume;
}
// Played time
audio.addEventListener("timeupdate", function(){
    let line = audio.currentTime/audio.duration;
    timeLine.style.width = line*100+"%";

    let time = Math.round(audio.currentTime);
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    if(minutes < 10) {
        minutes = "0"+minutes
    } else minutes
    if (seconds < 10) {
        seconds = "0"+seconds
    } else seconds
    currentTime.innerHTML = minutes + ":" + seconds;

    total(Math.round(audio.duration));
})

// Total time
function total(duration){
    let seconds = duration % 60;
    let minutes = Math.floor(duration / 60);
    if(minutes < 10) {
        minutes = "0"+minutes
    } else minutes
    if (seconds < 10) {
        seconds = "0"+seconds
    } else seconds
    totalTime.innerHTML = minutes + ":" + seconds;
}

// Click menu button and show playlist
function playlist() {
    menu = !menu;
    if(menu) {
    document.querySelector(".playlist").style.height = "70%";
    document.querySelector(".audios").style.display = "block";
    document.querySelector(".menu-icon").innerHTML=`<i class="fas fa-chevron-circle-up">`
    }
   else {
    document.querySelector(".playlist").style.height = "0";
    document.querySelector(".audios").style.display = "none";
    document.querySelector(".menu-icon").innerHTML=`<i class="fas fa-chevron-circle-down">`;

   }
}


