const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
let currentAudio = null;

const buttonsContainer = document.getElementById('buttons');

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.textContent = sound;
    
    btn.addEventListener('click', () => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        
        const audio = document.createElement('audio');
        audio.src = `sounds/${sound}.mp3`;
        document.body.appendChild(audio);
        
        audio.play();
        currentAudio = audio;
        
        audio.addEventListener('ended', () => {
            if (audio.parentNode) {
                audio.parentNode.removeChild(audio);
            }
            if (currentAudio === audio) {
                currentAudio = null;
            }
        });
    });
    
    buttonsContainer.appendChild(btn);
});

const stopBtn = document.querySelector('.stop');
stopBtn.addEventListener('click', () => {
    const allAudio = document.querySelectorAll('audio');
    allAudio.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
        if (audio.parentNode) {
            audio.parentNode.removeChild(audio);
        }
    });
    currentAudio = null;
});