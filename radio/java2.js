document.addEventListener('DOMContentLoaded', function() {
    let currentMusicIndex = 0;
    const images = ["musicas2/IGOR'S THEME.mp3", 'musicas2/EARFQUAKE.mp3', 'musicas2/I THINK.mp3', 'musicas2/EXACTLY WHAT YOU RUN FROM YOU END UP CHASING.mp3',
                    'musicas2/RUNNING OUT OF TIME.mp3', "musicas2/NEW MAGIC WAND.mp3", 'musicas2/A BOY IS A GUN.mp3',
                    'musicas2/PUPPET.mp3', "musicas2/WHAT'S GOOD.mp3", 'musicas2/GONE, GONE THANK YOU.mp3', "musicas2/I DON'T LOVE YOU ANYMORE.mp3", 'musicas2/ARE WE STILL FRIENDS.mp3'];
  
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