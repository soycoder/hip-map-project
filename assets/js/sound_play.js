var audio_info_landmark = new Audio("/assets/sound/info_voice_landmark.mp4");
var audio_info_direction = new Audio("/assets/sound/info_voice_directtion.mp4");

function playAudio(ex) {
    if(ex == 'landmark'){
        alert('landmark')
        audio_info_landmark.play();
    }else if(ex == 'direction'){
        alert('direction')
        audio_info_direction.play();
    }
}
