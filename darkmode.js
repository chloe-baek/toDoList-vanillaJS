const darkMode = document.querySelector('.button');

darkMode.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    darkMode.innerHTML = 'Light';
    darkMode.style.color = '#fff';
  } else {
    darkMode.innerHTML = 'Dark';
    darkMode.style.color = '#000';
  }
});
