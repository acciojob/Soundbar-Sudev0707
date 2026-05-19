const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttonsContainer = document.getElementById('buttons');

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.textContent = sound;
    
    btn.addEventListener('click', () => {
        stopSongs();
        const audio = new Audio(`sounds/${sound}.mp3`);
        audio.play();
    });
    
    buttonsContainer.appendChild(btn);
});

function stopSongs() {
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}

const stopBtn = document.querySelector('.stop');
stopBtn.addEventListener('click', stopSongs);