const quotes = [
  'The best way to get started is to quit talking and begin doing. — Walt Disney',
  'Success is not in what you have, but who you are. — Bo Bennett',
  'Don’t let yesterday take up too much of today. — Will Rogers',
  'Do what you can with all you have, wherever you are. — Theodore Roosevelt',
];

function getQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote').innerText = quote;
}

// Load one on page load
window.onload = getQuote;
