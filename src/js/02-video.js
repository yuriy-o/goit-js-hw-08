import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', function (e) {
  const timePlay = e.seconds;
  console.log(timePlay);

  localStorage.setItem('videoplayer-current-time', timePlay);
});

const localTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(localTime); //задає плеєру час з локального сховища
