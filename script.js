let isPlaying = false;

function toggleAudio() {
  const audio = document.getElementById('bg-audio');
  const musicIcon = document.getElementById('music-icon');
  
  if (!isPlaying) {
    audio.play();
    // Cambia la flechita por las barras de pausa
    musicIcon.classList.remove("fa-play");
    musicIcon.classList.add("fa-pause");
    isPlaying = true;
  } else {
    audio.pause();
    // Vuelve a la flechita de play
    musicIcon.classList.remove("fa-pause");
    musicIcon.classList.add("fa-play");
    isPlaying = false;
  }
}