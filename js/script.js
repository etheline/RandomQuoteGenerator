/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
An array of quote objects, each containing the quote, source, citation, and year.  
***/
const quotes = [
  { 
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    source: 'Nelson Mandela'
  },
  { 
    quote: 'The way to get started is to quit talking and begin doing.', 
    source: 'Walt Disney'
  }, 
  { 
    quote: 'If life were predictable it would cease to be life, and be without flavor.', 
    source: 'Eleanor Roosevelt'
  }, 
  { 
    quote: `Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.`, 
    source: 'Steve Jobs'
  }, 
  { 
    quote: `If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.`, 
    source: 'Oprah Winfrey',
    tags: ['happiness']
  }, 
  { 
    quote: `Life has a meaning but do not set out to find out. Just live it out`, 
    source: 'Bangambiki Habyarimana',
    citation: 'Pearls Of Eternity'
  }, 
  { 
    quote: `You may not control all the events that happen to you, but you can decide not to be reduced by them.`, 
    source: 'Maya Angelou',
    year: 1999, 
    tags: ['inspiration', 'life']
  }, 
  { 
    quote: `You can only become truly accomplished at something you love.`, 
    source: 'Maya Angelou',
    year: 2000, 
    tags: ['inspiration', 'life']
  }

]


/***
Generates a random index and returns the value at that index in the quotes array. 
***/
function getRandomQuote() {
  const randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}




/***
printQuote calls getRandomQuote to get a random quote from the list of quotes. Then it constructs HTML code for the new quote and displays it on the page. 
***/
function printQuote() {
  let quote = getRandomQuote();
  const currQuote = document.querySelector('.quote').innerHTML;
  // Generate new quote if it's the same as the current quote on the page
  while (currQuote === quote.quote) {
    quote = getRandomQuote();
  }
  let newQuote = `<p class="quote">${quote.quote}</p>
  <p class="source">${quote.source}`
  if ('citation' in quote) {
    newQuote += `<span class="citation">${quote.citation}</span>`;
  } if ('year' in quote) {
    newQuote += `<span class="year">${quote.year}</span>`;
  } if ('tags' in quote) {
    for (let i = 0; i < quote.tags.length; i++) {
      newQuote += `<span class="tag">${quote.tags[i]}</span>`;
    }
  }
  newQuote += '</p>';
  document.getElementById('quote-box').innerHTML = newQuote;
  changeBG();
}

/***
 Updates background color of page randomly. 
***/
function changeBG() {
  let rgbColor = 'rgb(';
  for (let i=0; i < 2; i++) {
    rgbColor += `${Math.floor(Math.random() * 256)}, `;
  }
  rgbColor += `${Math.floor(Math.random() * 256)})`;
  document.querySelector('body').style.backgroundColor = rgbColor;
}


/***
 Prints a new quote and updates background color randomly every time the user clicks on the 'Show another quote' button by calling printQuote. 
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

// Automatically changes quote on screen every 20 seconds
setInterval(printQuote, 20000);