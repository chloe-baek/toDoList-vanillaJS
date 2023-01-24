'use strict';

const clock = document.querySelector('h2#clock');

// function sayHello() {
//   console.log('hello');
// }

// setInterval(sayHello, 5000);
// setTimeout(sayHello, 5000);

// const date = new Date();
// console.log(date.getFullYear());
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());

// console.log(new Date().getHours());

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 이 함수를 immediately실행해서 1초를 먼저 한번 불러주고 ↓ setInterval을 부른다.
setInterval(getClock, 1000); // 이것만 실행하면 페이지가 뜨고 1초후부터 시간이 가기 때문에 ↑
