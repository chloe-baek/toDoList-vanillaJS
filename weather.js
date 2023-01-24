'use strict';
const API_KEY = '368642e95b467ebf2bd17bf59da800fa';

function onGeoOk(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log('You live in', lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data.name, data.weather[0].main);
      const weatherContainer = document.querySelector(
        '#weather span:first-child'
      );
      const cityContainer = document.querySelector('#weather span:last-child');
      //   const name = data.name;
      //   const weather = data.weather[0].main;
      weatherContainer.innerHTML = `${data.weather[0].main} / ${date.main.temp}`;
      cityContainer.innerHTML = data.name;
    }); //JS will call the url. You do not have to go to url.
}
function onGeoError() {
  console.log("Can't fine you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
