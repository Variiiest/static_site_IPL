const tap_audio = document.getElementById("tap-audio");

document.body.click = ()=>{
    tap_audio.currentTime = 0;
    tap_audio.play();
};

document.addEventListener('mousedown',()=>{
    if (!tap_audio.playing){
        tap_audio.currentTime = 0;
        tap_audio.play();
    }
})

document.addEventListener('touchstart',()=>{
    if (!tap_audio.playing){
        tap_audio.currentTime = 0;
        tap_audio.play();
    }
})