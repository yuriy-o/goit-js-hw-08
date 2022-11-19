import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// const throttle = require('lodash.throttle'); //викликаю throttle → частина бібліотеки Lodash

player.on('timeupdate', throttle(setTimePlay, 1000));

function setTimePlay(e) {
  const timePlay = e.seconds;
  localStorage.setItem('videoplayer-current-time', timePlay);
}

const localTime = localStorage.getItem('videoplayer-current-time'); //Отримую час з локального сховища

//Перевірка пустого Local Storage
if (localTime) {
  player.setCurrentTime(localTime); //задаю плеєру час з локального сховища
}
