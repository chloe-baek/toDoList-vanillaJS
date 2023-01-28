'use strict';

const loginForm = document.querySelector('#login-form'),
  loginInput = loginForm.querySelector('input'),
  clearStorage = document.querySelector('#clearStorage'),
  greeting = document.querySelector('#greeting');

const HIDDEN = 'hidden',
  USERNAME_KEY = 'username',
  savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreetings(username) {
  greeting.innerHTML = `${username}' To-Do List`;
  greeting.classList.remove(HIDDEN);
}

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN);
} else {
  //show the greetings
  paintGreetings(savedUsername);
  clearStorage.classList.remove(HIDDEN);
}

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN);
  clearStorage.classList.remove(HIDDEN);

  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
});
clearStorage.addEventListener('click', function () {
  localStorage.clear();
  loginForm.classList.toggle(HIDDEN);

  clearStorage.classList.toggle(HIDDEN);
  greeting.classList.add(HIDDEN);
});
