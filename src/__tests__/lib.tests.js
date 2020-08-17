import { formatMoney, difference, truncate, debounce, any } from '../lib/';

test('formatMoney', () => {
  expect(formatMoney(10000)).toBe('10,000.00');
  expect(formatMoney(999.99)).toBe('999.99');
  expect(formatMoney(1258.9578123)).toBe('1,258.96');
  expect(formatMoney(22326.45123)).toBe('22,326.45');
});

test('difference', () => {
  expect(difference(5.99, 2.39)).toBe(3.6);
  expect(difference(1025, 425.75)).toBe(599.25);
});

test('truncate', () => {
  const string =
    'Spiderman Spiderman, does whatever a spider can, spins a web any size';
  expect(truncate(7, string)).toBe(
    'Spiderman Spiderman, does whatever a spider can, s...'
  );
});

test('debounce', () => {
  const fn = jest.fn();
  const debounceFn = debounce(fn);
  debounceFn();
  setTimeout(() => {
    expect(fn).toHaveBeenCalled();
  }, 30);
});

test('any', () => {
  expect(any('b', [{}, {}])).toBe(false);
  expect(any('b', [{ b: null }, { b: false }, { b: 0 }])).toBe(false);
  expect(any('b', [{ b: null }, { b: true }, { b: 0 }])).toBe(true);
});
