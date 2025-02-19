let progress = document.querySelector('input');
let song  = document.querySelector('audio');
let ctrlIcon = document.querySelector('.ctrlIcon');

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (ctrlIcon.classList.contains('bx-pause')) {
        song.pause();
        ctrlIcon.classList.remove('bx-pause');
        ctrlIcon.classList.add('bx-play');
    } else {
        song.play();
        ctrlIcon.classList.add('bx-pause');
        ctrlIcon.classList.remove('bx-play');
    }
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function() {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add('bx-pause');
    ctrlIcon.classList.remove('bx-play');
}