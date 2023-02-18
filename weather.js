'use strict';
const API_KEY = config.apikey;

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log('You live in', lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherContainer = document.querySelector(
        '#weather span:first-child'
      );
      const cityContainer = document.querySelector('#weather span:last-child');

      weatherContainer.innerHTML = `${data.weather[0].main} / ${Math.floor(
        data.main.temp
      )}&#8451;`;
      cityContainer.innerHTML = data.name;
    });
}
function onGeoError() {
  console.log("Can't fine you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
