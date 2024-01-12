import '../scss/styles.scss'

const elemRoot = document.getElementById('root')
elemRoot.classList.add('container')

const video = document.querySelector('video')
const button = document.querySelector('button')

document.querySelector('#playButtonIcon').style.display = 'block'
document.querySelector('#pauseButtonIcon').style.display = 'none'

const play = (event) => {
    if (video.paused) {
        video.play()
        document.querySelector('#playButtonIcon').style.display = 'block'
        document.querySelector('#pauseButtonIcon').style.display = 'none'
    } else {
        video.pause()
        document.querySelector('#pauseButtonIcon').style.display = 'block'
        document.querySelector('#playButtonIcon').style.display = 'none'
    }
}

button.addEventListener('click', play)
video.addEventListener('click', play)

video.addEventListener('timeupdate', () => {
    let current = (video.currentTime / video.duration) * 100
    if (video.ended) {
        document.querySelector('#playButtonIcon').style.display = 'block'
        document.querySelector('#pauseButtonIcon').style.display = 'none'
    }
    document.querySelector('.inner').style.width = `${current}%`
})

const fullscreenButton = document.querySelector('.fullscreen-button')
const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
        video.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

fullscreenButton.addEventListener('click', toggleFullScreen);

const progressBar = document.querySelector('.bar');
const progressBarInner = document.querySelector('.inner');

progressBar.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const position = (e.clientX - rect.left) / rect.width;
    video.currentTime = position * video.duration;
});

video.addEventListener('timeupdate', () => {
    const current = (video.currentTime / video.duration) * 100;
    if (video.ended) {
        document.querySelector('#playButtonIcon').style.display = 'block';
        document.querySelector('#pauseButtonIcon').style.display = 'none';
    }
    progressBarInner.style.width = `${current}%`;
});