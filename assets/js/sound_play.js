var audio_info_landmark = new Audio("https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3");
var audio_info_direction = new Audio("https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3");

function playAudio(ex) {
    if(ex == 'landmark'){
        alert('landmark')
        audio_info_landmark.play();
    }else if(ex == 'direction'){
        alert('direction')
        audio_info_direction.play();
    }
}
