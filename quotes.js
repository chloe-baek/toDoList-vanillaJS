'use strict';

const quotes = [
  {
    quote:
      'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
    author: 'Mother Teresa',
  },
  {
    quote: 'When you reach the end of you rope, tie a knot in it and hang on.',
    author: 'Franklin D. Roosevelt',
  },
  {
    quote:
      'Alwasy remember that you are absolutely unique. Just like eveyone else',
    author: 'Margaret Mead',
  },
  {
    quote:
      "Don't judge each day by the harvest you reap but by the seed that you plant.",
    author: 'Robert Louis Stevenson',
  },
  {
    quote:
      'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt',
  },
  {
    quote:
      'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
    author: 'Benjamin Franklin',
  },
  {
    quote:
      'The best and most beautiful things in the world cannot be seen or ever touched - they must be felt with the heart.',
    author: 'Helen Keller',
  },
  {
    quote:
      'It is during our darkest momnets that we must focus to see the lignt.',
    author: 'Aristotle',
  },
  {
    quote: 'Whoever is happy will make others happy too.',
    author: 'Anne Frank',
  },
  {
    quote:
      'Do not go where the path may lead, go instead where there is no path and leave a trail.',
    author: 'Ralph Waldo Emerson',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

// Math.random() -> 0~1(float 소숫점들))
// Math.random() * 10  -> 0~9.99999.....

// console.log(quotes[0])=> 1번째의값
// console.log(quotes[Math.floor(Math.random() * 10)]);  -> hard code 명언이 몇개인지 알고있어야 한다.

// console.log(quotes[Math.floor(Math.random() * quotes.length)]);

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;
