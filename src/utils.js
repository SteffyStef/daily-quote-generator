export function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
