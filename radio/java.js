document.addEventListener('DOMContentLoaded', function() {
    let currentMusicIndex = 0;
    const images = ['musicas/On Sight.mp3', 'musicas/Black Skinhead.mp3', 'musicas/I Am A God.mp3', 'musicas/New Slaves.mp3',
                    'musicas/Hold My Liquor.mp3', "musicas/I'm In It.mp3", 'musicas/Blood On The Leaves.mp3',
                    'musicas/Guilt Trip.mp3', 'musicas/Send It Up.mp3', 'musicas/Bound 2.mp3'];
  
    const audio = document.querySelector('.tocador');
    const playButton = document.getElementById('playButton');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const progressBar = document.getElementById('progressBar');
    const controls = document.querySelector('.controls');
    const progressContainer = document.querySelector('.progressContainer');
  
    let isPlaying = false;
  
    function togglePlay() {
        if (isPlaying) {
            audio.pause();
            playButton.textContent = '▶';
        } else {
            audio.play();
            playButton.textContent = '||';
            controls.style.display = 'flex';
            progressContainer.style.display = 'block';
        }
        isPlaying = !isPlaying;
    }
  
    playButton.addEventListener('click', togglePlay);
  
    prevButton.addEventListener('click', function() {
        currentMusicIndex = (currentMusicIndex - 1 + images.length) % images.length;
        loadAndPlayMusic();
    });
  
    nextButton.addEventListener('click', function() {
        currentMusicIndex = (currentMusicIndex + 1) % images.length;
        loadAndPlayMusic();
    });
  
    function loadAndPlayMusic() {
      audio.src = images[currentMusicIndex];
      audio.load();
      audio.play();
      playButton.textContent = '||';
      isPlaying = true;
      document.querySelector('.nomeDaMusica').textContent = document.querySelector(`.musica${currentMusicIndex + 1}`).querySelector('.nomemu').textContent;
      document.querySelectorAll('.lista').forEach(musicItem => musicItem.classList.remove('playing'));
      document.querySelector(`.musica${currentMusicIndex + 1}`).classList.add('playing');
  }
  
    audio.addEventListener('ended', function() {
        currentMusicIndex = (currentMusicIndex + 1) % images.length;
        loadAndPlayMusic();
    });
  
    audio.addEventListener('timeupdate', function() {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;
    });
  
    progressBar.addEventListener('input', function() {
        const seekTime = (progressBar.value / 100) * audio.duration;
        audio.currentTime = seekTime;
    });
  
    const musicList = document.querySelectorAll('.lista');
  
    musicList.forEach(function(musicItem, index) {
        musicItem.addEventListener('click', function() {
            currentMusicIndex = index;
            loadAndPlayMusic();
        });
    });
  
  });
  document.addEventListener('DOMContentLoaded', function() {
    const volumeSlider = document.getElementById('volumeSlider');
    const audio = document.querySelector('.tocador');
  
    volumeSlider.addEventListener('input', function() {
        audio.volume = this.value / 100;
    });
  });