'use strict';

const clock = document.querySelector('h2#clock'),
  today = document.querySelector('h2#date');

function getClock() {
  const date = new Date(),
    months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    hours = String(date.getHours()).padStart(2, '0'),
    minutes = String(date.getMinutes()).padStart(2, '0'),
    seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
  today.innerHTML = `${months[date.getMonth()]} ${date.getDate()}`;
}

getClock();
setInterval(getClock, 1000);
