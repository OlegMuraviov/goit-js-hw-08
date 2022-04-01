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

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
