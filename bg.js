const images = ['#5C7339', '#5f9ae0', '#BF9C88', '#BF452A'],
  chosenColor = images[Math.floor(Math.random() * images.length)],
  bgColor = document.querySelector('path');

bgColor.style.fill = chosenColor;
// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);
