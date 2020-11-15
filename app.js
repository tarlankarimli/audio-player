let audioList = [
    {artist: "Pixies", audio: "Where is my mind", path: "./assets/audio/Pixies-Where_is_my_mind.mp3", img: "./assets/images/pixies.jpg"},
    {artist: "Frank Sinatra", audio: "That's life", path: "./assets/audio/Frank_Sinatra-That's_life.mp3", img: "./assets/images/frank-life.jpeg"},
    {artist: "Hans Zimmer", audio: "Interstellar", path: "./assets/audio/Hans_Zimmer-Interstellar.mp3", img: "./assets/images/interstellar.jpg"},
    {artist: "Edith Piaf", audio: "Sous le ciel de Paris", path: "./assets/audio/Edith_Piaf_Sous_le_ciel_de_Paris.mp3", img: "./assets/images/edith-paris.jpg"}
]

let audio = new Audio();
let currentAudio = 3;

function changeAudioData() {
    let audioTitle = document.querySelector(".audio-title").innerHTML=`<h1>${audioList[currentAudio].audio}<h1/>`;
    let artist = document.querySelector(".audio-artist").innerHTML = `<h4>${audioList[currentAudio].artist}<h4/>`;
    let audioImg = document.querySelector(".audio-img").src = audioList[currentAudio].img
}

window.onload = getSource;
// Getting audio source for onload window and changing audio
function getSource() {
    audio.src = audioList[currentAudio].path;
}
// Play and pause audio
function playAudio() {
    if(audio.paused) {
        audio.play()
        document.querySelector(".play_audio").innerHTML=`<i class="fas fa-pause"></i>`
    }
    else {
    audio.pause();
    document.querySelector(".play_audio").innerHTML=`<i class="fas fa-play"></i>`
    }
}

// Next audio
function nextAudio() {
    if(currentAudio < 3) {
        currentAudio++;
        getSource();
        changeAudioData()
        playAudio();
    } else {
        currentAudio = 0;
        getSource();
        changeAudioData()
        playAudio();        
    }
}
// Previous Audio
function prevAudio() {
    if(currentAudio > 0) {
        currentAudio--;
        getSource();
        changeAudioData()
        playAudio();
    } else {
        currentAudio = 0;
        getSource();
        changeAudioData()
        playAudio();        
    }
}
