import { describe, it, expect } from 'vitest';
import { getRandomQuote } from './utils';

describe('getRandomQuote', () => {
  it('returns a quote from the array', () => {
    const quotes = ['A', 'B', 'C'];
    const result = getRandomQuote(quotes);
    expect(quotes).toContain(result);
  });

  it('handles empty array', () => {
    const result = getRandomQuote([]);
    expect(result).toBeUndefined();
  });
});
