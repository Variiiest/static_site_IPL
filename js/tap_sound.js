const tap_audio = document.getElementById("tap-audio");

document.body.onclick = ()=>{
    tap_audio.currentTime = 0;
    tap_audio.play();
};