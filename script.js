 <script>
   
window.addEventListener('scroll', reveal);

function reveal(){

  let reveals = document.querySelectorAll('.reveal');

  for(let i = 0; i < reveals.length; i++){

    let windowHeight = window.innerHeight;

    let revealTop = reveals[i].getBoundingClientRect().top;

    let revealPoint = 100;

    if(revealTop < windowHeight - revealPoint){

      reveals[i].classList.add('active');

    }

  }

}

</script>
<script>

/* Music Toggle */

const music = document.getElementById('bg-music');

const musicBtn = document.getElementById('music-btn');

let isPlaying = false;

musicBtn.addEventListener('click', () => {

  if(isPlaying){

    music.pause();

    musicBtn.innerHTML = '🎵Play Music';

  } else {

    music.play();

    musicBtn.innerHTML = '⏸Pause Music';

  }

  isPlaying = !isPlaying;

});

</script>
