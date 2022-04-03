import Player from '@vimeo/player';
import _ from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let currentPlayingTime = {
  cpt: 0,
};

const onPlay = function (data) {
  currentPlayingTime.cpt = data.seconds;
  console.log(currentPlayingTime);
  localStorage.setItem('videoplayer-current-time', currentPlayingTime.cpt);
};

player.on('timeupdate', _(onPlay, 1000));

const saveTime = localStorage.getItem('videoplayer-current-time');
if (saveTime) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
