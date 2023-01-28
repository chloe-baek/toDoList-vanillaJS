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

getClock(); // 이 함수를 immediately실행해서 1초를 먼저 한번 불러주고 ↓ setInterval을 부른다.
setInterval(getClock, 1000); // 이것만 실행하면 페이지가 뜨고 1초후부터 시간이 가기 때문에 ↑
