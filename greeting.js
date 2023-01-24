'use strict';
/*
const dayOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

// Get Item from Array
console.log(dayOfWeek[5]);

// Add one more day to the array
dayOfWeek.push('sun');
console.log(dayOfWeek);

const player = {
  name: 'Chloe',
  points: 10,
  fat: true,
};

console.log(player.name);
player.points = 15; //Change value
player.lastName = 'potato'; //Add object

function sayHello(nameOfPerson, age) {
  console.log(`Hello my name is ${nameOfPerson} and I'm ${age}`);
}

sayHello('chloe', 10);
sayHello('elle', 30);

function plus(a, b) {
  console.log(a + b);
}

plus(2, 4);
plus(6, 7);

const player1 = {
  name: 'chloe',
  sayHello1: function (otherName) {
    console.log(`hello! ${otherName} nice to meet you`);
  },
};

console.log(player1.name);
player1.sayHello1('lynn');

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

// calculator.plus(2, 5);
// console.log(calculator.plus(2, 5)); //undefined -> actually, calculator.plus에 값이 없는거다
// calculator.minus(6, 8);
// calculator.times(1, 4);
// calculator.divide(7, 39);
// calculator.power(7, 3);
const plusResult = calculator.plus(3, 5);
// console.log(plusResult);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);

console.log(timesResult);

const age = 96;
function calKrAge(ageOfFore) {
  return ageOfFore + 2;
}

const krAge = calKrAge(age);
console.log(krAge); //without return, undefined



const age = parseInt(prompt('how old are you?'));

console.log();
// if (condition) {
//   // condition === true
// } else {
//   // condition === false
// }

if (isNaN(age)) {
  console.log('Please write a number');
} else {
  console.log(age);
}
*/
// console.dir(); => open elements

const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');

const link = document.querySelector('a');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden'; //중요한 정보를 담은게 아닐때는 대문자로 작성.
const USERNAME_KEY = 'username';

function paintGreetings(username) {
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);

  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    //local storage에 username을 저장
    localStorage.setItem(USERNAME_KEY, username);

    //form을 hidden으로 바꾸고 h1을 보여지게 하면서 컨텐츠를 입력.
    paintGreetings(username);
  });
} else {
  //show the greetings
  paintGreetings(savedUsername);
}
